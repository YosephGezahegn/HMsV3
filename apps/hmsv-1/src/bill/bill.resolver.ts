import * as graphql from "@nestjs/graphql";
import { BillResolverBase } from "./base/bill.resolver.base";
import { Bill } from "./base/Bill";
import { BillService } from "./bill.service";

@graphql.Resolver(() => Bill)
export class BillResolver extends BillResolverBase {
  constructor(protected readonly service: BillService) {
    super(service);
  }
}
