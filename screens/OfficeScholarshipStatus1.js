import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OfficeScholarshipStatus1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeScholarshipStatus1}>
      <Image
        style={styles.officeScholarshipStatus1Child}
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
      <View style={[styles.officeMenu, styles.officeMenuLayout]}>
        <View style={styles.scholarship}>
          <View
            style={[
              styles.scholarshipChild,
              styles.childShadowBox,
              styles.officeMenuLayout,
            ]}
          />
        </View>
      </View>
      <Text style={[styles.status, styles.officeTypo]}>Status</Text>
      <View style={styles.officeScholarshipStatus1Item} />
      <View
        style={[
          styles.officeScholarshipStatus1Inner,
          styles.rectangleViewShadowBox,
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.ladyMeherbaiD1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ladymeherbaid-1.png")}
      />
      <Image
        style={[styles.nspschemesellogo1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/nspschemesellogo-1.png")}
      />
      <Text style={[styles.tataScholarship, styles.scholarshipTypo]}>
        Tata scholarship
      </Text>
      <Pressable
        style={[
          styles.rectangleParent,
          styles.groupLayout,
          styles.rectanglePosition,
        ]}
        onPress={() => navigation.navigate("OfficeScholarshipStatus2")}
      >
        <View
          style={[styles.groupChild, styles.groupLayout, styles.childShadowBox]}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
      </Pressable>
      <Pressable
        style={[
          styles.rectangleGroup,
          styles.groupLayout,
          styles.rectanglePosition,
        ]}
        onPress={() => navigation.navigate("OfficeScholarshipStatus3")}
      >
        <View
          style={[styles.groupChild, styles.groupLayout, styles.childShadowBox]}
        />
        <Text style={[styles.view1, styles.viewTypo]}>View</Text>
      </Pressable>
      <Text style={[styles.nationalScholarship, styles.scholarshipTypo]}>
        National Scholarship
      </Text>
      <Image
        style={styles.analytics21Icon}
        resizeMode="cover"
        source={require("../assets/analytics2-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  officeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeMenuLayout: {
    height: 650,
    width: 367,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  rectangleViewShadowBox: {
    height: 83,
    width: 260,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 88,
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
  iconLayout: {
    height: 60,
    position: "absolute",
  },
  scholarshipTypo: {
    height: 15,
    color: Color.gray_100,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    left: 188,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 25,
    width: 99,
    position: "absolute",
  },
  rectanglePosition: {
    left: 191,
    width: 99,
  },
  viewTypo: {
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    left: 30,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeScholarshipStatus1Child: {
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
    height: 51,
    width: 122,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
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
    backgroundColor: Color.lightskyblue_100,
    opacity: 0.6,
  },
  scholarship: {
    left: 0,
    top: 0,
    height: 650,
    width: 367,
    position: "absolute",
  },
  officeMenu: {
    top: 150,
    left: 30,
  },
  status: {
    top: 170,
    left: 120,
    fontSize: FontSize.size_2xl,
    letterSpacing: 1.5,
    color: Color.midnightblue_100,
    width: 202,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  officeScholarshipStatus1Item: {
    top: 217,
    left: 62,
    borderTopLeftRadius: Border.br_md,
    backgroundColor: Color.aliceblue,
    width: 298,
    height: 583,
    position: "absolute",
  },
  officeScholarshipStatus1Inner: {
    top: 240,
  },
  rectangleView: {
    top: 352,
  },
  ladyMeherbaiD1Icon: {
    top: 251,
    left: 104,
    width: 80,
  },
  nspschemesellogo1Icon: {
    top: 363,
    left: 115,
    width: 59,
  },
  tataScholarship: {
    top: 257,
    width: 122,
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.midnightblue_100,
  },
  view: {
    top: 4,
  },
  rectangleParent: {
    top: 281,
  },
  view1: {
    top: 7,
  },
  rectangleGroup: {
    top: 393,
  },
  nationalScholarship: {
    top: 369,
    width: 169,
  },
  analytics21Icon: {
    top: 160,
    left: 58,
    width: 40,
    height: 40,
    position: "absolute",
  },
  officeScholarshipStatus1: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeScholarshipStatus1;
