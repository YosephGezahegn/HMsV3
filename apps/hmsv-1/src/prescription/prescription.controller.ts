import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrescriptionService } from "./prescription.service";
import { PrescriptionControllerBase } from "./base/prescription.controller.base";

@swagger.ApiTags("prescriptions")
@common.Controller("prescriptions")
export class PrescriptionController extends PrescriptionControllerBase {
  constructor(protected readonly service: PrescriptionService) {
    super(service);
  }
}
