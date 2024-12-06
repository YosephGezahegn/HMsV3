import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MedicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Medications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField label="Name" source="name" />
        <TextField label="Stock Quantity" source="stockQuantity" />
        <TextField label="Unit Price" source="unitPrice" />{" "}
      </Datagrid>
    </List>
  );
};
