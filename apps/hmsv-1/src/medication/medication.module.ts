import { Module } from "@nestjs/common";
import { MedicationModuleBase } from "./base/medication.module.base";
import { MedicationService } from "./medication.service";
import { MedicationController } from "./medication.controller";
import { MedicationResolver } from "./medication.resolver";

@Module({
  imports: [MedicationModuleBase],
  controllers: [MedicationController],
  providers: [MedicationService, MedicationResolver],
  exports: [MedicationService],
})
export class MedicationModule {}
