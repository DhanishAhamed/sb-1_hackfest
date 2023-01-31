import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OfficeBonafideApply = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeBonafideApply}>
      <Image
        style={styles.officeBonafideApplyChild}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={[styles.office, styles.officeTypo]}>OFFICE</Text>
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
      <View style={styles.officeMenu}>
        <View style={styles.scholarshipPosition}>
          <View
            style={[
              styles.scholarshipChild,
              styles.scholarshipChildShadowBox,
              styles.scholarshipPosition,
            ]}
          />
        </View>
      </View>
      <View
        style={[
          styles.officeBonafideApplyItem,
          styles.rectanglePressableShadowBox,
        ]}
      />
      <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
      <Image
        style={[styles.exam21Icon, styles.purposePosition]}
        resizeMode="cover"
        source={require("../assets/exam2-1.png")}
      />
      <Text style={[styles.purpose, styles.purposePosition, styles.applyTypo]}>
        Purpose
      </Text>
      <View
        style={[
          styles.officeBonafideApplyInner,
          styles.purposePosition,
          styles.scholarshipChildShadowBox,
        ]}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("Done")}
      />
      <Text style={[styles.submit, styles.officeTypo]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  officeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    color: Color.white,
    position: "absolute",
  },
  scholarshipChildShadowBox: {
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  scholarshipPosition: {
    left: 0,
    top: 0,
    height: 286,
    width: 319,
    position: "absolute",
  },
  rectanglePressableShadowBox: {
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_sm,
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
  applyTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  purposePosition: {
    left: 58,
    position: "absolute",
  },
  officeBonafideApplyChild: {
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
  scholarshipChild: {
    borderRadius: Border.br_2xs,
    opacity: 0.6,
  },
  officeMenu: {
    height: 286,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 319,
    top: 150,
    left: 30,
    position: "absolute",
  },
  officeBonafideApplyItem: {
    height: 50,
    width: 319,
    top: 150,
    borderRadius: Border.br_sm,
    left: 30,
  },
  apply: {
    top: 167,
    left: 118,
    letterSpacing: 1.3,
    width: 182,
    height: 15,
    color: Color.white,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  exam21Icon: {
    top: 157,
    width: 35,
    height: 35,
  },
  purpose: {
    top: 239,
    color: Color.black,
  },
  officeBonafideApplyInner: {
    top: 265,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#282f94",
    borderWidth: 1,
    width: 272,
    height: 81,
  },
  rectanglePressable: {
    top: 369,
    left: 134,
    width: 116,
    height: 40,
  },
  submit: {
    top: 379,
    left: 167,
    fontSize: FontSize.size_2xl,
  },
  officeBonafideApply: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeBonafideApply;
