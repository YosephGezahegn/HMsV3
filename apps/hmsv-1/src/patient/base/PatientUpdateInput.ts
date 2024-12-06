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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
  IsEnum,
} from "class-validator";
import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { Type } from "class-transformer";
import { EnumPatientGender } from "./EnumPatientGender";
import { MedicalRecordUpdateManyWithoutPatientsInput } from "./MedicalRecordUpdateManyWithoutPatientsInput";
import { PrescriptionUpdateManyWithoutPatientsInput } from "./PrescriptionUpdateManyWithoutPatientsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PatientUpdateInput {
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
  allergies?: string | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutPatientsInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutPatientsInput;

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
  bloodGroup?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date;

  @ApiProperty({
    required: false,
    enum: EnumPatientGender,
  })
  @IsEnum(EnumPatientGender)
  @IsOptional()
  @Field(() => EnumPatientGender, {
    nullable: true,
  })
  gender?: "MALE" | "FEMALE" | "OTHER";

  @ApiProperty({
    required: false,
    type: () => MedicalRecordUpdateManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => MedicalRecordUpdateManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => MedicalRecordUpdateManyWithoutPatientsInput, {
    nullable: true,
  })
  medicalRecords?: MedicalRecordUpdateManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    type: () => PrescriptionUpdateManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionUpdateManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => PrescriptionUpdateManyWithoutPatientsInput, {
    nullable: true,
  })
  prescriptions?: PrescriptionUpdateManyWithoutPatientsInput;

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

export { PatientUpdateInput as PatientUpdateInput };
