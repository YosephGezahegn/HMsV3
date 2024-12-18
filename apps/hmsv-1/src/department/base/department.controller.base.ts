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
import { DepartmentService } from "../department.service";
import { DepartmentCreateInput } from "./DepartmentCreateInput";
import { Department } from "./Department";
import { DepartmentFindManyArgs } from "./DepartmentFindManyArgs";
import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { DepartmentUpdateInput } from "./DepartmentUpdateInput";
import { DoctorFindManyArgs } from "../../doctor/base/DoctorFindManyArgs";
import { Doctor } from "../../doctor/base/Doctor";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";

export class DepartmentControllerBase {
  constructor(protected readonly service: DepartmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Department })
  async createDepartment(
    @common.Body() data: DepartmentCreateInput
  ): Promise<Department> {
    return await this.service.createDepartment({
      data: data,
      select: {
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Department] })
  @ApiNestedQuery(DepartmentFindManyArgs)
  async departments(@common.Req() request: Request): Promise<Department[]> {
    const args = plainToClass(DepartmentFindManyArgs, request.query);
    return this.service.departments({
      ...args,
      select: {
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async department(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    const result = await this.service.department({
      where: params,
      select: {
        description: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDepartment(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() data: DepartmentUpdateInput
  ): Promise<Department | null> {
    try {
      return await this.service.updateDepartment({
        where: params,
        data: data,
        select: {
          description: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDepartment(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    try {
      return await this.service.deleteDepartment({
        where: params,
        select: {
          description: true,
          id: true,
          name: true,
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

  @common.Get("/:id/doctors")
  @ApiNestedQuery(DoctorFindManyArgs)
  async findDoctors(
    @common.Req() request: Request,
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Doctor[]> {
    const query = plainToClass(DoctorFindManyArgs, request.query);
    const results = await this.service.findDoctors(params.id, {
      ...query,
      select: {
        department: {
          select: {
            id: true,
          },
        },

        id: true,
        licenseNumber: true,
        specialization: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/doctors")
  async connectDoctors(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: DoctorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      doctors: {
        connect: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/doctors")
  async updateDoctors(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: DoctorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      doctors: {
        set: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/doctors")
  async disconnectDoctors(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: DoctorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      doctors: {
        disconnect: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }
}
