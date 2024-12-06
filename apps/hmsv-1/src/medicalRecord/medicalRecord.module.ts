import { Module } from "@nestjs/common";
import { MedicalRecordModuleBase } from "./base/medicalRecord.module.base";
import { MedicalRecordService } from "./medicalRecord.service";
import { MedicalRecordController } from "./medicalRecord.controller";
import { MedicalRecordResolver } from "./medicalRecord.resolver";

@Module({
  imports: [MedicalRecordModuleBase],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService, MedicalRecordResolver],
  exports: [MedicalRecordService],
})
export class MedicalRecordModule {}
