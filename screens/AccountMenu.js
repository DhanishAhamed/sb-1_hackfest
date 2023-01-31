import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AccountMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountMenu}>
      <Image
        style={styles.accountMenuChild}
        resizeMode="cover"
        source={require("../assets/rectangle-78.png")}
      />
      <Text style={styles.account}>ACCOUNT</Text>
      <Text style={styles.helloZainContainer}>
        <Text style={styles.hello}>
          <Text style={styles.hello1}>Hello,</Text>
        </Text>
        <Text style={styles.hello}>
          <Text style={styles.zain1}>Zain !</Text>
        </Text>
      </Text>
      <Text style={styles.zainAhamedRa2011003020025Container}>
        <Text style={styles.hello}>Zain Ahamed</Text>
        <Text style={styles.hello}>RA2011003020025</Text>
      </Text>
      <Image
        style={[styles.icons8MaleUser641, styles.logoPosition]}
        resizeMode="cover"
        source={require("../assets/icons8maleuser64-1.png")}
      />
      <Pressable
        style={[styles.accountMenuItem, styles.accountShadowBox]}
        onPress={() => navigation.navigate("AccountUserProfile")}
      />
      <View style={[styles.accountMenuInner, styles.accountShadowBox]} />
      <View style={[styles.rectangleView, styles.accountShadowBox]} />
      <View style={[styles.accountMenuChild1, styles.accountShadowBox]} />
      <Text style={styles.userProfile}>User Profile</Text>
      <Image
        style={styles.icons8MaleUser642}
        resizeMode="cover"
        source={require("../assets/icons8maleuser64-2.png")}
      />
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
        style={[styles.icons8TestResults501, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/icons8testresults50-1.png")}
      />
      <Text style={[styles.results, styles.aboutTypo]}>Results</Text>
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.settings, styles.aboutTypo]}>Settings</Text>
      <Image
        style={[styles.image2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.about, styles.aboutTypo]}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    left: 30,
    position: "absolute",
  },
  accountShadowBox: {
    opacity: 0.6,
    height: 73,
    width: 307,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.lightskyblue_100,
    borderRadius: Border.br_2xs,
    left: 40,
    position: "absolute",
  },
  iconPosition: {
    left: 58,
    width: 45,
    position: "absolute",
  },
  aboutTypo: {
    height: 12,
    fontSize: FontSize.size_2xl,
    left: 135,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  accountMenuChild: {
    top: 230,
    left: 5,
    width: 355,
    height: 570,
    position: "absolute",
  },
  account: {
    top: 39,
    left: 104,
    fontSize: FontSize.size_6xl,
    width: 211,
    height: 51,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  hello1: {
    fontSize: FontSize.size_5xl,
  },
  hello: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  zain1: {
    fontSize: FontSize.size_8xl,
  },
  helloZainContainer: {
    top: 112,
    width: 254,
    left: 40,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  zainAhamedRa2011003020025Container: {
    top: 252,
    left: 116,
    fontSize: FontSize.size_4xl,
    color: Color.gray_200,
    width: 254,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  icons8MaleUser641: {
    top: 246,
    height: 64,
    width: 64,
  },
  accountMenuItem: {
    top: 339,
  },
  accountMenuInner: {
    top: 429,
  },
  rectangleView: {
    top: 519,
  },
  accountMenuChild1: {
    top: 609,
  },
  userProfile: {
    top: 364,
    width: 250,
    height: 11,
    fontSize: FontSize.size_2xl,
    left: 135,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  icons8MaleUser642: {
    top: 349,
    left: 62,
    height: 45,
    width: 45,
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
  icons8TestResults501: {
    top: 441,
    height: 45,
  },
  results: {
    top: 454,
    width: 64,
  },
  image1Icon: {
    top: 535,
    height: 41,
  },
  settings: {
    top: 544,
    width: 70,
  },
  image2Icon: {
    top: 623,
    height: 45,
  },
  about: {
    top: 634,
    width: 60,
  },
  accountMenu: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AccountMenu;
