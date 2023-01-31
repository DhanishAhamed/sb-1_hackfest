import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OfficeAppointmentDean = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeAppointmentDean}>
      <View style={styles.officeAppointmentDeanChild} />
      <Image
        style={styles.officeAppointmentDeanItem}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={[styles.office, styles.deanTypo, styles.officeTypo]}>
        OFFICE
      </Text>
      <View style={styles.officeAppointmentDeanInner} />
      <Text style={[styles.dean, styles.deanTypo, styles.deanTypo1]}>DEAN</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Text style={[styles.subject, styles.deanTypo, styles.deanTypo1]}>
        SUBJECT
      </Text>
      <View
        style={[
          styles.officeAppointmentDeanChild1,
          styles.rectanglePressableLayout,
          styles.lineViewPosition,
          styles.rectangleViewBorder,
        ]}
      />
      <Image
        style={styles.calendar1Icon}
        resizeMode="cover"
        source={require("../assets/calendar-1.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("Done")}
      />
      <Text style={[styles.submit, styles.deanTypo, styles.officeTypo]}>
        SUBMIT
      </Text>
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
  deanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  deanTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  rectangleViewBorder: {
    borderColor: "#93c0fa",
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  rectanglePressableLayout: {
    height: 47,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  lineViewPosition: {
    top: 477,
    borderStyle: "solid",
  },
  officeAppointmentDeanChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.gray_200,
    width: 358,
    position: "absolute",
    height: 800,
  },
  officeAppointmentDeanItem: {
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
  },
  officeAppointmentDeanInner: {
    top: 150,
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
    left: 30,
    position: "absolute",
  },
  dean: {
    top: 223,
    left: 76,
    fontSize: FontSize.size_5xl,
    color: Color.midnightblue_100,
    width: 146,
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
  officeAppointmentDeanChild1: {
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
  rectanglePressable: {
    top: 558,
    left: 66,
    backgroundColor: Color.midnightblue_100,
    width: 105,
  },
  submit: {
    top: 572,
    left: 87,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.4,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  logo: {
    top: 30,
    width: 56,
    height: 57,
    left: 30,
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
  officeAppointmentDean: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OfficeAppointmentDean;
