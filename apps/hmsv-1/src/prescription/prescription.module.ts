import { Module } from "@nestjs/common";
import { PrescriptionModuleBase } from "./base/prescription.module.base";
import { PrescriptionService } from "./prescription.service";
import { PrescriptionController } from "./prescription.controller";
import { PrescriptionResolver } from "./prescription.resolver";

@Module({
  imports: [PrescriptionModuleBase],
  controllers: [PrescriptionController],
  providers: [PrescriptionService, PrescriptionResolver],
  exports: [PrescriptionService],
})
export class PrescriptionModule {}
