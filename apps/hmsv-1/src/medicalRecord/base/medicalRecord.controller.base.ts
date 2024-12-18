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
import { MedicalRecordService } from "../medicalRecord.service";
import { MedicalRecordCreateInput } from "./MedicalRecordCreateInput";
import { MedicalRecord } from "./MedicalRecord";
import { MedicalRecordFindManyArgs } from "./MedicalRecordFindManyArgs";
import { MedicalRecordWhereUniqueInput } from "./MedicalRecordWhereUniqueInput";
import { MedicalRecordUpdateInput } from "./MedicalRecordUpdateInput";

export class MedicalRecordControllerBase {
  constructor(protected readonly service: MedicalRecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MedicalRecord })
  async createMedicalRecord(
    @common.Body() data: MedicalRecordCreateInput
  ): Promise<MedicalRecord> {
    return await this.service.createMedicalRecord({
      data: {
        ...data,

        doctor: {
          connect: data.doctor,
        },

        patient: {
          connect: data.patient,
        },
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MedicalRecord] })
  @ApiNestedQuery(MedicalRecordFindManyArgs)
  async medicalRecords(
    @common.Req() request: Request
  ): Promise<MedicalRecord[]> {
    const args = plainToClass(MedicalRecordFindManyArgs, request.query);
    return this.service.medicalRecords({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MedicalRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async medicalRecord(
    @common.Param() params: MedicalRecordWhereUniqueInput
  ): Promise<MedicalRecord | null> {
    const result = await this.service.medicalRecord({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MedicalRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMedicalRecord(
    @common.Param() params: MedicalRecordWhereUniqueInput,
    @common.Body() data: MedicalRecordUpdateInput
  ): Promise<MedicalRecord | null> {
    try {
      return await this.service.updateMedicalRecord({
        where: params,
        data: {
          ...data,

          doctor: {
            connect: data.doctor,
          },

          patient: {
            connect: data.patient,
          },
        },
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
  @swagger.ApiOkResponse({ type: MedicalRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMedicalRecord(
    @common.Param() params: MedicalRecordWhereUniqueInput
  ): Promise<MedicalRecord | null> {
    try {
      return await this.service.deleteMedicalRecord({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
