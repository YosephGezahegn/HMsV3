import { Module } from "@nestjs/common";
import { BillModuleBase } from "./base/bill.module.base";
import { BillService } from "./bill.service";
import { BillController } from "./bill.controller";
import { BillResolver } from "./bill.resolver";

@Module({
  imports: [BillModuleBase],
  controllers: [BillController],
  providers: [BillService, BillResolver],
  exports: [BillService],
})
export class BillModule {}
