import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { DepartmentTitle } from "../department/DepartmentTitle";
import { MedicalRecordTitle } from "../medicalRecord/MedicalRecordTitle";
import { PrescriptionTitle } from "../prescription/PrescriptionTitle";
import { UserTitle } from "../user/UserTitle";

export const DoctorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="appointments" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="Department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <TextInput label="License Number" source="licenseNumber" />
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
        <TextInput label="Specialization" source="specialization" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
