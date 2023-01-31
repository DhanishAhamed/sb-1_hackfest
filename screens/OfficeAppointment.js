import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OfficeAppointment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeAppointment}>
      <View style={styles.officeAppointmentChild} />
      <Image
        style={styles.officeAppointmentItem}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Pressable
        style={styles.office}
        onPress={() => navigation.navigate("OfficeMenu")}
      >
        <Text style={[styles.office1, styles.office1Typo]}>OFFICE</Text>
      </Pressable>
      <View style={styles.officeAppointmentInner} />
      <Image
        style={styles.appointment4481Icon}
        resizeMode="cover"
        source={require("../assets/appointment448-11.png")}
      />
      <Text style={[styles.appointment, styles.office1Typo]}>Appointment</Text>
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("OfficeAppointmentDean")}
      />
      <Text style={[styles.dean, styles.hodTypo, styles.hodPosition]}>
        DEAN
      </Text>
      <Pressable
        style={[styles.officeAppointmentChild1, styles.officeChildShadowBox]}
        onPress={() => navigation.navigate("OfficeAppointmentHOD")}
      />
      <Text style={[styles.hod, styles.hodTypo, styles.hodPosition]}>
        H.O.D
      </Text>
      <Pressable
        style={[styles.officeAppointmentChild2, styles.officeChildShadowBox]}
        onPress={() => navigation.navigate("OfficeAppointmentPlacement")}
      />
      <Text style={[styles.placementCell, styles.hodTypo]}>PLACEMENT CELL</Text>
      <Pressable
        style={styles.logo}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  office1Typo: {
    width: 122,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  hodTypo: {
    letterSpacing: 2,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  hodPosition: {
    left: 174,
    fontSize: FontSize.size_4xl,
  },
  officeChildShadowBox: {
    left: 87,
    height: 50,
    width: 250,
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_md,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  officeAppointmentChild: {
    top: 0,
    left: 2,
    backgroundColor: Color.gray_200,
    width: 358,
    position: "absolute",
    height: 800,
  },
  officeAppointmentItem: {
    top: 110,
    left: 5,
    width: 355,
    height: 704,
    position: "absolute",
  },
  office1: {
    fontSize: FontSize.size_6xl,
    height: 51,
    color: Color.white,
    width: 122,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  office: {
    left: 119,
    top: 29,
    position: "absolute",
  },
  officeAppointmentInner: {
    top: 143,
    left: 33,
    borderTopLeftRadius: Border.br_2xs,
    backgroundColor: Color.lightskyblue_100,
    borderStyle: "solid",
    borderColor: "#9cdbff",
    borderWidth: 1,
    width: 327,
    height: 652,
    opacity: 0.6,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  appointment4481Icon: {
    top: 160,
    left: 58,
    width: 40,
    height: 40,
    opacity: 0.7,
    position: "absolute",
  },
  appointment: {
    top: 171,
    left: 112,
    fontSize: FontSize.size_2xl,
    color: Color.midnightblue_100,
    height: 26,
    width: 122,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleView: {
    top: 217,
    left: 62,
    borderTopLeftRadius: Border.br_md,
    backgroundColor: Color.aliceblue,
    width: 298,
    height: 583,
    position: "absolute",
  },
  rectanglePressable: {
    top: 251,
    left: 86,
    height: 50,
    width: 250,
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_md,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  dean: {
    top: 265,
    width: 105,
    height: 36,
  },
  officeAppointmentChild1: {
    top: 318,
  },
  hod: {
    top: 333,
    width: 104,
    height: 35,
  },
  officeAppointmentChild2: {
    top: 385,
  },
  placementCell: {
    top: 399,
    left: 106,
    width: 225,
    height: 21,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  logo: {
    left: 30,
    top: 30,
    width: 56,
    height: 57,
    position: "absolute",
  },
  officeAppointment: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default OfficeAppointment;
