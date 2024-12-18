/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PrescriptionWhereUniqueInput } from "./PrescriptionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PrescriptionUpdateInput } from "./PrescriptionUpdateInput";

@ArgsType()
class UpdatePrescriptionArgs {
  @ApiProperty({
    required: true,
    type: () => PrescriptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionWhereUniqueInput)
  @Field(() => PrescriptionWhereUniqueInput, { nullable: false })
  where!: PrescriptionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PrescriptionUpdateInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionUpdateInput)
  @Field(() => PrescriptionUpdateInput, { nullable: false })
  data!: PrescriptionUpdateInput;
}

export { UpdatePrescriptionArgs as UpdatePrescriptionArgs };
