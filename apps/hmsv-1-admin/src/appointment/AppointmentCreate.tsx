import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date Time" source="dateTime" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <TextInput label="Notes" source="notes" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "SCHEDULED", value: "SCHEDULED" },
            { label: "CONFIRMED", value: "CONFIRMED" },
            { label: "COMPLETED", value: "COMPLETED" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
