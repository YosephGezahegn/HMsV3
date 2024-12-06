import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const BillShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="date" label="Date" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Paid" source="isPaid" />
        <TextField label="Patient Id" source="patientId" />
      </SimpleShowLayout>
    </Show>
  );
};
