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
import { Doctor } from "../../doctor/base/Doctor";
import {
  ValidateNested,
  IsString,
  MaxLength,
  IsDate,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { Patient } from "../../patient/base/Patient";

@ObjectType()
class Prescription {
  @ApiProperty({
    required: true,
    type: () => Doctor,
  })
  @ValidateNested()
  @Type(() => Doctor)
  doctor?: Doctor;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  dosage!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  frequency!: string;

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
  medication!: string;

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
  notes!: string | null;

  @ApiProperty({
    required: true,
    type: () => Patient,
  })
  @ValidateNested()
  @Type(() => Patient)
  patient?: Patient;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;
}

export { Prescription as Prescription };