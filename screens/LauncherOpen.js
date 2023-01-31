import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LauncherOpen = () => {
  return (
    <View style={styles.launcherOpen}>
      <Image
        style={styles.launcherOpenChild}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.user11Icon}
        resizeMode="cover"
        source={require("../assets/user1-1.png")}
      />
      <Text style={[styles.am, styles.amPosition, styles.amTypo]}>
        <Text style={[styles.text, styles.textTypo]}>{`11:45   `}</Text>
        <Text style={styles.am1}>AM</Text>
      </Text>
      <Text
        style={[styles.zain, styles.textTypo, styles.amPosition, styles.amTypo]}
      >
        <Text style={styles.zain1}>Zain!</Text>
      </Text>
      <Text style={[styles.monday, styles.textTypo, styles.amPosition]}>
        Monday
      </Text>
      <View style={[styles.launcherOpenItem, styles.launcherShadowBox]} />
      <View style={[styles.launcherOpenInner, styles.launcherShadowBox]} />
      <View style={[styles.rectangleView, styles.launcherShadowBox]} />
      <View
        style={[styles.launcherOpenChild1, styles.launcherChildShadowBox]}
      />
      <View
        style={[styles.launcherOpenChild2, styles.launcherChildShadowBox]}
      />
      <View
        style={[styles.launcherOpenChild3, styles.launcherChildShadowBox]}
      />
      <Image
        style={styles.google1Icon}
        resizeMode="cover"
        source={require("../assets/google-1.png")}
      />
      <Image
        style={[styles.keys11Icon, styles.iconPosition1, styles.iconPosition2]}
        resizeMode="cover"
        source={require("../assets/keys1-1.png")}
      />
      <Image
        style={[styles.phoneCall1Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/phonecall-1.png")}
      />
      <Image
        style={[styles.canteen1Icon, styles.iconPosition, styles.iconPosition2]}
        resizeMode="cover"
        source={require("../assets/canteen-1.png")}
      />
      <Image
        style={[styles.photoCameraInterfaceSymbolIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/photocamerainterfacesymbolforbutton-1.png")}
      />
      <Image
        style={[styles.document1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/document-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  amPosition: {
    textAlign: "left",
    color: Color.white,
    left: 54,
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    color: Color.white,
    left: 54,
  },
  textTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.redHatDisplay,
  },
  launcherShadowBox: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: "#77cbfb",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(119, 203, 251, 0.25)",
    top: 461,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  launcherChildShadowBox: {
    top: 598,
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: "#77cbfb",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(119, 203, 251, 0.25)",
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  iconPosition1: {
    top: 466,
    height: 70,
    width: 70,
    position: "absolute",
  },
  iconPosition2: {
    left: 145,
    borderRadius: Border.br_3xl,
  },
  iconPosition: {
    top: 603,
    height: 70,
    width: 70,
    position: "absolute",
  },
  launcherOpenChild: {
    top: 40,
    height: 70,
    width: 70,
    left: 145,
    position: "absolute",
  },
  user11Icon: {
    top: 65,
    left: 170,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.redHatDisplay,
  },
  am1: {
    fontFamily: FontFamily.redHatDisplay,
  },
  am: {
    top: 213,
    width: 161,
    height: 41,
  },
  zain1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  zain: {
    top: 154,
    fontFamily: FontFamily.redHatDisplay,
  },
  monday: {
    top: 250,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.redHatDisplay,
    textAlign: "left",
    color: Color.white,
    left: 54,
    fontWeight: "700",
  },
  launcherOpenItem: {
    left: 248,
  },
  launcherOpenInner: {
    left: 27,
  },
  rectangleView: {
    left: 140,
  },
  launcherOpenChild1: {
    left: 140,
  },
  launcherOpenChild2: {
    left: 32,
  },
  launcherOpenChild3: {
    left: 248,
  },
  google1Icon: {
    top: 476,
    left: 42,
    width: 50,
    height: 50,
    position: "absolute",
  },
  keys11Icon: {
    borderRadius: Border.br_3xl,
  },
  phoneCall1Icon: {
    left: 253,
  },
  canteen1Icon: {
    borderRadius: Border.br_3xl,
  },
  photoCameraInterfaceSymbolIcon: {
    left: 37,
    borderRadius: Border.br_3xl,
  },
  document1Icon: {
    left: 253,
  },
  launcherOpen: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LauncherOpen;
