import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MedicationService } from "./medication.service";
import { MedicationControllerBase } from "./base/medication.controller.base";

@swagger.ApiTags("medications")
@common.Controller("medications")
export class MedicationController extends MedicationControllerBase {
  constructor(protected readonly service: MedicationService) {
    super(service);
  }
}
