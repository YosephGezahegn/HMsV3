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
  IsDate,
  ValidateNested,
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";

@InputType()
class AppointmentCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateTime!: Date;

  @ApiProperty({
    required: true,
    type: () => DoctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereUniqueInput)
  @Field(() => DoctorWhereUniqueInput)
  doctor!: DoctorWhereUniqueInput;

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
  notes?: string | null;

  @ApiProperty({
    required: true,
    type: () => PatientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput)
  patient!: PatientWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumAppointmentStatus,
  })
  @IsEnum(EnumAppointmentStatus)
  @Field(() => EnumAppointmentStatus)
  status!: "SCHEDULED" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
}

export { AppointmentCreateInput as AppointmentCreateInput };