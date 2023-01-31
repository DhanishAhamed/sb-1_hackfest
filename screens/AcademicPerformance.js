import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AcademicPerformance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.academicPerformance}>
      <View
        style={[styles.academicPerformanceChild, styles.academicPosition]}
      />
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
      </Pressable>
      <Pressable
        style={[
          styles.attendance,
          styles.attendancePosition,
          styles.attendanceLayout,
        ]}
        onPress={() => navigation.navigate("AcademicAttendance")}
      >
        <View
          style={[
            styles.attendanceChild,
            styles.childShadowBox,
            styles.childShadowBox1,
          ]}
        />
        <Text style={styles.timetable}>Attendance</Text>
      </Pressable>
      <View
        style={[
          styles.performance,
          styles.attendancePosition,
          styles.attendanceLayout,
        ]}
      >
        <View
          style={[
            styles.performanceChild,
            styles.performanceBg,
            styles.childShadowBox,
          ]}
        />
        <Text style={styles.timetable}>Performance</Text>
      </View>
      <Text style={styles.performance2}>Performance</Text>
      <Image
        style={[styles.timetable11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/timetable1-1.png")}
      />
      <View style={[styles.academicPerformanceItem, styles.academicPosition]} />
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
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/599748-1.png")}
      />
      <Image
        style={[styles.result11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/result1-1.png")}
      />
      <View style={[styles.academicPerformanceInner, styles.performanceBg]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.groupItem} />
        <View style={[styles.groupInner, styles.lineViewLayout]} />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          resizeMode="cover"
          source={require("../assets/line-31.png")}
        />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <View style={[styles.groupChild2, styles.groupChildBorder]} />
        <View style={[styles.groupChild3, styles.groupChildBorder]} />
        <View style={[styles.groupChild4, styles.groupChildBorder]} />
        <View style={[styles.groupChild5, styles.groupChildBorder]} />
        <Text style={[styles.ai, styles.textTypo5, styles.aiPosition]}>AI</Text>
        <Text style={[styles.os, styles.textTypo5]}>OS</Text>
        <Text style={[styles.dbms, styles.dbmsTypo]}>DBMS</Text>
        <Text style={[styles.ml, styles.textTypo5]}>ML</Text>
        <Text style={[styles.cn, styles.cnTypo]}>CN</Text>
        <Text style={[styles.dsa, styles.cnTypo]}>DSA</Text>
        <Text style={[styles.ct1, styles.ct1Typo]}>CT1</Text>
        <Text style={[styles.text, styles.textTypo5]}>%</Text>
        <Text style={[styles.text1, styles.textTypo5, styles.aiPosition]}>
          23
        </Text>
        <Text style={[styles.text2, styles.ct4Typo]}>20</Text>
        <Text style={[styles.text3, styles.textTypo4]}>18</Text>
        <Text style={[styles.text4, styles.textTypo4]}>17</Text>
        <Text style={styles.text5}>24</Text>
        <Text style={[styles.text6, styles.textTypo5]}>21</Text>
        <Text style={[styles.text7, styles.textTypo3]}>92</Text>
        <Text style={[styles.text8, styles.textTypo3]}>80</Text>
        <Text style={[styles.text9, styles.dbmsTypo]}>72</Text>
        <Text style={[styles.text10, styles.textTypo2]}>68</Text>
        <Text style={[styles.text11, styles.textTypo5]}>96</Text>
        <Text style={[styles.text12, styles.textTypo2]}>84</Text>
        <Text style={[styles.ct2, styles.ct1Typo]}>CT2</Text>
        <Text style={[styles.ct3, styles.ct1Typo]}>CT3</Text>
        <Text style={[styles.ct4, styles.ct4Typo]}>CT4</Text>
      </View>
      <Image
        style={[styles.academicPerformanceChild1, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-311.png")}
      />
      <View style={[styles.academicPerformanceChild2, styles.lineViewLayout]} />
      <View style={styles.nbchartsColumnchats}>
        <View style={styles.leftText}>
          <Text style={[styles.text13, styles.textTypo]}>0</Text>
          <Text style={[styles.text14, styles.textTypo]}>6</Text>
          <Text style={[styles.text15, styles.textTypo1]}>12</Text>
          <Text style={[styles.text16, styles.textTypo1]}>18</Text>
          <Text style={[styles.text17, styles.textTypo1]}>25</Text>
        </View>
        <View style={[styles.bottomText, styles.texts1Layout]}>
          <Text style={[styles.ai1, styles.ai1FlexBox]}>AI</Text>
          <Text style={[styles.os1, styles.ai1FlexBox]}>OS</Text>
          <Text style={[styles.dbms1, styles.ai1FlexBox]}>DBMS</Text>
          <Text style={[styles.ml1, styles.ai1FlexBox]}>ML</Text>
          <Text style={[styles.cn1, styles.ai1FlexBox]}>CN</Text>
          <Text style={styles.dsa1}>DSA</Text>
        </View>
        <View style={styles.columns1}>
          <View style={[styles.view, styles.viewBg, styles.viewPosition]} />
          <View style={[styles.view1, styles.view1Position, styles.viewBg]} />
          <View style={[styles.view2, styles.view2Position, styles.viewBg]} />
          <View style={[styles.view3, styles.view3Position, styles.viewBg]} />
          <View style={[styles.view4, styles.view4Position, styles.viewBg]} />
          <View style={[styles.view5, styles.view5Position, styles.viewBg]} />
        </View>
        <View style={[styles.texts1, styles.texts1Layout]}>
          <Text style={[styles.textFlexBox, styles.viewPosition]}>23</Text>
          <Text style={[styles.textFlexBox, styles.view1Position]}>20</Text>
          <Text style={[styles.textFlexBox, styles.view2Position]}>18</Text>
          <Text style={[styles.textFlexBox, styles.view3Position]}>17</Text>
          <Text style={[styles.textFlexBox, styles.view4Position]}>24</Text>
          <Text style={[styles.textFlexBox, styles.view5Position]}>21</Text>
        </View>
      </View>
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
    position: "absolute",
  },
  attendanceLayout: {
    height: 81,
    top: 277,
  },
  performanceBg: {
    backgroundColor: Color.midnightblue_100,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    top: 291,
    position: "absolute",
  },
  groupChildLayout: {
    height: 224,
    position: "absolute",
  },
  lineViewLayout: {
    height: 225,
    width: 1,
    borderRightWidth: 1,
    borderColor: "#282f94",
    borderStyle: "solid",
    position: "absolute",
  },
  lineIconLayout: {
    width: 2,
    height: 224,
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
  textTypo5: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  aiPosition: {
    top: 44,
    color: Color.black,
  },
  dbmsTypo: {
    top: 104,
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
  ct1Typo: {
    width: 24,
    top: 12,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ct4Typo: {
    width: 29,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo4: {
    left: 91,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo3: {
    left: 285,
    width: 16,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo2: {
    left: 283,
    width: 16,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo: {
    width: 6,
    left: 6,
    height: 10,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xs,
    color: Color.white,
    position: "absolute",
  },
  textTypo1: {
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xs,
    height: 10,
    width: 12,
    color: Color.white,
    left: 0,
    position: "absolute",
  },
  texts1Layout: {
    width: 236,
    position: "absolute",
  },
  ai1FlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    height: 10,
    display: "flex",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xs,
    color: Color.white,
    top: 0,
    position: "absolute",
  },
  viewBg: {
    backgroundColor: Color.dodgerblue,
    width: 20,
    position: "absolute",
  },
  viewPosition: {
    top: 4,
    left: 0,
  },
  view1Position: {
    left: 44,
    top: 17,
  },
  view2Position: {
    left: 89,
    top: 25,
  },
  view3Position: {
    left: 133,
    top: 30,
  },
  view4Position: {
    left: 178,
    top: 0,
  },
  view5Position: {
    left: 222,
    top: 13,
  },
  academicPerformanceChild: {
    top: 214,
    left: 5,
    backgroundColor: Color.white,
    width: 355,
    height: 586,
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
  timetableAcademic: {
    left: 42,
    width: 60,
    height: 81,
    top: 277,
  },
  attendanceChild: {
    left: 4,
  },
  attendance: {
    left: 151,
    width: 67,
  },
  performanceChild: {
    left: 8,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_md,
    backgroundColor: Color.midnightblue_100,
  },
  performance: {
    left: 264,
    width: 75,
  },
  performance2: {
    top: 147,
    left: 38,
    fontSize: FontSize.size_6xl,
    width: 212,
    height: 40,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  timetable11Icon: {
    left: 55,
  },
  academicPerformanceItem: {
    top: 371,
    left: 15,
    backgroundColor: Color.ghostwhite,
    width: 345,
    height: 429,
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
  icon1: {
    left: 167,
  },
  result11Icon: {
    left: 287,
  },
  academicPerformanceInner: {
    top: 392,
    left: 31,
    borderRadius: Border.br_lg,
    width: 310,
    height: 150,
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
    left: 170,
    top: 0,
  },
  lineIcon: {
    left: 76,
    top: 0,
  },
  lineView: {
    left: 123,
    top: 0,
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
    left: 28,
    width: 13,
  },
  os: {
    width: 18,
    left: 27,
    top: 72,
  },
  dbms: {
    width: 36,
    left: 27,
  },
  ml: {
    width: 19,
    top: 137,
    left: 27,
  },
  cn: {
    top: 166,
    width: 18,
  },
  dsa: {
    top: 196,
    width: 26,
  },
  ct1: {
    left: 90,
  },
  text: {
    left: 291,
    width: 10,
    top: 12,
  },
  text1: {
    width: 25,
    left: 90,
  },
  text2: {
    left: 90,
    top: 72,
  },
  text3: {
    top: 103,
    width: 13,
  },
  text4: {
    width: 15,
    top: 137,
  },
  text5: {
    left: 88,
    width: 16,
    top: 166,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text6: {
    top: 197,
    width: 14,
    left: 90,
  },
  text7: {
    top: 45,
  },
  text8: {
    top: 74,
    opacity: 0.88,
  },
  text9: {
    left: 284,
    opacity: 0.75,
    width: 15,
  },
  text10: {
    top: 137,
  },
  text11: {
    left: 282,
    width: 17,
    top: 166,
  },
  text12: {
    top: 195,
    opacity: 0.9,
  },
  ct2: {
    left: 137,
  },
  ct3: {
    left: 184,
  },
  ct4: {
    left: 231,
    top: 12,
  },
  rectangleParent: {
    left: 30,
    width: 315,
    top: 552,
  },
  academicPerformanceChild1: {
    left: 249,
    top: 552,
  },
  academicPerformanceChild2: {
    left: 296,
    top: 552,
  },
  text13: {
    top: 105,
    height: 10,
  },
  text14: {
    top: 79,
    height: 10,
  },
  text15: {
    top: 53,
    height: 10,
  },
  text16: {
    top: 26,
    height: 10,
  },
  text17: {
    height: 10,
    top: 0,
  },
  leftText: {
    top: 6,
    height: 115,
    width: 12,
    left: 0,
    position: "absolute",
  },
  ai1: {
    width: 10,
    left: 0,
  },
  os1: {
    left: 43,
    width: 13,
  },
  dbms1: {
    left: 79,
    width: 28,
  },
  ml1: {
    left: 131,
    width: 15,
  },
  cn1: {
    left: 176,
    width: 14,
  },
  dsa1: {
    left: 216,
    width: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    height: 10,
    display: "flex",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xs,
    color: Color.white,
    top: 0,
    position: "absolute",
  },
  bottomText: {
    top: 124,
    left: 39,
    height: 10,
  },
  view: {
    height: 98,
  },
  view1: {
    height: 85,
  },
  view2: {
    height: 76,
  },
  view3: {
    height: 72,
  },
  view4: {
    height: 102,
  },
  view5: {
    height: 89,
  },
  columns1: {
    top: 16,
    left: 34,
    width: 242,
    height: 102,
    position: "absolute",
  },
  textFlexBox: {
    height: 11,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    display: "flex",
    fontFamily: FontFamily.roboto,
    width: 14,
    color: Color.white,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  texts1: {
    left: 36,
    height: 41,
    top: 0,
  },
  nbchartsColumnchats: {
    top: 400,
    left: 41,
    width: 275,
    height: 134,
    position: "absolute",
  },
  academicPerformance: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AcademicPerformance;
