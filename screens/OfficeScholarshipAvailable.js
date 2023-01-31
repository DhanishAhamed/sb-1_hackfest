import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OfficeScholarshipAvailable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeScholarshipAvailable}>
      <Image
        style={styles.officeScholarshipAvailableChild}
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
      <Text style={[styles.availableScholarships, styles.applyNowTypo]}>
        Available scholarships
      </Text>
      <View style={styles.officeScholarshipAvailableItem} />
      <Image
        style={styles.exam31Icon}
        resizeMode="cover"
        source={require("../assets/exam3-1.png")}
      />
      <View
        style={[
          styles.officeScholarshipAvailableInner,
          styles.officeChildShadowBox,
        ]}
      />
      <View style={[styles.rectangleView, styles.officeChildShadowBox]} />
      <View
        style={[
          styles.officeScholarshipAvailableChild1,
          styles.officeChildShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeScholarshipAvailableChild2,
          styles.officeChildShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeScholarshipAvailableChild3,
          styles.officeChildShadowBox,
        ]}
      />
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
      <Image
        style={styles.relianceFoundationScholarshi}
        resizeMode="cover"
        source={require("../assets/reliance-foundation-scholarship-1.png")}
      />
      <Image
        style={[styles.srm1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/srm-1.png")}
      />
      <Image
        style={styles.processToApplyUnderDr1Icon}
        resizeMode="cover"
        source={require("../assets/processtoapplyunderdr-1.png")}
      />
      <Text style={styles.tataScholarship}>Tata scholarship</Text>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.applyNow, styles.applyNowTypo]}>Apply Now</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.applyNow, styles.applyNowTypo]}>Apply Now</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.applyNow, styles.applyNowTypo]}>Apply Now</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.applyNow, styles.applyNowTypo]}>Apply Now</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.applyNow, styles.applyNowTypo]}>Apply Now</Text>
      </View>
      <Text
        style={[
          styles.nationalScholarship,
          styles.scholarshipTypo,
          styles.scholarshipPosition,
        ]}
      >
        National Scholarship
      </Text>
      <Text style={[styles.relianceScholarship, styles.scholarshipTypo]}>
        Reliance Scholarship
      </Text>
      <Text
        style={[
          styles.srmScholarship,
          styles.scholarshipTypo,
          styles.scholarshipPosition,
        ]}
      >
        SRM Scholarship
      </Text>
      <Text style={[styles.drreddysScholarship, styles.scholarshipTypo]}>
        Dr.Reddys Scholarship
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  applyNowTypo: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeChildShadowBox: {
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
  groupParentLayout: {
    height: 25,
    width: 99,
    position: "absolute",
  },
  scholarshipTypo: {
    width: 169,
    height: 15,
    color: Color.gray_100,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  scholarshipPosition: {
    left: 188,
    width: 169,
  },
  officeScholarshipAvailableChild: {
    top: 110,
    left: 5,
    width: 355,
    height: 704,
    position: "absolute",
  },
  office: {
    top: 29,
    fontSize: FontSize.size_6xl,
    height: 51,
    width: 122,
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
  availableScholarships: {
    top: 170,
    left: 120,
    fontSize: FontSize.size_2xl,
    letterSpacing: 1.5,
    color: Color.midnightblue_100,
    width: 202,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  officeScholarshipAvailableItem: {
    top: 217,
    left: 62,
    borderTopLeftRadius: Border.br_md,
    backgroundColor: Color.aliceblue,
    width: 298,
    height: 583,
    position: "absolute",
  },
  exam31Icon: {
    top: 160,
    left: 58,
    width: 40,
    height: 40,
    position: "absolute",
  },
  officeScholarshipAvailableInner: {
    top: 240,
  },
  rectangleView: {
    top: 352,
  },
  officeScholarshipAvailableChild1: {
    top: 464,
  },
  officeScholarshipAvailableChild2: {
    top: 576,
  },
  officeScholarshipAvailableChild3: {
    top: 688,
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
  relianceFoundationScholarshi: {
    top: 486,
    left: 96,
    width: 88,
    height: 45,
    position: "absolute",
  },
  srm1Icon: {
    width: 60,
    top: 588,
    left: 119,
    height: 60,
  },
  processToApplyUnderDr1Icon: {
    top: 712,
    left: 108,
    width: 71,
    height: 35,
    position: "absolute",
  },
  tataScholarship: {
    top: 257,
    height: 15,
    color: Color.gray_100,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    left: 188,
    width: 122,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.midnightblue_100,
  },
  applyNow: {
    top: 4,
    left: 11,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.3,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 281,
    left: 191,
  },
  rectangleGroup: {
    top: 393,
    left: 191,
  },
  rectangleContainer: {
    top: 506,
    left: 191,
  },
  groupView: {
    top: 618,
    left: 191,
  },
  rectangleParent1: {
    top: 730,
    left: 191,
  },
  nationalScholarship: {
    top: 369,
  },
  relianceScholarship: {
    top: 475,
    left: 191,
  },
  srmScholarship: {
    top: 588,
  },
  drreddysScholarship: {
    top: 704,
    left: 191,
  },
  officeScholarshipAvailable: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeScholarshipAvailable;
