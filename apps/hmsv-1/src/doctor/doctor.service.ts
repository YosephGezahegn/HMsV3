import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorServiceBase } from "./base/doctor.service.base";

@Injectable()
export class DoctorService extends DoctorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
