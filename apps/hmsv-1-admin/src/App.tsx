import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { MedicalRecordList } from "./medicalRecord/MedicalRecordList";
import { MedicalRecordCreate } from "./medicalRecord/MedicalRecordCreate";
import { MedicalRecordEdit } from "./medicalRecord/MedicalRecordEdit";
import { MedicalRecordShow } from "./medicalRecord/MedicalRecordShow";
import { PrescriptionList } from "./prescription/PrescriptionList";
import { PrescriptionCreate } from "./prescription/PrescriptionCreate";
import { PrescriptionEdit } from "./prescription/PrescriptionEdit";
import { PrescriptionShow } from "./prescription/PrescriptionShow";
import { MedicationList } from "./medication/MedicationList";
import { MedicationCreate } from "./medication/MedicationCreate";
import { MedicationEdit } from "./medication/MedicationEdit";
import { MedicationShow } from "./medication/MedicationShow";
import { BillList } from "./bill/BillList";
import { BillCreate } from "./bill/BillCreate";
import { BillEdit } from "./bill/BillEdit";
import { BillShow } from "./bill/BillShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"HMSV1-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="MedicalRecord"
          list={MedicalRecordList}
          edit={MedicalRecordEdit}
          create={MedicalRecordCreate}
          show={MedicalRecordShow}
        />
        <Resource
          name="Prescription"
          list={PrescriptionList}
          edit={PrescriptionEdit}
          create={PrescriptionCreate}
          show={PrescriptionShow}
        />
        <Resource
          name="Medication"
          list={MedicationList}
          edit={MedicationEdit}
          create={MedicationCreate}
          show={MedicationShow}
        />
        <Resource
          name="Bill"
          list={BillList}
          edit={BillEdit}
          create={BillCreate}
          show={BillShow}
        />
      </Admin>
    </div>
  );
};

export default App;
