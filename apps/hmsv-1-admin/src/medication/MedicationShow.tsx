import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MedicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField label="Name" source="name" />
        <TextField label="Stock Quantity" source="stockQuantity" />
        <TextField label="Unit Price" source="unitPrice" />
      </SimpleShowLayout>
    </Show>
  );
};
