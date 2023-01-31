import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OfficeOD = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeOd}>
      <Image
        style={styles.officeOdChild}
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
          styles.officeOdItem,
          styles.officeLayout,
          styles.officeShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeOdInner,
          styles.officeOdInnerShadowBox,
          styles.officeLayout,
        ]}
      />
      <Image
        style={styles.entrepreneur1Icon}
        resizeMode="cover"
        source={require("../assets/entrepreneur-1.png")}
      />
      <Text style={[styles.od, styles.odTypo]}>{`OD `}</Text>
      <Text style={[styles.purpose, styles.dateTypo]}>Purpose</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.registrationForm, styles.dateTypo]}>
        Registration Form
      </Text>
      <View style={styles.rectangleView} />
      <View
        style={[
          styles.officeOdChild1,
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
          styles.officeOdChild2,
          styles.officeChildPosition,
          styles.officeChildLayout,
          styles.officeShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeOdChild3,
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
        style={[styles.rectanglePressable, styles.officeOdInnerShadowBox]}
        onPress={() => navigation.navigate("Done")}
      />
      <Text style={[styles.submit, styles.odTypo]}>Submit</Text>
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
  officeOdInnerShadowBox: {
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
  odTypo: {
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
    width: 1,
    borderRightWidth: 1,
    height: 48,
  },
  officeChildPosition: {
    top: 545,
    borderColor: "#282f94",
    borderStyle: "solid",
    position: "absolute",
  },
  officeOdChild: {
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
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
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
  officeOdItem: {
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
    top: 163,
    position: "absolute",
  },
  officeOdInner: {
    top: 141,
    height: 70,
  },
  entrepreneur1Icon: {
    top: 147,
    left: 47,
    width: 45,
    height: 48,
    position: "absolute",
  },
  od: {
    left: 122,
    width: 27,
    height: 26,
    top: 163,
    fontSize: FontSize.size_2xl,
  },
  purpose: {
    top: 265,
  },
  date: {
    top: 431,
  },
  registrationForm: {
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
  officeOdChild1: {
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
  officeOdChild2: {
    left: 63,
    width: 136,
  },
  officeOdChild3: {
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
  officeOd: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeOD;
