import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DoctorTitle } from "../doctor/DoctorTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const MedicalRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Diagnosis" source="diagnosis" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <TextInput label="Notes" source="notes" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <TextInput label="Treatment" source="treatment" />
      </SimpleForm>
    </Edit>
  );
};
