import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BillService } from "./bill.service";
import { BillControllerBase } from "./base/bill.controller.base";

@swagger.ApiTags("bills")
@common.Controller("bills")
export class BillController extends BillControllerBase {
  constructor(protected readonly service: BillService) {
    super(service);
  }
}
