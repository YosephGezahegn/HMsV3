import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { MedicalRecordTitle } from "../medicalRecord/MedicalRecordTitle";
import { PrescriptionTitle } from "../prescription/PrescriptionTitle";
import { UserTitle } from "../user/UserTitle";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Allergies" source="allergies" />
        <ReferenceArrayInput source="appointments" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Blood Group" source="bloodGroup" />
        <DateTimeInput label="Date Of Birth" source="dateOfBirth" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "MALE", value: "MALE" },
            { label: "FEMALE", value: "FEMALE" },
            { label: "OTHER", value: "OTHER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="medicalRecords" reference="MedicalRecord">
          <SelectArrayInput
            optionText={MedicalRecordTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="prescriptions" reference="Prescription">
          <SelectArrayInput
            optionText={PrescriptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
