import * as graphql from "@nestjs/graphql";
import { PatientResolverBase } from "./base/patient.resolver.base";
import { Patient } from "./base/Patient";
import { PatientService } from "./patient.service";

@graphql.Resolver(() => Patient)
export class PatientResolver extends PatientResolverBase {
  constructor(protected readonly service: PatientService) {
    super(service);
  }
}
