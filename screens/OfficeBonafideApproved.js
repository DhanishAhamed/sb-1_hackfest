import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OfficeBonafideApproved = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeBonafideApproved}>
      <Image
        style={styles.officeBonafideApprovedChild}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={styles.office}>OFFICE</Text>
      <Pressable
        style={[styles.logo, styles.logoPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </Pressable>
      <Image
        style={styles.statusBarIcon}
        resizeMode="cover"
        source={require("../assets/status-bar.png")}
      />
      <Text style={styles.applied}>Applied</Text>
      <Text style={[styles.analysing, styles.approvedTypo]}>Analysing</Text>
      <Text style={[styles.approved, styles.approvedTypo]}>Approved</Text>
      <View
        style={[
          styles.officeBonafideApprovedItem,
          styles.officeShadowBox,
          styles.groupChildShadowBox,
          styles.logoPosition,
        ]}
      />
      <Text style={[styles.status, styles.statusTypo]}>Status</Text>
      <Image
        style={styles.analytics12Icon}
        resizeMode="cover"
        source={require("../assets/analytics1-2.png")}
      />
      <View
        style={[
          styles.officeBonafideApprovedInner,
          styles.icon1Position,
          styles.officeShadowBox,
        ]}
      />
      <Image
        style={[styles.icon1, styles.icon1Position]}
        resizeMode="cover"
        source={require("../assets/18199-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.officeShadowBox,
            styles.groupChildShadowBox,
          ]}
        />
        <Text style={[styles.download, styles.statusTypo]}>Download</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    left: 30,
    position: "absolute",
  },
  approvedTypo: {
    left: 115,
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
  groupChildShadowBox: {
    backgroundColor: Color.midnightblue_100,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  statusTypo: {
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  icon1Position: {
    width: 280,
    top: 436,
    left: 50,
    position: "absolute",
  },
  groupChildLayout: {
    height: 25,
    width: 280,
    position: "absolute",
  },
  officeBonafideApprovedChild: {
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
  },
  statusBarIcon: {
    top: 242,
    left: 69,
    width: 17,
    height: 144,
    position: "absolute",
  },
  applied: {
    top: 238,
    height: 15,
    color: Color.gray_100,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    width: 122,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    left: 119,
    position: "absolute",
  },
  analysing: {
    top: 305,
  },
  approved: {
    top: 372,
  },
  officeBonafideApprovedItem: {
    top: 150,
    width: 319,
    height: 50,
    borderRadius: Border.br_sm,
  },
  status: {
    top: 167,
    left: 118,
    width: 47,
    height: 22,
  },
  analytics12Icon: {
    top: 157,
    left: 58,
    width: 35,
    height: 35,
    position: "absolute",
  },
  officeBonafideApprovedInner: {
    backgroundColor: Color.white,
    height: 124,
    borderRadius: Border.br_sm,
  },
  icon1: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    height: 100,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_sm,
    borderBottomLeftRadius: Border.br_sm,
  },
  download: {
    top: 4,
    left: 104,
    width: 73,
  },
  rectangleParent: {
    top: 536,
    left: 50,
    height: 25,
  },
  officeBonafideApproved: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeBonafideApproved;
