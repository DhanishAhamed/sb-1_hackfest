import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OfficeBonafideStatus = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.officeBonafideStatus}
      onPress={() => navigation.navigate("OfficeBonafideApproved")}
    >
      <Image
        style={styles.officeBonafideStatusChild}
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
        source={require("../assets/status-bar1.png")}
      />
      <Text style={styles.applied}>Applied</Text>
      <Text style={[styles.analysing, styles.approvedTypo]}>Analysing</Text>
      <Text style={[styles.approved, styles.approvedTypo]}>Approved</Text>
      <View style={[styles.officeBonafideStatusItem, styles.logoPosition]} />
      <Text style={styles.status}>Status</Text>
      <Image
        style={styles.analytics11Icon}
        resizeMode="cover"
        source={require("../assets/analytics1-2.png")}
      />
    </Pressable>
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
  officeBonafideStatusChild: {
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
    left: 119,
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
  officeBonafideStatusItem: {
    top: 150,
    borderRadius: Border.br_sm,
    backgroundColor: Color.midnightblue_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 319,
    height: 50,
  },
  status: {
    top: 167,
    left: 118,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.3,
    width: 47,
    height: 22,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  analytics11Icon: {
    top: 157,
    left: 58,
    width: 35,
    height: 35,
    position: "absolute",
  },
  officeBonafideStatus: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeBonafideStatus;
