import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const MedicalRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="date" label="Date" />
        <TextField label="Diagnosis" source="diagnosis" />
        <ReferenceField label="Doctor" source="doctor.id" reference="Doctor">
          <TextField source={DOCTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Treatment" source="treatment" />
      </SimpleShowLayout>
    </Show>
  );
};
