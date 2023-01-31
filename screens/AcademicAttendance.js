import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AcademicAttendance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.academicAttendance}>
      <View style={[styles.academicAttendanceChild, styles.academicPosition]} />
      <Pressable
        style={[styles.timetableAcademic, styles.attendancePosition]}
        onPress={() => navigation.navigate("AcademicTimetable")}
      >
        <View
          style={[
            styles.timetableAcademicChild,
            styles.childShadowBox,
            styles.childShadowBox1,
          ]}
        />
        <Text style={styles.timetable}>Timetable</Text>
        <Image
          style={[styles.timetable11Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/timetable1-1.png")}
        />
      </Pressable>
      <View
        style={[
          styles.attendance,
          styles.attendancePosition,
          styles.attendanceLayout,
        ]}
      >
        <View style={[styles.attendanceChild, styles.childShadowBox]} />
        <Text style={styles.timetable}>Attendance</Text>
        <Image
          style={[styles.armUp1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/armup-1.png")}
        />
      </View>
      <Pressable
        style={[
          styles.performance,
          styles.attendancePosition,
          styles.attendanceLayout,
        ]}
        onPress={() => navigation.navigate("AcademicPerformance")}
      >
        <View
          style={[
            styles.performanceChild,
            styles.childShadowBox,
            styles.childShadowBox1,
          ]}
        />
        <Image
          style={[styles.result1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/result-1.png")}
        />
        <Text style={styles.timetable}>Performance</Text>
      </Pressable>
      <View style={[styles.academicAttendanceItem, styles.academicPosition]} />
      <View
        style={[styles.academicAttendanceInner, styles.bottomTextPosition]}
      />
      <View style={[styles.rectangleParent, styles.lineIconLayout]}>
        <View style={[styles.groupChild, styles.lineIconLayout]} />
        <View style={styles.groupItem} />
        <View style={[styles.groupInner, styles.lineViewBorder]} />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          resizeMode="cover"
          source={require("../assets/line-31.png")}
        />
        <View style={[styles.lineView, styles.lineViewBorder]} />
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <View style={[styles.groupChild2, styles.groupChildBorder]} />
        <View style={[styles.groupChild3, styles.groupChildBorder]} />
        <View style={[styles.groupChild4, styles.groupChildBorder]} />
        <View style={[styles.groupChild5, styles.groupChildBorder]} />
        <Text style={[styles.ai, styles.textTypo8]}>AI</Text>
        <Text style={[styles.os, styles.osTypo]}>OS</Text>
        <Text style={[styles.dbms, styles.osTypo]}>DBMS</Text>
        <Text style={[styles.ml, styles.osTypo]}>ML</Text>
        <Text style={[styles.cn, styles.cnTypo]}>CN</Text>
        <Text style={[styles.dsa, styles.cnTypo]}>DSA</Text>
        <Text style={[styles.attended, styles.textTypo7]}>Attended</Text>
        <View style={[styles.absAvailableWrapper, styles.bar1Position]}>
          <Text style={styles.textTypo8}>Abs available</Text>
        </View>
        <Text style={[styles.text, styles.textTypo7]}>%</Text>
        <Text style={[styles.text1, styles.textTypo6]}>9/15</Text>
        <Text style={[styles.text2, styles.textTypo5]}>13</Text>
        <Text style={styles.text3}>13/15</Text>
        <Text style={[styles.text4, styles.textTypo6]}>11/15</Text>
        <Text style={[styles.text5, styles.textTypo4]}>13/15</Text>
        <Text style={[styles.text6, styles.textTypo4]}>13/15</Text>
        <Text style={[styles.text7, styles.textTypo6]}>14/15</Text>
        <Text style={[styles.text8, styles.textTypo3]}>17</Text>
        <Text style={[styles.text9, styles.textTypo5]}>15</Text>
        <Text style={[styles.text10, styles.textTypo5]}>17</Text>
        <Text style={[styles.text11, styles.textTypo5]}>17</Text>
        <Text style={[styles.text12, styles.textTypo3]}>18</Text>
        <Text style={[styles.text13, styles.textLayout1, styles.textTypo2]}>
          60
        </Text>
        <Text style={[styles.text14, styles.textLayout1, styles.textTypo2]}>
          88
        </Text>
        <Text style={[styles.text15, styles.textTypo8]}>75</Text>
        <Text style={[styles.text16, styles.textLayout1, styles.textTypo8]}>
          90
        </Text>
        <Text style={[styles.text17, styles.textTypo2]}>91</Text>
        <Text style={[styles.text18, styles.textLayout1, styles.textTypo8]}>
          96
        </Text>
      </View>
      <Pressable
        style={styles.srmRemovebgPreview1}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/srmremovebgpreview-1.png")}
        />
      </Pressable>
      <View style={styles.nbchartsHcolumncharts}>
        <View style={[styles.leftText, styles.dbms1Position]}>
          <Text style={[styles.ai1, styles.textTypo, styles.ai1Typo]}>AI</Text>
          <Text style={[styles.os1, styles.os1Typo]}>OS</Text>
          <Text
            style={[
              styles.dbms1,
              styles.textTypo,
              styles.ai1Typo,
              styles.dbms1Position,
            ]}
          >
            DBMS
          </Text>
          <Text
            style={[
              styles.ml1,
              styles.ml1Position,
              styles.textTypo,
              styles.ai1Typo,
            ]}
          >
            ML
          </Text>
          <Text style={[styles.cn1, styles.os1Typo]}>CN</Text>
          <Text
            style={[
              styles.dsa1,
              styles.textTypo,
              styles.ai1Typo,
              styles.textLayout1,
            ]}
          >
            DSA
          </Text>
        </View>
        <View style={[styles.bottomText, styles.bottomTextPosition]}>
          <Text
            style={[
              styles.text19,
              styles.textFlexBox,
              styles.textTypo,
              styles.textTypo1,
            ]}
          >
            0
          </Text>
          <Text style={[styles.text20, styles.textLayout, styles.textFlexBox]}>
            25
          </Text>
          <Text style={[styles.text21, styles.textLayout, styles.textFlexBox]}>
            50
          </Text>
          <Text style={[styles.text22, styles.textLayout, styles.textFlexBox]}>
            75
          </Text>
          <Text
            style={[
              styles.text23,
              styles.textFlexBox,
              styles.textTypo,
              styles.textTypo1,
            ]}
          >
            100
          </Text>
        </View>
        <View style={[styles.bar1, styles.bar1Position]}>
          <View style={[styles.view, styles.viewLayout]} />
          <View style={[styles.view1, styles.viewLayout]} />
          <View
            style={[styles.view2, styles.view2Position, styles.viewLayout]}
          />
          <View style={[styles.view3, styles.viewLayout, styles.ml1Position]} />
          <View
            style={[styles.view4, styles.view4Position, styles.viewLayout]}
          />
          <View
            style={[styles.view5, styles.view5Position, styles.viewLayout]}
          />
        </View>
        <View style={styles.texts1}>
          <Text style={[styles.text24, styles.textLayout]}>60</Text>
          <Text style={[styles.text25, styles.textLayout]}>88</Text>
          <Text
            style={[styles.text26, styles.view2Position, styles.textLayout]}
          >
            75
          </Text>
          <Text style={[styles.text27, styles.textLayout, styles.ml1Position]}>
            90
          </Text>
          <Text
            style={[styles.text28, styles.view4Position, styles.textLayout]}
          >
            91
          </Text>
          <Text
            style={[styles.text29, styles.view5Position, styles.textLayout]}
          >
            96
          </Text>
        </View>
      </View>
      <Text style={styles.attendance2}>Attendance</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  academicPosition: {
    borderTopLeftRadius: Border.br_3xl,
    position: "absolute",
  },
  attendancePosition: {
    height: 81,
    top: 277,
    position: "absolute",
  },
  childShadowBox: {
    height: 60,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_md,
    top: 0,
    width: 60,
    position: "absolute",
  },
  childShadowBox1: {
    backgroundColor: Color.lightskyblue_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_md,
  },
  iconLayout: {
    height: 32,
    width: 32,
    top: 14,
    position: "absolute",
  },
  attendanceLayout: {
    height: 81,
    top: 277,
  },
  bottomTextPosition: {
    left: 31,
    position: "absolute",
  },
  lineIconLayout: {
    height: 224,
    position: "absolute",
  },
  lineViewBorder: {
    width: 1,
    borderRightWidth: 1,
    borderColor: "#282f94",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: "rgba(40, 47, 148, 0.15)",
    height: 1,
    width: 313,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo8: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  osTypo: {
    left: 27,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  cnTypo: {
    left: 26,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo7: {
    top: 12,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  bar1Position: {
    top: 2,
    position: "absolute",
  },
  textTypo6: {
    left: 113,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo5: {
    left: 211,
    width: 15,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo4: {
    left: 111,
    width: 35,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo3: {
    left: 212,
    width: 15,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textLayout1: {
    width: 16,
    position: "absolute",
  },
  textTypo2: {
    width:15,
    left: 285,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  dbms1Position: {
    width: 22,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    display: "flex",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: 9,
    color: Color.white,
  },
  ai1Typo: {
    textAlign: "right",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
  },
  os1Typo: {
    width: 11,
    left: 11,
    height: 9,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  ml1Position: {
    top: 63,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  textTypo1: {
    display: "flex",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
  },
  textLayout: {
    width: 9,
    height: 9,
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
  },
  viewLayout: {
    height: 5,
    borderRadius: Border.br_3xl,
    left: 0,
  },
  view2Position: {
    top: 41,
    position: "absolute",
  },
  view4Position: {
    top: 84,
    position: "absolute",
  },
  view5Position: {
    top: 106,
    position: "absolute",
  },
  academicAttendanceChild: {
    top: 214,
    left: 5,
    backgroundColor: Color.white,
    width: "100%",
    height:  "100%",
  },
  timetableAcademicChild: {
    left: 0,
  },
  timetable: {
    top: 65,
    color: Color.midnightblue_100,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 0,
    position: "absolute",
  },
  timetable11Icon: {
    left: 13,
  },
  timetableAcademic: {
    left: 42,
    width: 60,
    height: 81,
    top: 277,
  },
  attendanceChild: {
    left: 4,
    backgroundColor: Color.midnightblue_100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_md,
  },
  armUp1Icon: {
    left: 16,
  },
  attendance: {
    left: 151,
    width: 67,
  },
  performanceChild: {
    left: 8,
  },
  result1Icon: {
    left: 22,
  },
  performance: {
    left: 264,
    width: 75,
  },
  academicAttendanceItem: {
    top: 371,
    left: 15,
    backgroundColor: Color.ghostwhite,
    width: 345,
    height: 429,
  },
  academicAttendanceInner: {
    top: 392,
    borderRadius: Border.br_lg,
    height: 150,
    width: 315,
    backgroundColor: Color.midnightblue_100,
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightsteelblue,
    width: 312,
    left: 2,
    top: 0,
  },
  groupItem: {
    top: 37,
    height: 1,
    width: 313,
    borderTopWidth: 1,
    borderColor: "#282f94",
    borderStyle: "solid",
    left: 2,
    position: "absolute",
  },
  groupInner: {
    left: 263,
    height: 225,
    top: 0,
  },
  lineIcon: {
    left: 76,
    width: 2,
    top: 0,
  },
  lineView: {
    top: 5,
    height: 220,
    left: 170,
  },
  groupChild1: {
    top: 67,
    left: 2,
  },
  groupChild2: {
    top: 97,
    left: 1,
  },
  groupChild3: {
    top: 128,
    left: 0,
  },
  groupChild4: {
    top: 158,
    left: 3,
  },
  groupChild5: {
    top: 188,
    left: 2,
  },
  ai: {
    width: 13,
    top: 44,
    left: 28,
    position: "absolute",
  },
  os: {
    width: 18,
    top: 72,
    left: 27,
  },
  dbms: {
    width: 36,
    top: 104,
  },
  ml: {
    width: 19,
    top: 137,
  },
  cn: {
    top: 166,
    width: 18,
  },
  dsa: {
    width: 26,
    top: 196,
  },
  attended: {
    left: 97,
    width: 55,
  },
  absAvailableWrapper: {
    width: 96,
    flexDirection: "row",
    padding: 10,
    left: 170,
  },
  text: {
    left: 291,
    width: 10,
  },
  text1: {
    width: 30,
    top: 44,
  },
  text2: {
    width: 15,
    top: 45,
  },
  text3: {
    width: 35,
    left: 113,
    top: 72,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text4: {
    width:35,
    top: 104,
  },
  text5: {
    top: 137,
  },
  text6: {
    top: 166,
  },
  text7: {
    width: 35,
    top: 196,
  },
  text8: {
    top: 74,
  },
  text9: {
    width: 12,
    top: 104,
  },
  text10: {
    width: 12,
    top: 137,
  },
  text11: {
    width: 12,
    top: 166,
  },
  text12: {
    top: 196,
  },
  text13: {
    top: 45,
  },
  text14: {
    opacity: 0.88,
    top: 74,
  },
  text15: {
    left: 284,
    width: 15,
    opacity: 0.75,
    top: 104,
    position: "absolute",
  },
  text16: {
    left: 283,
    top: 137,
  },
  text17: {
    width: 12,
    top: 166,
    position: "absolute",
  },
  text18: {
    left: 286,
    opacity: 0.9,
    top: 196,
  },
  rectangleParent: {
    top: 555,
    left: 28,
    width: 315,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  srmRemovebgPreview1: {
    left: 80,
    width: 200,
    height: 200,
    top: 0,
    position: "absolute",
  },
  ai1: {
    left: 14,
    width: 8,
    height: 9,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  os1: {
    top: 21,
  },
  dbms1: {
    top: 42,
    height: 9,
    alignItems: "center",
  },
  ml1: {
    left: 10,
    height: 9,
    alignItems: "center",
    width: 12,
  },
  cn1: {
    top: 85,
  },
  dsa1: {
    top: 107,
    left: 6,
    height: 9,
    alignItems: "center",
  },
  leftText: {
    height: 115,
    top: 0,
  },
  text19: {
    width: 5,
    height: 9,
    left: 0,
  },
  text20: {
    left: 63,
  },
  text21: {
    left: 128,
  },
  text22: {
    left: 193,
  },
  text23: {
    left: 255,
    width: 14,
    height: 9,
  },
  bottomText: {
    top: 133,
    width: 269,
    height: 9,
  },
  view: {
    backgroundColor: "#0263ff",
    width: 157,
    top: 0,
    position: "absolute",
  },
  view1: {
    backgroundColor: "#93c0fa",
    width: 230,
    top: 21,
    position: "absolute",
  },
  view2: {
    backgroundColor: Color.black,
    width: 196,
  },
  view3: {
    backgroundColor: "#5675e8",
    width: 236,
  },
  view4: {
    backgroundColor: "#3facf5",
    width: 238,
  },
  view5: {
    backgroundColor: "#2ea4e8",
    width: 251,
  },
  bar1: {
    left: 32,
    height: 111,
    width: 251,
  },
  text24: {
    alignItems: "center",
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text25: {
    left: 73,
    top: 21,
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  text26: {
    left: 39,
    alignItems: "center",
    textAlign: "left",
  },
  text27: {
    left: 79,
    alignItems: "center",
    textAlign: "left",
  },
  text28: {
    left: 81,
    alignItems: "center",
    textAlign: "left",
  },
  text29: {
    left: 94,
    alignItems: "center",
    textAlign: "left",
  },
  texts1: {
    left: 194,
    width: 103,
    height: 114,
    top: 0,
    position: "absolute",
  },
  nbchartsHcolumncharts: {
    top: 398,
    left: 34,
    width: 300,
    height: 142,
    position: "absolute",
  },
  attendance2: {
    top: 140,
    left: 38,
    fontSize: FontSize.size_6xl,
    width: 183,
    height: 35,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  academicAttendance: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AcademicAttendance;
