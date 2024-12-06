import * as graphql from "@nestjs/graphql";
import { PrescriptionResolverBase } from "./base/prescription.resolver.base";
import { Prescription } from "./base/Prescription";
import { PrescriptionService } from "./prescription.service";

@graphql.Resolver(() => Prescription)
export class PrescriptionResolver extends PrescriptionResolverBase {
  constructor(protected readonly service: PrescriptionService) {
    super(service);
  }
}
