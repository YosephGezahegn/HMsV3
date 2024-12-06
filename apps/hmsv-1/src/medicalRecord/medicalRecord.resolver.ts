import * as graphql from "@nestjs/graphql";
import { MedicalRecordResolverBase } from "./base/medicalRecord.resolver.base";
import { MedicalRecord } from "./base/MedicalRecord";
import { MedicalRecordService } from "./medicalRecord.service";

@graphql.Resolver(() => MedicalRecord)
export class MedicalRecordResolver extends MedicalRecordResolverBase {
  constructor(protected readonly service: MedicalRecordService) {
    super(service);
  }
}
