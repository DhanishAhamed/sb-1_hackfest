import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OfficeBonafide = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeBonafide}>
      <Image
        style={styles.officeBonafideChild}
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
        <View style={styles.scholarship}>
          <View style={styles.scholarshipChild} />
        </View>
      </View>
      <Image
        style={styles.icons8Certificate6411}
        resizeMode="cover"
        source={require("../assets/icons8certificate64-1-1.png")}
      />
      <Text style={[styles.bonafideCertificate, styles.officeTypo]}>
        Bonafide Certificate
      </Text>
      <Pressable
        style={[styles.officeBonafideItem, styles.officeShadowBox]}
        onPress={() => navigation.navigate("OfficeBonafideStatus")}
      />
      <Text style={[styles.status, styles.applyTypo]}>Status</Text>
      <Pressable
        style={[styles.officeBonafideInner, styles.officeShadowBox]}
        onPress={() => navigation.navigate("OfficeBonafideApply")}
      />
      <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
      <Image
        style={[styles.analytics11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/analytics1-2.png")}
      />
      <Image
        style={[styles.exam21Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/exam2-1.png")}
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
  officeShadowBox: {
    height: 50,
    width: 250,
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
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    left: 136,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
    left: 83,
    position: "absolute",
  },
  officeBonafideChild: {
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
    height: 650,
    width: 367,
    position: "absolute",
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
    height: 650,
    width: 367,
    left: 30,
    position: "absolute",
  },
  icons8Certificate6411: {
    top: 160,
    left: 58,
    width: 41,
    height: 41,
    position: "absolute",
  },
  bonafideCertificate: {
    top: 170,
    left: 120,
    fontSize: FontSize.size_2xl,
    color: Color.midnightblue_100,
    width: 180,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  officeBonafideItem: {
    top: 310,
    left: 71,
  },
  status: {
    top: 326,
    width: 47,
    height: 22,
  },
  officeBonafideInner: {
    top: 231,
    left: 70,
  },
  apply: {
    top: 249,
    width: 182,
    height: 15,
  },
  analytics11Icon: {
    top: 318,
  },
  exam21Icon: {
    top: 239,
  },
  officeBonafide: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeBonafide;
