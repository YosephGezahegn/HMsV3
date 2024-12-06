import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
