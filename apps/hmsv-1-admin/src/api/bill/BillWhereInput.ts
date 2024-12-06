import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type BillWhereInput = {
  amount?: DecimalFilter;
  date?: DateTimeFilter;
  description?: StringFilter;
  id?: StringFilter;
  isPaid?: BooleanFilter;
  patientId?: StringFilter;
};
