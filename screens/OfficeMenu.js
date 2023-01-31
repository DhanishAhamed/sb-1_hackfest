import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const OfficeMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeMenu}>
      <Image
        style={styles.officeMenuChild}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={[styles.office, styles.officeTypo]}>OFFICE</Text>
      <Pressable
        style={[styles.logo, styles.logoLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </Pressable>
      <View style={styles.officeMenu1}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarChild} />
          <Text style={styles.search}>SEARCH</Text>
          <Image
            style={styles.searchIcon2614x4601}
            resizeMode="cover"
            source={require("../assets/searchicon2614x460-1.png")}
          />
        </View>
        <View style={[styles.appointment, styles.appointmentLayout]}>
          <Pressable
            style={[styles.appointmentChild, styles.appointmentLayout]}
            onPress={() => navigation.navigate("OfficeAppointment")}
          />
          <Image
            style={[styles.appointment4481Icon, styles.icons8Position]}
            resizeMode="cover"
            source={require("../assets/appointment448-1.png")}
          />
          <Text
            style={[
              styles.appointment1,
              styles.feePayment1Position,
              styles.officeTypo,
            ]}
          >
            Appointment
          </Text>
        </View>
        <Pressable
          style={[styles.scholarship, styles.appointmentLayout]}
          onPress={() => navigation.navigate("OfficeScholarshipMain")}
        >
          <View style={[styles.appointmentChild, styles.appointmentLayout]} />
          <Image
            style={styles.icons8Scholarship641}
            resizeMode="cover"
            source={require("../assets/icons8scholarship64-11.png")}
          />
          <Text
            style={[
              styles.scholarship1,
              styles.feePayment1Position,
              styles.paymentTypo,
            ]}
          >
            Scholarship
          </Text>
        </Pressable>
        <Pressable
          style={[styles.odAndMedicalLeave, styles.appointmentLayout]}
          onPress={() => navigation.navigate("OfficeODAndMedical")}
        >
          <View style={[styles.appointmentChild, styles.appointmentLayout]} />
          <Image
            style={[styles.icons8Certificate641, styles.icons8Position]}
            resizeMode="cover"
            source={require("../assets/icons8certificate64-1.png")}
          />
        </Pressable>
        <Text style={[styles.odAndMedical, styles.odAndMedicalTypo]}>
          OD and Medical Leave
        </Text>
        <Pressable
          style={[styles.bonafideCertificate, styles.appointmentLayout]}
          onPress={() => navigation.navigate("OfficeBonafide")}
        >
          <View style={[styles.appointmentChild, styles.appointmentLayout]} />
          <Image
            style={[styles.icons8Certificate6411, styles.icons8Position]}
            resizeMode="cover"
            source={require("../assets/icons8certificate64-1-1.png")}
          />
          <Text style={[styles.bonafideCertficate, styles.odAndMedicalTypo]}>
            Bonafide Certficate
          </Text>
        </Pressable>
        <Pressable
          style={[styles.feePayment, styles.appointmentLayout]}
          onPress={() => navigation.navigate("OfficeFeePayment")}
        >
          <View style={[styles.appointmentChild, styles.appointmentLayout]} />
          <Image
            style={[styles.fees1Icon, styles.logoLayout]}
            resizeMode="cover"
            source={require("../assets/fees-1.png")}
          />
          <Text style={[styles.feePayment1, styles.feePayment1Position]}>
            <Text style={styles.fee}>Fee</Text>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.paymentTypo}>Payment</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  officeTypo: {
    width: 122,
    top: 29,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  logoLayout: {
    height: 57,
    position: "absolute",
  },
  appointmentLayout: {
    height: 73,
    left: 0,
    width: 307,
    position: "absolute",
  },
  icons8Position: {
    left: 20,
    position: "absolute",
  },
  feePayment1Position: {
    color: Color.midnightblue_100,
    left: 104,
    height: 26,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    position: "absolute",
  },
  paymentTypo: {
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  odAndMedicalTypo: {
    width: 163,
    color: Color.midnightblue_100,
    left: 104,
    height: 26,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeMenuChild: {
    top: 110,
    left: 5,
    width: 355,
    height: 704,
    position: "absolute",
  },
  office: {
    left: 119,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    height: 51,
    textAlign: "left",
    width: 122,
    top: 29,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  logo: {
    left: 30,
    top: 30,
    width: 56,
  },
  searchBarChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.lightblue,
    left: 0,
    height: 46,
    width: 253,
    top: 0,
    position: "absolute",
  },
  search: {
    top: 11,
    left: 93,
    color: Color.gray_200,
    width: 67,
    height: 25,
    opacity: 0.5,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    position: "absolute",
  },
  searchIcon2614x4601: {
    top: 10,
    width: 50,
    height: 26,
    opacity: 0.5,
    left: 0,
    position: "absolute",
  },
  searchBar: {
    left: 33,
    height: 46,
    width: 253,
    top: 0,
    position: "absolute",
  },
  appointmentChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.lightskyblue_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    opacity: 0.6,
    top: 0,
    height: 73,
  },
  appointment4481Icon: {
    top: 13,
    width: 48,
    height: 48,
    opacity: 0.7,
  },
  appointment1: {
    width: 122,
    top: 29,
    left: 104,
  },
  appointment: {
    top: 94,
  },
  icons8Scholarship641: {
    top: 20,
    left: 27,
    width: 34,
    height: 34,
    position: "absolute",
  },
  scholarship1: {
    top: 27,
    width: 108,
  },
  scholarship: {
    top: 187,
  },
  icons8Certificate641: {
    top: 17,
    width: 40,
    height: 40,
  },
  odAndMedicalLeave: {
    top: 280,
  },
  odAndMedical: {
    top: 304,
  },
  icons8Certificate6411: {
    top: 16,
    width: 41,
    height: 41,
  },
  bonafideCertficate: {
    top: 24,
  },
  bonafideCertificate: {
    top: 373,
  },
  fees1Icon: {
    top: 8,
    left: 15,
    width: 57,
  },
  fee: {
    fontFamily: FontFamily.inter,
    fontWeight: "700",
  },
  text: {
    fontFamily: FontFamily.inter,
  },
  feePayment1: {
    top: 28,
    width: 98,
  },
  feePayment: {
    top: 466,
  },
  officeMenu1: {
    top: 143,
    left: 29,
    height: 539,
    width: 307,
    position: "absolute",
  },
  officeMenu: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeMenu;
