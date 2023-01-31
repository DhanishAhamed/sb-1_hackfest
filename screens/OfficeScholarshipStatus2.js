import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Margin } from "../GlobalStyles";

const OfficeScholarshipStatus2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeScholarshipStatus2}>
      <Image
        style={styles.officeScholarshipStatus2Child}
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
      <Text style={[styles.status, styles.statusPosition, styles.viewTypo]}>
        Status
      </Text>
      <View style={styles.officeScholarshipStatus2Item} />
      <View
        style={[
          styles.officeScholarshipStatus2Inner,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Image
        style={styles.ladyMeherbaiD1Icon}
        resizeMode="cover"
        source={require("../assets/ladymeherbaid-1.png")}
      />
      <Text style={styles.tataScholarship}>Tata scholarship</Text>
      <Image
        style={[styles.statusBarIcon, styles.statusPosition]}
        resizeMode="cover"
        source={require("../assets/status-bar3.png")}
      />
      <Text style={[styles.applied, styles.appliedTypo]}>Applied</Text>
      <Text style={[styles.analysing, styles.appliedTypo]}>Analysing</Text>
      <Text style={[styles.approved, styles.appliedTypo]}>Approved</Text>
      <Text style={styles.nameZainContainer}>
        <Text style={styles.name}>Name : Zain Ahmed</Text>
        <Text style={styles.name}>Age : 20</Text>
        <Text style={styles.name}>Course : Btech CSE</Text>
        <Text style={styles.name}>Category : Merit</Text>
        <Text style={styles.bankAccount}>Bank Account : XXXXXXX729</Text>
      </Text>
      <View
        style={[
          styles.rectangleView,
          styles.icon1Position,
          styles.rectangleViewShadowBox,
        ]}
      />
      <Image
        style={[styles.icon1, styles.icon1Position]}
        resizeMode="cover"
        source={require("../assets/18199-11.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
      </View>
      <Image
        style={styles.analytics22Icon}
        resizeMode="cover"
        source={require("../assets/analytics2-3.png")}
      />
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
  statusPosition: {
    left: 120,
    position: "absolute",
  },
  viewTypo: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  rectangleViewShadowBox: {
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
  appliedTypo: {
    left: 150,
    height: 15,
    color: Color.gray_100,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    width: 122,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  icon1Position: {
    width: 214,
    top: 441,
    left: 114,
    position: "absolute",
  },
  groupChildLayout: {
    height: 25,
    width: 214,
    position: "absolute",
  },
  officeScholarshipStatus2Child: {
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
    fontSize: FontSize.size_2xl,
    letterSpacing: 1.5,
    color: Color.midnightblue_100,
    width: 202,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    left: 120,
  },
  officeScholarshipStatus2Item: {
    top: 217,
    left: 62,
    borderTopLeftRadius: Border.br_md,
    backgroundColor: Color.aliceblue,
    width: 298,
    height: 583,
    position: "absolute",
  },
  officeScholarshipStatus2Inner: {
    top: 240,
    left: 88,
    borderRadius: Border.br_3xs,
    width: 260,
    height: 574,
    position: "absolute",
  },
  ladyMeherbaiD1Icon: {
    top: 251,
    left: 104,
    width: 80,
    height: 60,
    position: "absolute",
  },
  tataScholarship: {
    top: 257,
    left: 188,
    height: 15,
    color: Color.gray_100,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    width: 122,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  statusBarIcon: {
    top: 587,
    width: 17,
    height: 144,
  },
  applied: {
    top: 585,
  },
  analysing: {
    top: 650,
  },
  approved: {
    top: 715,
  },
  name: {
    marginBlockStart: 0,
    marginBlockEnd: 6,
  },
  bankAccount: {
    margin: Margin.m_md,
  },
  nameZainContainer: {
    top: 318,
    left: 122,
    fontWeight: "600",
    color: Color.gray_400,
    whiteSpace: "pre-wrap",
    width: 208,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_sm,
    height: 124,
  },
  icon1: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    height: 100,
  },
  groupChild: {
    borderBottomRightRadius: Border.br_sm,
    borderBottomLeftRadius: Border.br_sm,
    backgroundColor: Color.midnightblue_100,
  },
  view: {
    top: 4,
    left: 87,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.3,
    width: 41,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    top: 541,
    left: 114,
    height: 25,
  },
  analytics22Icon: {
    top: 162,
    left: 58,
    width: 40,
    height: 40,
    position: "absolute",
  },
  officeScholarshipStatus2: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeScholarshipStatus2;
