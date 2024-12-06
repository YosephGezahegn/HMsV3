import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BillController } from "../bill.controller";
import { BillService } from "../bill.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.424242424,
  date: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isPaid: "true",
  patientId: "examplePatientId",
};
const CREATE_RESULT = {
  amount: 42.424242424,
  date: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isPaid: "true",
  patientId: "examplePatientId",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.424242424,
    date: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    isPaid: "true",
    patientId: "examplePatientId",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.424242424,
  date: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isPaid: "true",
  patientId: "examplePatientId",
};

const service = {
  createBill() {
    return CREATE_RESULT;
  },
  bills: () => FIND_MANY_RESULT,
  bill: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Bill", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BillService,
          useValue: service,
        },
      ],
      controllers: [BillController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /bills", async () => {
    await request(app.getHttpServer())
      .post("/bills")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /bills", async () => {
    await request(app.getHttpServer())
      .get("/bills")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /bills/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bills"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bills/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bills"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /bills existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bills")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/bills")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
