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
import { MedicalRecordController } from "../medicalRecord.controller";
import { MedicalRecordService } from "../medicalRecord.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  date: new Date(),
  diagnosis: "exampleDiagnosis",
  id: "exampleId",
  notes: "exampleNotes",
  treatment: "exampleTreatment",
};
const CREATE_RESULT = {
  date: new Date(),
  diagnosis: "exampleDiagnosis",
  id: "exampleId",
  notes: "exampleNotes",
  treatment: "exampleTreatment",
};
const FIND_MANY_RESULT = [
  {
    date: new Date(),
    diagnosis: "exampleDiagnosis",
    id: "exampleId",
    notes: "exampleNotes",
    treatment: "exampleTreatment",
  },
];
const FIND_ONE_RESULT = {
  date: new Date(),
  diagnosis: "exampleDiagnosis",
  id: "exampleId",
  notes: "exampleNotes",
  treatment: "exampleTreatment",
};

const service = {
  createMedicalRecord() {
    return CREATE_RESULT;
  },
  medicalRecords: () => FIND_MANY_RESULT,
  medicalRecord: ({ where }: { where: { id: string } }) => {
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

describe("MedicalRecord", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MedicalRecordService,
          useValue: service,
        },
      ],
      controllers: [MedicalRecordController],
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

  test("POST /medicalRecords", async () => {
    await request(app.getHttpServer())
      .post("/medicalRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /medicalRecords", async () => {
    await request(app.getHttpServer())
      .get("/medicalRecords")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /medicalRecords/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/medicalRecords"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /medicalRecords/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/medicalRecords"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /medicalRecords existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/medicalRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/medicalRecords")
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
