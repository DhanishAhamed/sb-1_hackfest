import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OfficeODAndMedical = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeOdAndMedical}>
      <Image
        style={styles.officeOdAndMedicalChild}
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
      <View style={styles.officeMenu}>
        <View style={styles.scholarship}>
          <View style={styles.scholarshipChild} />
        </View>
      </View>
      <Image
        style={styles.icons8Certificate641}
        resizeMode="cover"
        source={require("../assets/icons8certificate64-1.png")}
      />
      <Text style={[styles.odAndMedical, styles.medicalTypo]}>
        OD and Medical Leave
      </Text>
      <View style={styles.officeOdAndMedicalItem} />
      <Pressable
        style={[styles.od, styles.odLayout]}
        onPress={() => navigation.navigate("OfficeOD")}
      >
        <View style={[styles.odChild, styles.childShadowBox]} />
        <View style={styles.odItem} />
        <Image
          style={styles.entrepreneur1Icon}
          resizeMode="cover"
          source={require("../assets/entrepreneur-11.png")}
        />
        <Text style={[styles.od1, styles.medicalTypo]}>{`OD `}</Text>
      </Pressable>
      <Pressable
        style={[styles.medicalLeave, styles.odLayout]}
        onPress={() => navigation.navigate("OfficeMedicalLeave")}
      >
        <View style={[styles.medicalLeaveChild, styles.childShadowBox]} />
        <View style={styles.odItem} />
        <Image
          style={styles.entrepreneur1Icon}
          resizeMode="cover"
          source={require("../assets/stethoscope-11.png")}
        />
        <Text style={[styles.medicalLeave1, styles.medicalTypo]}>
          Medical Leave
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  medicalTypo: {
    height: 26,
    color: Color.midnightblue_100,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  odLayout: {
    height: 144,
    width: 113,
    top: 256,
    position: "absolute",
  },
  childShadowBox: {
    height: 73,
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    width: 113,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  officeOdAndMedicalChild: {
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
    color: Color.white,
    width: 122,
    height: 51,
    textAlign: "left",
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
  icons8Certificate641: {
    top: 160,
    left: 58,
    width: 40,
    height: 40,
    position: "absolute",
  },
  odAndMedical: {
    top: 170,
    left: 120,
    width: 169,
  },
  officeOdAndMedicalItem: {
    top: 217,
    left: 62,
    borderTopLeftRadius: Border.br_md,
    backgroundColor: Color.aliceblue,
    width: 298,
    height: 583,
    position: "absolute",
  },
  odChild: {
    top: 70,
  },
  odItem: {
    backgroundColor: Color.midnightblue_100,
    height: 107,
    borderRadius: Border.br_sm,
    width: 113,
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
    position: "absolute",
  },
  entrepreneur1Icon: {
    top: 14,
    left: 17,
    width: 80,
    height: 80,
    position: "absolute",
  },
  od1: {
    top: 118,
    left: 43,
    width: 27,
  },
  od: {
    left: 92,
  },
  medicalLeaveChild: {
    top: 71,
  },
  medicalLeave1: {
    top: 116,
    left: 6,
    width: 107,
  },
  medicalLeave: {
    left: 232,
  },
  officeOdAndMedical: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeODAndMedical;
