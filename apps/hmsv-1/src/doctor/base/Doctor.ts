/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Appointment } from "../../appointment/base/Appointment";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Department } from "../../department/base/Department";
import { MedicalRecord } from "../../medicalRecord/base/MedicalRecord";
import { Prescription } from "../../prescription/base/Prescription";
import { User } from "../../user/base/User";

@ObjectType()
class Doctor {
  @ApiProperty({
    required: false,
    type: () => [Appointment],
  })
  @ValidateNested()
  @Type(() => Appointment)
  @IsOptional()
  appointments?: Array<Appointment>;

  @ApiProperty({
    required: true,
    type: () => Department,
  })
  @ValidateNested()
  @Type(() => Department)
  department?: Department;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  licenseNumber!: string;

  @ApiProperty({
    required: false,
    type: () => [MedicalRecord],
  })
  @ValidateNested()
  @Type(() => MedicalRecord)
  @IsOptional()
  medicalRecords?: Array<MedicalRecord>;

  @ApiProperty({
    required: false,
    type: () => [Prescription],
  })
  @ValidateNested()
  @Type(() => Prescription)
  @IsOptional()
  prescriptions?: Array<Prescription>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  specialization!: string;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}

export { Doctor as Doctor };
