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
import { MedicationController } from "../medication.controller";
import { MedicationService } from "../medication.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  description: "exampleDescription",
  id: "exampleId",
  manufacturer: "exampleManufacturer",
  name: "exampleName",
  stockQuantity: 42,
  unitPrice: 42.424242424,
};
const CREATE_RESULT = {
  description: "exampleDescription",
  id: "exampleId",
  manufacturer: "exampleManufacturer",
  name: "exampleName",
  stockQuantity: 42,
  unitPrice: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    description: "exampleDescription",
    id: "exampleId",
    manufacturer: "exampleManufacturer",
    name: "exampleName",
    stockQuantity: 42,
    unitPrice: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  description: "exampleDescription",
  id: "exampleId",
  manufacturer: "exampleManufacturer",
  name: "exampleName",
  stockQuantity: 42,
  unitPrice: 42.424242424,
};

const service = {
  createMedication() {
    return CREATE_RESULT;
  },
  medications: () => FIND_MANY_RESULT,
  medication: ({ where }: { where: { id: string } }) => {
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

describe("Medication", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MedicationService,
          useValue: service,
        },
      ],
      controllers: [MedicationController],
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

  test("POST /medications", async () => {
    await request(app.getHttpServer())
      .post("/medications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /medications", async () => {
    await request(app.getHttpServer())
      .get("/medications")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /medications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/medications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /medications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/medications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /medications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/medications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/medications")
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
