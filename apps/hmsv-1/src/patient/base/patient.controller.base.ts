/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PatientService } from "../patient.service";
import { PatientCreateInput } from "./PatientCreateInput";
import { Patient } from "./Patient";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { MedicalRecordFindManyArgs } from "../../medicalRecord/base/MedicalRecordFindManyArgs";
import { MedicalRecord } from "../../medicalRecord/base/MedicalRecord";
import { MedicalRecordWhereUniqueInput } from "../../medicalRecord/base/MedicalRecordWhereUniqueInput";
import { PrescriptionFindManyArgs } from "../../prescription/base/PrescriptionFindManyArgs";
import { Prescription } from "../../prescription/base/Prescription";
import { PrescriptionWhereUniqueInput } from "../../prescription/base/PrescriptionWhereUniqueInput";

export class PatientControllerBase {
  constructor(protected readonly service: PatientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  async createPatient(
    @common.Body() data: PatientCreateInput
  ): Promise<Patient> {
    return await this.service.createPatient({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        allergies: true,
        bloodGroup: true,
        dateOfBirth: true,
        gender: true,
        id: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  async patients(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.patients({
      ...args,
      select: {
        allergies: true,
        bloodGroup: true,
        dateOfBirth: true,
        gender: true,
        id: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async patient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.patient({
      where: params,
      select: {
        allergies: true,
        bloodGroup: true,
        dateOfBirth: true,
        gender: true,
        id: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePatient(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.updatePatient({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          allergies: true,
          bloodGroup: true,
          dateOfBirth: true,
          gender: true,
          id: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePatient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.deletePatient({
        where: params,
        select: {
          allergies: true,
          bloodGroup: true,
          dateOfBirth: true,
          gender: true,
          id: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        dateTime: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        notes: true,

        patient: {
          select: {
            id: true,
          },
        },

        status: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  async connectAppointments(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/medicalRecords")
  @ApiNestedQuery(MedicalRecordFindManyArgs)
  async findMedicalRecords(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<MedicalRecord[]> {
    const query = plainToClass(MedicalRecordFindManyArgs, request.query);
    const results = await this.service.findMedicalRecords(params.id, {
      ...query,
      select: {
        date: true,
        diagnosis: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        notes: true,

        patient: {
          select: {
            id: true,
          },
        },

        treatment: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/medicalRecords")
  async connectMedicalRecords(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MedicalRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalRecords: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/medicalRecords")
  async updateMedicalRecords(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MedicalRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalRecords: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/medicalRecords")
  async disconnectMedicalRecords(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MedicalRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalRecords: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/prescriptions")
  @ApiNestedQuery(PrescriptionFindManyArgs)
  async findPrescriptions(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Prescription[]> {
    const query = plainToClass(PrescriptionFindManyArgs, request.query);
    const results = await this.service.findPrescriptions(params.id, {
      ...query,
      select: {
        doctor: {
          select: {
            id: true,
          },
        },

        dosage: true,
        endDate: true,
        frequency: true,
        id: true,
        medication: true,
        notes: true,

        patient: {
          select: {
            id: true,
          },
        },

        startDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/prescriptions")
  async connectPrescriptions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PrescriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      prescriptions: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/prescriptions")
  async updatePrescriptions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PrescriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      prescriptions: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/prescriptions")
  async disconnectPrescriptions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: PrescriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      prescriptions: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }
}