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
} from "class-validator";
import { DoctorUpdateManyWithoutDepartmentsInput } from "./DoctorUpdateManyWithoutDepartmentsInput";
import { Type } from "class-transformer";

@InputType()
class DepartmentUpdateInput {
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
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DoctorUpdateManyWithoutDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => DoctorUpdateManyWithoutDepartmentsInput)
  @IsOptional()
  @Field(() => DoctorUpdateManyWithoutDepartmentsInput, {
    nullable: true,
  })
  doctors?: DoctorUpdateManyWithoutDepartmentsInput;

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
  name?: string;
}

export { DepartmentUpdateInput as DepartmentUpdateInput };