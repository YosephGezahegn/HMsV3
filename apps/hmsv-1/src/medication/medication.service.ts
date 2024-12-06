import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicationServiceBase } from "./base/medication.service.base";

@Injectable()
export class MedicationService extends MedicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
