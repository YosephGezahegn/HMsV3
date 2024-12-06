import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DoctorTitle } from "../doctor/DoctorTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Password" source="password" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <TextInput label="Phone Number" source="phoneNumber" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "ADMIN", value: "ADMIN" },
            { label: "DOCTOR", value: "DOCTOR" },
            { label: "NURSE", value: "NURSE" },
            { label: "PATIENT", value: "PATIENT" },
            { label: "STAFF", value: "STAFF" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
