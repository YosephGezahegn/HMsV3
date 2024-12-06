import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Allergies" source="allergies" />
        <TextField label="Blood Group" source="bloodGroup" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
