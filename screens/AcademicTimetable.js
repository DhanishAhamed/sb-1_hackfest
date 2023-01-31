import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const AcademicTimetable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.academicTimetable}>
      <View style={[styles.academicTimetableChild, styles.academicPosition]} />
      <Text style={styles.timetable}>Timetable</Text>
      <Text style={[styles.categories, styles.categoriesTypo]}>Categories</Text>
      <View style={[styles.academicTimetableItem, styles.academicPosition]} />
      <Text style={[styles.upcomingClasses, styles.categoriesTypo]}>
        UPCOMING CLASSES
      </Text>
      <View style={[styles.timeTableFormat, styles.timeTableFormatLayout]}>
        <View style={[styles.timetableformat, styles.timeTableFormatLayout]}>
          <View style={[styles.timetableformatInner, styles.groupChildLayout]}>
            <View
              style={[
                styles.groupChild,
                styles.groupPosition,
                styles.groupChildLayout,
              ]}
            />
          </View>
          <View style={[styles.timetableformatChild, styles.groupChildLayout]}>
            <View
              style={[
                styles.groupChild,
                styles.groupPosition,
                styles.groupChildLayout,
              ]}
            />
          </View>
          <Text style={[styles.am, styles.amTypo]}>11:20 AM</Text>
          <Text style={[styles.pm, styles.amTypo]}>12:30 PM</Text>
          <Text style={[styles.am1, styles.amTypo]}>09:50 AM</Text>
          <Text style={[styles.am2, styles.amTypo]}>10:40 AM</Text>
          <Text style={[styles.am3, styles.amTypo]}>09:40 AM</Text>
          <Text style={[styles.am4, styles.amTypo]}>08:00 AM</Text>
          <Text style={[styles.pm1, styles.amTypo]}>01:20 PM</Text>
          <Text style={[styles.am5, styles.amTypo]}>08:50 AM</Text>
          <Text style={[styles.pm2, styles.amTypo]}>02:10 PM</Text>
          <Text style={[styles.pm3, styles.amTypo]}>03:00 PM</Text>
          <Text style={[styles.dbms, styles.dbmsTypo]}>DBMS</Text>
          <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
            <View
              style={[
                styles.groupInner,
                styles.groupInnerLayout,
                styles.groupPosition,
              ]}
            />
            <Text style={[styles.operatingSystemLabContainer, styles.dbmsTypo]}>
              <Text style={styles.operatingSystem}>Operating System</Text>
              <Text style={styles.lab}>LAB</Text>
            </Text>
          </View>
          <Text style={styles.artificialIntelligence}>
            Artificial Intelligence
          </Text>
          <View
            style={[
              styles.timetableformatItem,
              styles.groupPosition,
              styles.groupChildLayout,
            ]}
          />
          <Text style={[styles.dsa, styles.dsaTypo]}>DSA</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupChildLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupPosition,
              styles.groupChildLayout,
            ]}
          />
          <Text style={[styles.machineLearning, styles.dbmsTypo]}>
            Machine Learning
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupPosition,
              styles.groupChildLayout,
            ]}
          />
          <Text style={[styles.computerNetwork, styles.dsaTypo]}>
            Computer Network
          </Text>
        </View>
      </View>
      <View style={[styles.timetable1, styles.timetable1ShadowBox]}>
        <View style={styles.timetableChild} />
        <Image
          style={[styles.timetable1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/timetable-1.png")}
        />
        <Text style={[styles.timetable2, styles.dbmsTypo]}>Timetable</Text>
      </View>
      <Pressable
        style={[styles.performance, styles.timetable1ShadowBox]}
        onPress={() => navigation.navigate("AcademicPerformance")}
      >
        <View style={[styles.performanceChild, styles.childShadowBox]} />
        <Image
          style={[styles.result1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/result-1.png")}
        />
        <Text style={[styles.timetable2, styles.dbmsTypo]}>Performance</Text>
      </Pressable>
      <Pressable
        style={[styles.attendance, styles.attendanceLayout]}
        onPress={() => navigation.navigate("AcademicAttendance")}
      >
        <View style={[styles.attendance1, styles.attendanceLayout]}>
          <View style={[styles.attendanceChild, styles.childShadowBox]} />
          <Text style={[styles.timetable2, styles.dbmsTypo]}>Attendance</Text>
        </View>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/599748-11.png")}
        />
      </Pressable>
      <Image
        style={styles.linesIcon}
        resizeMode="cover"
        source={require("../assets/lines.png")}
      />
      <Pressable
        style={styles.srmRemovebgPreview1}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/srmremovebgpreview-12.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  academicPosition: {
    borderTopLeftRadius: Border.br_3xl,
    position: "absolute",
  },
  categoriesTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  timeTableFormatLayout: {
    height: 338,
    width: 295,
    position: "absolute",
  },
  groupChildLayout: {
    width: 180,
    height: 30,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.midnightblue_100,
    borderBottomLeftRadius: Border.br_3xl,
    borderTopLeftRadius: Border.br_3xl,
  },
  amTypo: {
    height: 16,
    width: 58,
    color: Color.midnightblue_100,
    fontSize: FontSize.size_base,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  dbmsTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 60,
    width: 180,
    top: 0,
    position: "absolute",
  },
  dsaTypo: {
    height: 12,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  timetable1ShadowBox: {
    height: 81,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 277,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    top: 14,
    position: "absolute",
  },
  childShadowBox: {
    backgroundColor: Color.lightskyblue_200,
    borderRadius: Border.br_md,
    width: 60,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 60,
    top: 0,
    position: "absolute",
  },
  attendanceLayout: {
    width: 67,
    height: 81,
    position: "absolute",
  },
  academicTimetableChild: {
    top: 214,
    left: 6,
    backgroundColor: Color.white,
    width: 354,
    height: 586,
  },
  timetable: {
    left: 38,
    fontSize: FontSize.size_6xl,
    width: 183,
    height: 31,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    top: 147,
    position: "absolute",
  },
  categories: {
    top: 242,
    left: 37,
    fontSize: FontSize.size_2xl,
  },
  academicTimetableItem: {
    top: 371,
    left: 15,
    backgroundColor: Color.ghostwhite,
    width: 345,
    height: 429,
  },
  upcomingClasses: {
    top: 400,
    left: 77,
    fontSize: FontSize.size_xl,
    width: 165,
    height: 19,
  },
  groupChild: {
    height: 30,
    left: 0,
    top: 0,
  },
  timetableformatInner: {
    top: 105,
    height: 30,
    left: 115,
  },
  timetableformatChild: {
    top: 140,
    height: 30,
    left: 115,
  },
  am: {
    top: 182,
  },
  pm: {
    top: 217,
  },
  am1: {
    top: 112,
  },
  am2: {
    top: 147,
    height: 16,
    width: 58,
    color: Color.midnightblue_100,
  },
  am3: {
    top: 77,
  },
  am4: {
    top: 7,
  },
  pm1: {
    top: 252,
  },
  am5: {
    top: 42,
  },
  pm2: {
    top: 287,
  },
  pm3: {
    top: 322,
  },
  dbms: {
    top: 111,
    left: 191,
    textAlign: "left",
    color: Color.white,
  },
  groupInner: {
    left: 0,
  },
  operatingSystem: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lab: {
    margin: Margin.m_md,
  },
  operatingSystemLabContainer: {
    top: 18,
    left: 26,
    textAlign: "center",
    width: 136,
    height: 30,
    color: Color.white,
  },
  rectangleParent: {
    left: 115,
  },
  artificialIntelligence: {
    left: 151,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    top: 147,
    position: "absolute",
  },
  timetableformatItem: {
    top: 281,
    left: 114,
    height: 30,
  },
  dsa: {
    top: 290,
    left: 196,
    width: 26,
  },
  timetableformat: {
    left: 0,
    top: 0,
  },
  machineLearning: {
    left: 40,
    top: 7,
    textAlign: "left",
    color: Color.white,
  },
  rectangleGroup: {
    top: 209,
    height: 30,
    left: 115,
  },
  computerNetwork: {
    left: 35,
    width: 111,
    top: 7,
  },
  rectangleContainer: {
    top: 245,
    height: 30,
    left: 115,
  },
  timeTableFormat: {
    top: 449,
    left: 66,
  },
  timetableChild: {
    borderRadius: Border.br_md,
    width: 60,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 60,
    backgroundColor: Color.midnightblue_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timetable1Icon: {
    left: 13,
  },
  timetable2: {
    top: 65,
    color: Color.gray_200,
    left: 0,
    textAlign: "left",
  },
  timetable1: {
    left: 42,
    width: 60,
    height: 81,
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
  attendanceChild: {
    left: 4,
  },
  attendance1: {
    left: 0,
    top: 0,
  },
  icon: {
    top: 10,
    left: 14,
    width: 40,
    height: 40,
    position: "absolute",
  },
  attendance: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 277,
    width: 67,
    left: 151,
  },
  linesIcon: {
    top: 514,
    left: 60,
    width: 301,
    height: 248,
    position: "absolute",
  },
  icon1: {
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
  academicTimetable: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AcademicTimetable;
