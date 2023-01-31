import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const OfficeScholarshipMain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeScholarshipMain}>
      <Image
        style={styles.officeScholarshipMainChild}
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
        style={styles.icons8Scholarship641}
        resizeMode="cover"
        source={require("../assets/icons8scholarship64-1.png")}
      />
      <Text style={[styles.scholarship1, styles.officeTypo]}>Scholarship</Text>
      <View style={styles.officeScholarshipMainItem} />
      <Pressable
        style={[
          styles.officeScholarshipMainInner,
          styles.officeShadowBox,
          styles.rectanglePressableLayout,
        ]}
        onPress={() => navigation.navigate("OfficeScholarshipStatus1")}
      />
      <Text style={[styles.status, styles.statusTypo]}>Status</Text>
      <Pressable
        style={[
          styles.rectanglePressable,
          styles.officeShadowBox,
          styles.rectanglePressableLayout,
        ]}
        onPress={() => navigation.navigate("OfficeScholarshipApplied")}
      />
      <Text style={[styles.appliedScholarships, styles.statusTypo]}>
        Applied scholarships
      </Text>
      <Pressable
        style={[styles.officeScholarshipMainChild1, styles.officeShadowBox]}
        onPress={() => navigation.navigate("OfficeScholarshipAvailable")}
      />
      <Text style={styles.availableScholarships}>Available scholarships</Text>
      <Image
        style={[styles.analytics11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/analytics1-2.png")}
      />
      <Image
        style={[styles.clock11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/clock1-1.png")}
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
  rectanglePressableLayout: {
    left: 93,
    width: 250,
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_sm,
  },
  statusTypo: {
    height: 22,
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    left: 158,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
    left: 105,
    position: "absolute",
  },
  officeScholarshipMainChild: {
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
  icons8Scholarship641: {
    top: 160,
    left: 58,
    width: 40,
    height: 40,
    position: "absolute",
  },
  scholarship1: {
    top: 170,
    left: 120,
    fontSize: FontSize.size_2xl,
    color: Color.midnightblue_100,
    width: 108,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  officeScholarshipMainItem: {
    top: 217,
    left: 62,
    borderTopLeftRadius: Border.br_md,
    backgroundColor: Color.aliceblue,
    width: 298,
    height: 583,
    position: "absolute",
  },
  officeScholarshipMainInner: {
    top: 335,
  },
  status: {
    top: 351,
    width: 47,
  },
  rectanglePressable: {
    top: 418,
  },
  appliedScholarships: {
    top: 432,
    width: 163,
  },
  officeScholarshipMainChild1: {
    top: 256,
    left: 92,
  },
  availableScholarships: {
    top: 274,
    width: 182,
    height: 15,
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    left: 158,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  analytics11Icon: {
    top: 343,
  },
  clock11Icon: {
    top: 427,
  },
  exam21Icon: {
    top: 264,
  },
  officeScholarshipMain: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeScholarshipMain;
