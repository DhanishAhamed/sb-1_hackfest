import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OfficeMedicalLeave = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeMedicalLeave}>
      <Image
        style={styles.officeMedicalLeaveChild}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={styles.office}>OFFICE</Text>
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
      <View
        style={[
          styles.officeMedicalLeaveItem,
          styles.officeLayout,
          styles.officeShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeMedicalLeaveInner,
          styles.rectanglePressableShadowBox,
          styles.officeLayout,
        ]}
      />
      <Image
        style={styles.stethoscope1Icon}
        resizeMode="cover"
        source={require("../assets/stethoscope-1.png")}
      />
      <Text style={[styles.medicalLeave, styles.submitTypo]}>
        Medical Leave
      </Text>
      <Text style={[styles.reason, styles.dateTypo]}>Reason</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.supportingDoucument, styles.dateTypo]}>
        Supporting Doucument
      </Text>
      <View style={styles.rectangleView} />
      <View
        style={[
          styles.officeMedicalLeaveChild1,
          styles.officeChildLayout,
          styles.lineViewPosition,
        ]}
      />
      <Image
        style={styles.calendar1Icon}
        resizeMode="cover"
        source={require("../assets/calendar-1.png")}
      />
      <View
        style={[
          styles.lineView,
          styles.lineViewLayout,
          styles.lineViewPosition,
        ]}
      />
      <View
        style={[
          styles.officeMedicalLeaveChild2,
          styles.officeChildPosition,
          styles.officeChildLayout,
          styles.officeShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeMedicalLeaveChild3,
          styles.officeChildPosition,
          styles.lineViewLayout,
        ]}
      />
      <Image
        style={styles.paperClip1Icon}
        resizeMode="cover"
        source={require("../assets/paperclip-1.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("Done")}
      />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  officeLayout: {
    width: 315,
    left: 30,
  },
  officeShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectanglePressableShadowBox: {
    backgroundColor: Color.midnightblue_100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  submitTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  dateTypo: {
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 58,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeChildLayout: {
    height: 47,
    borderWidth: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
  },
  lineViewPosition: {
    top: 455,
    borderColor: "#282f94",
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewLayout: {
    height: 48,
    width: 1,
    borderRightWidth: 1,
  },
  officeChildPosition: {
    top: 545,
    borderColor: "#282f94",
    borderStyle: "solid",
    position: "absolute",
  },
  officeMedicalLeaveChild: {
    top: 110,
    left: 5,
    width: 355,
    height: 704,
    position: "absolute",
  },
  office: {
    top: 29,
    fontSize: FontSize.size_6xl,
    width: 122,
    height: 51,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    left: 119,
    position: "absolute",
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
  officeMedicalLeaveItem: {
    top: 163,
    height: 601,
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    width: 315,
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
  officeMedicalLeaveInner: {
    top: 141,
    height: 70,
  },
  stethoscope1Icon: {
    top: 147,
    left: 47,
    width: 45,
    height: 45,
    position: "absolute",
  },
  medicalLeave: {
    top: 161,
    width: 116,
    height: 26,
    left: 119,
    fontSize: FontSize.size_2xl,
  },
  reason: {
    top: 265,
  },
  date: {
    top: 431,
  },
  supportingDoucument: {
    top: 523,
  },
  rectangleView: {
    top: 289,
    left: 57,
    width: 272,
    height: 121,
    borderWidth: 1,
    borderColor: "#282f94",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    position: "absolute",
  },
  officeMedicalLeaveChild1: {
    width: 187,
    left: 58,
    height: 47,
    top: 455,
  },
  calendar1Icon: {
    top: 463,
    left: 207,
    width: 32,
    height: 32,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  lineView: {
    left: 199,
  },
  officeMedicalLeaveChild2: {
    left: 63,
    width: 136,
  },
  officeMedicalLeaveChild3: {
    left: 152,
  },
  paperClip1Icon: {
    top: 556,
    left: 163,
    width: 25,
    height: 25,
    position: "absolute",
  },
  rectanglePressable: {
    top: 689,
    left: 62,
    width: 237,
    height: 40,
  },
  submit: {
    top: 699,
    left: 154,
  },
  officeMedicalLeave: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeMedicalLeave;
