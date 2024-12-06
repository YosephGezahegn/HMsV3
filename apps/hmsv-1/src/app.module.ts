import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PatientModule } from "./patient/patient.module";
import { DoctorModule } from "./doctor/doctor.module";
import { DepartmentModule } from "./department/department.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { MedicalRecordModule } from "./medicalRecord/medicalRecord.module";
import { PrescriptionModule } from "./prescription/prescription.module";
import { MedicationModule } from "./medication/medication.module";
import { BillModule } from "./bill/bill.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    PatientModule,
    DoctorModule,
    DepartmentModule,
    AppointmentModule,
    MedicalRecordModule,
    PrescriptionModule,
    MedicationModule,
    BillModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
