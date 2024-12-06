import * as graphql from "@nestjs/graphql";
import { DoctorResolverBase } from "./base/doctor.resolver.base";
import { Doctor } from "./base/Doctor";
import { DoctorService } from "./doctor.service";

@graphql.Resolver(() => Doctor)
export class DoctorResolver extends DoctorResolverBase {
  constructor(protected readonly service: DoctorService) {
    super(service);
  }
}
