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
import { PrescriptionWhereInput } from "./PrescriptionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PrescriptionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PrescriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionWhereInput)
  @IsOptional()
  @Field(() => PrescriptionWhereInput, {
    nullable: true,
  })
  every?: PrescriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PrescriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionWhereInput)
  @IsOptional()
  @Field(() => PrescriptionWhereInput, {
    nullable: true,
  })
  some?: PrescriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PrescriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionWhereInput)
  @IsOptional()
  @Field(() => PrescriptionWhereInput, {
    nullable: true,
  })
  none?: PrescriptionWhereInput;
}
export { PrescriptionListRelationFilter as PrescriptionListRelationFilter };