import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <TextInput label="Patient Id" source="patientId" />
      </SimpleForm>
    </Edit>
  );
};
