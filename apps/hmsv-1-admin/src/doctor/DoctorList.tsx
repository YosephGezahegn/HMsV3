import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DoctorList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Doctors"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="License Number" source="licenseNumber" />
        <TextField label="Specialization" source="specialization" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
