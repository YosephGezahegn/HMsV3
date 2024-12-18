/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { MedicalRecordUpdateManyWithoutDoctorsInput } from "./MedicalRecordUpdateManyWithoutDoctorsInput";
import { PrescriptionUpdateManyWithoutDoctorsInput } from "./PrescriptionUpdateManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DoctorUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutDoctorsInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => DepartmentWhereUniqueInput, {
    nullable: true,
  })
  department?: DepartmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  licenseNumber?: string;

  @ApiProperty({
    required: false,
    type: () => MedicalRecordUpdateManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => MedicalRecordUpdateManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => MedicalRecordUpdateManyWithoutDoctorsInput, {
    nullable: true,
  })
  medicalRecords?: MedicalRecordUpdateManyWithoutDoctorsInput;

  @ApiProperty({
    required: false,
    type: () => PrescriptionUpdateManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionUpdateManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => PrescriptionUpdateManyWithoutDoctorsInput, {
    nullable: true,
  })
  prescriptions?: PrescriptionUpdateManyWithoutDoctorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  specialization?: string;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { DoctorUpdateInput as DoctorUpdateInput };
