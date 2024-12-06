import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MedicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Manufacturer" source="manufacturer" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Stock Quantity" source="stockQuantity" />
        <NumberInput label="Unit Price" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};
