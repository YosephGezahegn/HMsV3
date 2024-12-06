import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MedicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Manufacturer" source="manufacturer" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Stock Quantity" source="stockQuantity" />
        <NumberInput label="Unit Price" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
