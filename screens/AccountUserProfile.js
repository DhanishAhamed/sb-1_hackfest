import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const AccountUserProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountUserProfile}>
      <View style={[styles.accountUserProfileChild, styles.accountBg]} />
      <Text style={[styles.userProfile, styles.zainAhamedTypo]}>
        USER PROFILE
      </Text>
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
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/482636-2.png")}
      />
      <Text style={[styles.zainAhamed, styles.zainAhamedTypo]}>
        ZAIN AHAMED
      </Text>
      <Text style={styles.ra2011003020025}>RA2011003020025</Text>
      <View style={[styles.accountUserProfileItem, styles.accountBg]} />
      <Text style={[styles.courseBTechContainer, styles.contnoTypo]}>
        <Text style={styles.courseBT}>
          <Text>{` `}</Text>
          <Text
            style={styles.course}
          >{`COURSE                   : B-TECH GENERAL `}</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}>{`  `}</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> CLASS : CSE - K</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> BATCH : SEPT 2023 - JUN 2027</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}>{` `}</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> DATE OF BIRTH : 20/03/2003</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> BLOOD : A +</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> ADDRESS : 6 York RoadLondonN14 7TB</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> PIN : 6354267</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> : 92435671693</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> : 8462483647</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> NET ID : za8635@smist.edu.in</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}>{` `}</Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}> </Text>
        </Text>
        <Text style={styles.courseBT}>
          <Text style={styles.course}>{`      `}</Text>
        </Text>
      </Text>
      <Text style={[styles.permanentContno, styles.contnoTypo]}>
        <Text style={styles.courseBT}>{`PERMANENT `}</Text>
        <Text style={styles.contno}> CONT.NO</Text>
      </Text>
      <Text style={[styles.emergencyContno, styles.contnoTypo]}>
        <Text style={styles.courseBT}>EMERGENCY</Text>
        <Text style={styles.contno}> CONT.NO</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accountBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  zainAhamedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  contnoTypo: {
    whiteSpace: "pre-wrap",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  accountUserProfileChild: {
    top: 110,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    width: 355,
    height: 733,
  },
  userProfile: {
    top: 33,
    left: 86,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    width: 256,
    height: 98,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  logo: {
    left: 11,
    top: 25,
    width: 56,
    height: 57,
    position: "absolute",
  },
  icon1: {
    top: 131,
    left: 142,
    width: 81,
    height: 82,
    position: "absolute",
  },
  zainAhamed: {
    top: 220,
    left: 118,
    fontSize: FontSize.size_4xl,
    width: 252,
    height: 95,
    color: Color.midnightblue_100,
  },
  ra2011003020025: {
    top: 246,
    left: 130,
    color: Color.black,
    width: 122,
    height: 22,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  accountUserProfileItem: {
    top: 277,
    left: 24,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    width: 318,
    height: 516,
  },
  course: {
    color: Color.midnightblue_100,
  },
  courseBT: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  courseBTechContainer: {
    top: 291,
    left: 39,
    width: 288,
    height: 488,
  },
  contno: {
    margin: Margin.m_md,
  },
  permanentContno: {
    top: 643,
    left: 32,
    width: 103,
    height: 35,
    color: Color.midnightblue_100,
  },
  emergencyContno: {
    top: 694,
    left: 34,
    width: 88,
    height: 46,
    color: Color.midnightblue_100,
  },
  accountUserProfile: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 826,
    overflow: "hidden",
    width: "100%",
  },
});

export default AccountUserProfile;
