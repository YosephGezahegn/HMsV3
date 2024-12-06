import * as graphql from "@nestjs/graphql";
import { MedicationResolverBase } from "./base/medication.resolver.base";
import { Medication } from "./base/Medication";
import { MedicationService } from "./medication.service";

@graphql.Resolver(() => Medication)
export class MedicationResolver extends MedicationResolverBase {
  constructor(protected readonly service: MedicationService) {
    super(service);
  }
}
