import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { PATIENT_TITLE_FIELD } from "./PatientTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Allergies" source="allergies" />
        <TextField label="Blood Group" source="bloodGroup" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Appointment"
          target="patientId"
          label="Appointments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Date Time" source="dateTime" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MedicalRecord"
          target="patientId"
          label="MedicalRecords"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="date" label="Date" />
            <TextField label="Diagnosis" source="diagnosis" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Treatment" source="treatment" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Prescription"
          target="patientId"
          label="Prescriptions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Dosage" source="dosage" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Frequency" source="frequency" />
            <TextField label="ID" source="id" />
            <TextField label="Medication" source="medication" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Date" source="startDate" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
