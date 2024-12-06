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
import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { MedicalRecordCreateNestedManyWithoutDoctorsInput } from "./MedicalRecordCreateNestedManyWithoutDoctorsInput";
import { PrescriptionCreateNestedManyWithoutDoctorsInput } from "./PrescriptionCreateNestedManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DoctorCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;

  @ApiProperty({
    required: true,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @Field(() => DepartmentWhereUniqueInput)
  department!: DepartmentWhereUniqueInput;

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
    type: () => MedicalRecordCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => MedicalRecordCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => MedicalRecordCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorsInput;

  @ApiProperty({
    required: false,
    type: () => PrescriptionCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => PrescriptionCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  prescriptions?: PrescriptionCreateNestedManyWithoutDoctorsInput;

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { DoctorCreateInput as DoctorCreateInput };