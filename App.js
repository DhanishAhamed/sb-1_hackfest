const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import OfficeScholarshipApplied from "./screens/OfficeScholarshipApplied";
import OfficeOD from "./screens/OfficeOD";
import OfficeMedicalLeave from "./screens/OfficeMedicalLeave";
import OfficeODAndMedical from "./screens/OfficeODAndMedical";
import OfficeBonafideApproved from "./screens/OfficeBonafideApproved";
import OfficeBonafideStatus from "./screens/OfficeBonafideStatus";
import OfficeBonafideApply from "./screens/OfficeBonafideApply";
import OfficeBonafide from "./screens/OfficeBonafide";
import OfficeFeePaymentPage from "./screens/OfficeFeePaymentPage";
import OfficeFeepaymentAllTransact from "./screens/OfficeFeepaymentAllTransact";
import OfficeFeePayment from "./screens/OfficeFeePayment";
import Token from "./screens/Token";
import Canteenpayment from "./screens/Canteenpayment";
import AccountUserProfile from "./screens/AccountUserProfile";
import Done from "./screens/Done";
import OfficeScholarshipStatus3 from "./screens/OfficeScholarshipStatus3";
import OfficeScholarshipStatus2 from "./screens/OfficeScholarshipStatus2";
import OfficeScholarshipStatus1 from "./screens/OfficeScholarshipStatus1";
import OfficeScholarshipAvailable from "./screens/OfficeScholarshipAvailable";
import OfficeScholarshipMain from "./screens/OfficeScholarshipMain";
import AccountMenu from "./screens/AccountMenu";
import OfficeMenu from "./screens/OfficeMenu";
import CanteenBill from "./screens/CanteenBill";
import LauncherOpen from "./screens/LauncherOpen";
import Launcher2 from "./screens/Launcher2";
import Launcher1 from "./screens/Launcher1";
import OfficeAppointmentPlacement from "./screens/OfficeAppointmentPlacement";
import OfficeAppointmentHOD from "./screens/OfficeAppointmentHOD";
import OfficeAppointmentDean from "./screens/OfficeAppointmentDean";
import OfficeAppointment from "./screens/OfficeAppointment";
import AcademicPerformance from "./screens/AcademicPerformance";
import QR from "./screens/QR";
import Grievence from "./screens/Grievence";
import Achivements from "./screens/Achivements";
import Library from "./screens/Library";
import AcademicAttendance from "./screens/AcademicAttendance";
import Canteen from "./screens/Canteen";
import AcademicTimetable from "./screens/AcademicTimetable";
import Home from "./screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    "Red Hat Display": require("./assets/fonts/Red_Hat_Display.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeScholarshipApplied"
              component={OfficeScholarshipApplied}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeOD"
              component={OfficeOD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeMedicalLeave"
              component={OfficeMedicalLeave}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeODAndMedical"
              component={OfficeODAndMedical}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeBonafideApproved"
              component={OfficeBonafideApproved}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeBonafideStatus"
              component={OfficeBonafideStatus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeBonafideApply"
              component={OfficeBonafideApply}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeBonafide"
              component={OfficeBonafide}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeFeePaymentPage"
              component={OfficeFeePaymentPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeFeepaymentAllTransactions"
              component={OfficeFeepaymentAllTransact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeFeePayment"
              component={OfficeFeePayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Token"
              component={Token}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Canteenpayment"
              component={Canteenpayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountUserProfile"
              component={AccountUserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Done"
              component={Done}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeScholarshipStatus3"
              component={OfficeScholarshipStatus3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeScholarshipStatus2"
              component={OfficeScholarshipStatus2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeScholarshipStatus1"
              component={OfficeScholarshipStatus1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeScholarshipAvailable"
              component={OfficeScholarshipAvailable}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeScholarshipMain"
              component={OfficeScholarshipMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountMenu"
              component={AccountMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeMenu"
              component={OfficeMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CanteenBill"
              component={CanteenBill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LauncherOpen"
              component={LauncherOpen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Launcher2"
              component={Launcher2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Launcher1"
              component={Launcher1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeAppointmentPlacement"
              component={OfficeAppointmentPlacement}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeAppointmentHOD"
              component={OfficeAppointmentHOD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeAppointmentDean"
              component={OfficeAppointmentDean}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OfficeAppointment"
              component={OfficeAppointment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AcademicPerformance"
              component={AcademicPerformance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QR"
              component={QR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Grievence"
              component={Grievence}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Achivements"
              component={Achivements}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Library"
              component={Library}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AcademicAttendance"
              component={AcademicAttendance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Canteen"
              component={Canteen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AcademicTimetable"
              component={AcademicTimetable}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
