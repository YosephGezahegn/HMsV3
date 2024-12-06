import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MedicalRecordService } from "./medicalRecord.service";
import { MedicalRecordControllerBase } from "./base/medicalRecord.controller.base";

@swagger.ApiTags("medicalRecords")
@common.Controller("medicalRecords")
export class MedicalRecordController extends MedicalRecordControllerBase {
  constructor(protected readonly service: MedicalRecordService) {
    super(service);
  }
}
