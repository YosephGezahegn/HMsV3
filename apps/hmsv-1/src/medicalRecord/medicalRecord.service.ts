import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicalRecordServiceBase } from "./base/medicalRecord.service.base";

@Injectable()
export class MedicalRecordService extends MedicalRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
