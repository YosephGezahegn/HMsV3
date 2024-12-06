import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BillList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Bills"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Amount" source="amount" />
        <DateField source="date" label="Date" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Paid" source="isPaid" />
        <TextField label="Patient Id" source="patientId" />{" "}
      </Datagrid>
    </List>
  );
};
