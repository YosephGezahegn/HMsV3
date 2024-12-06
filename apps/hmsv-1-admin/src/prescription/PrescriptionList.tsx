import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const PrescriptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Prescriptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Doctor" source="doctor.id" reference="Doctor">
          <TextField source={DOCTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Dosage" source="dosage" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Frequency" source="frequency" />
        <TextField label="ID" source="id" />
        <TextField label="Medication" source="medication" />
        <TextField label="Notes" source="notes" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Date" source="startDate" />{" "}
      </Datagrid>
    </List>
  );
};
