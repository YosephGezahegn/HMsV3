import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { DOCTOR_TITLE_FIELD } from "./DoctorTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DoctorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
        <ReferenceManyField
          reference="Appointment"
          target="doctorId"
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
          target="doctorId"
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
          target="doctorId"
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
