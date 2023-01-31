import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qr}>
      <View style={styles.qrChild} />
      <Text style={styles.qr1}>QR</Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1167091-11.png")}
      />
      <Text style={[styles.scanTheQr, styles.scanTheQrTypo]}>
        SCAN THE QR AT THE GATE
      </Text>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/828735-1.png")}
      />
      <Image
        style={styles.qrItem}
        resizeMode="cover"
        source={require("../assets/line-36.png")}
      />
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require("../assets/482636-1.png")}
      />
      <View style={styles.qrInner} />
      <Text style={[styles.zainAhamed, styles.scanTheQrTypo]}>ZAIN AHAMED</Text>
      <View style={[styles.rectangleView, styles.childLayout]} />
      <View style={[styles.qrChild1, styles.childLayout]} />
      <View style={[styles.qrChild2, styles.childLayout]} />
      <Text style={[styles.courseBtech, styles.batchYearTypo]}>
        COURSE : B.TECH ( CSE - GENERAL )
      </Text>
      <Text style={[styles.registernoRa2011003020025, styles.batchYearTypo]}>
        REGISTER.NO : RA2011003020025
      </Text>
      <Text style={[styles.batchYear, styles.batchYearTypo]}>
        BATCH / YEAR : 2024 BATCH / 3RD YEAR
      </Text>
      <Pressable
        style={styles.logo}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scanTheQrTypo: {
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  childLayout: {
    height: 27,
    width: 253,
    backgroundColor: Color.midnightblue_100,
    left: 53,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  batchYearTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  qrChild: {
    top: 110,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    backgroundColor: Color.white,
    width: 355,
    height: 690,
    position: "absolute",
  },
  qr1: {
    top: 40,
    left: 103,
    fontSize: FontSize.size_6xl,
    width: 191,
    height: 55,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    top: 181,
    left: 58,
    width: 245,
    height: 246,
    position: "absolute",
  },
  scanTheQr: {
    top: 140,
    left: 94,
    width: 252,
    height: 41,
    opacity: 0.5,
  },
  icon1: {
    top: 455,
    left: 151,
    width: 59,
    height: 63,
    position: "absolute",
  },
  qrItem: {
    top: 535,
    left: 31,
    width: 302,
    height: 2,
    opacity: 0.3,
    position: "absolute",
  },
  icon2: {
    top: 555,
    left: 160,
    width: 41,
    height: 40,
    position: "absolute",
  },
  qrInner: {
    top: 603,
    left: 105,
    backgroundColor: Color.lightskyblue_200,
    width: 149,
    height: 23,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  zainAhamed: {
    top: 606,
    left: 136,
    width: 87,
    height: 28,
  },
  rectangleView: {
    top: 649,
  },
  qrChild1: {
    top: 686,
  },
  qrChild2: {
    top: 728,
  },
  courseBtech: {
    top: 654,
    left: 73,
    width: 214,
    height: 18,
  },
  registernoRa2011003020025: {
    top: 694,
    left: 80,
    width: 199,
    height: 24,
  },
  batchYear: {
    top: 732,
    left: 62,
    width: 240,
    height: 19,
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  logo: {
    left: 30,
    top: 30,
    width: 56,
    height: 57,
    position: "absolute",
  },
  qr: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default QR;
