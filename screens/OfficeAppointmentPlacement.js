import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OfficeAppointmentPlacement = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeAppointmentPlacement}>
      <View style={styles.officeAppointmentPlacementChild} />
      <Image
        style={styles.officeAppointmentPlacementItem}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={[styles.office, styles.officeTypo, styles.officeTypo1]}>
        OFFICE
      </Text>
      <View style={styles.officeAppointmentPlacementInner} />
      <Text
        style={[styles.placementCell, styles.officeTypo, styles.subjectTypo]}
      >
        PLACEMENT CELL
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Text style={[styles.subject, styles.officeTypo, styles.subjectTypo]}>
        SUBJECT
      </Text>
      <View
        style={[
          styles.officeAppointmentPlacementChild1,
          styles.officeChildLayout,
          styles.lineViewPosition,
          styles.rectangleViewBorder,
        ]}
      />
      <Image
        style={styles.calendar1Icon}
        resizeMode="cover"
        source={require("../assets/calendar-1.png")}
      />
      <View
        style={[
          styles.officeAppointmentPlacementChild2,
          styles.officeChildLayout,
        ]}
      />
      <Pressable
        style={styles.submit}
        onPress={() => navigation.navigate("Done")}
      >
        <Text style={[styles.submit1, styles.officeTypo, styles.officeTypo1]}>
          SUBMIT
        </Text>
      </Pressable>
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
      <View style={[styles.lineView, styles.lineViewPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  officeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  officeTypo1: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  subjectTypo: {
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewBorder: {
    borderColor: "#93c0fa",
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  officeChildLayout: {
    height: 47,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  lineViewPosition: {
    top: 477,
    borderStyle: "solid",
  },
  officeAppointmentPlacementChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.gray_200,
    width: 358,
    position: "absolute",
    height: 800,
  },
  officeAppointmentPlacementItem: {
    top: 110,
    left: 5,
    width: 355,
    height: 704,
    position: "absolute",
  },
  office: {
    top: 29,
    left: 119,
    fontSize: FontSize.size_6xl,
    width: 122,
    height: 51,
    position: "absolute",
  },
  officeAppointmentPlacementInner: {
    top: 150,
    left: 30,
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
    borderColor: "#9cdbff",
    width: 347,
    height: 650,
    opacity: 0.6,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  placementCell: {
    top: 223,
    left: 76,
    fontSize: FontSize.size_5xl,
    color: Color.midnightblue_100,
    width: 255,
    height: 36,
  },
  rectangleView: {
    top: 266,
    left: 65,
    width: 283,
    height: 180,
    borderRadius: Border.br_sm,
    borderColor: "#93c0fa",
    borderStyle: "solid",
    position: "absolute",
  },
  subject: {
    top: 282,
    left: 84,
    fontSize: FontSize.size_8xl,
    letterSpacing: 4,
    color: Color.gray_300,
    width: 231,
    height: 68,
  },
  officeAppointmentPlacementChild1: {
    left: 62,
    width: 187,
  },
  calendar1Icon: {
    top: 485,
    left: 211,
    borderRadius: Border.br_3xs,
    width: 32,
    height: 32,
    position: "absolute",
  },
  officeAppointmentPlacementChild2: {
    top: 558,
    left: 66,
    backgroundColor: Color.midnightblue_100,
    width: 105,
  },
  submit1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 1.4,
  },
  submit: {
    left: 87,
    top: 572,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  logo: {
    left: 42,
    top: 27,
    width: 56,
    height: 57,
    position: "absolute",
  },
  lineView: {
    left: 203,
    borderColor: "#c1d5f1",
    borderRightWidth: 1,
    width: 1,
    height: 48,
    position: "absolute",
  },
  officeAppointmentPlacement: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OfficeAppointmentPlacement;
