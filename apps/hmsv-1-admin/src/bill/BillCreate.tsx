import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <TextInput label="Patient Id" source="patientId" />
      </SimpleForm>
    </Create>
  );
};
