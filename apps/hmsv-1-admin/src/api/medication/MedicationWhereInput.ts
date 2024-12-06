import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { DecimalFilter } from "../../util/DecimalFilter";

export type MedicationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  manufacturer?: StringNullableFilter;
  name?: StringFilter;
  stockQuantity?: IntFilter;
  unitPrice?: DecimalFilter;
};
