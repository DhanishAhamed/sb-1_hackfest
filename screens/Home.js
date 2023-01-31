import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <Text style={styles.search}>SEARCH</Text>
        <Image
          style={[styles.searchIcon2614x4601, styles.rocket21Layout]}
          resizeMode="cover"
          source={require("../assets/searchicon2614x460-1.png")}
        />
      </View>
      <Image
        style={[styles.homeItem, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Pressable
        style={[styles.launcher, styles.launcherLayout]}
        onPress={() => navigation.navigate("Launcher1")}
      >
        <View style={[styles.polygonParent, styles.launcherLayout]}>
          <Image
            style={[styles.groupChild, styles.launcherLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-5.png")}
          />
          <Image
            style={[styles.rocket21, styles.rocket21Layout]}
            resizeMode="cover"
            source={require("../assets/rocket-2-1.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.bulletinBoardIcon}
        resizeMode="cover"
        source={require("../assets/bulletin-board.png")}
      />
      <View style={[styles.slide1, styles.slideLayout]} />
      <View style={[styles.slide2, styles.slideLayout]} />
      <View style={[styles.slide3, styles.slideLayout]} />
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <Pressable
        style={[styles.academic, styles.reportLayout]}
        onPress={() => navigation.navigate("AcademicTimetable")}
      >
        <View
          style={[
            styles.academicChild,
            styles.groupItemLayout,
            styles.academicChildShadowBox,
            styles.itemLayout,
          ]}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/1253358-1.png")}
        />
        <Text
          style={[styles.academic1, styles.office1Text, styles.office1Typo]}
        >
          Academic
        </Text>
      </Pressable>
      <Pressable
        style={[styles.office, styles.officePosition]}
        onPress={() => navigation.navigate("OfficeMenu")}
      >
        <View style={[styles.groupParent, styles.reportLayout]}>
          <View
            style={[
              styles.rectangleWrapper,
              styles.groupItemLayout,
              styles.academicChildShadowBox,
            ]}
          >
            <View
              style={[
                styles.groupItem,
                styles.groupItemLayout,
                styles.itemLayout,
              ]}
            />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/272416-1.png")}
          />
          <Text
            style={[
              styles.icon2Position,
              styles.office1Text,
              styles.office1Typo,
            ]}
          >
            Office
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.library}
        onPress={() => navigation.navigate("Library")}
      >
        <View
          style={[
            styles.academicChild,
            styles.groupItemLayout,
            styles.academicChildShadowBox,
            styles.itemLayout,
          ]}
        />
        <Image
          style={[styles.icon2, styles.icon2Position]}
          resizeMode="cover"
          source={require("../assets/25777-1.png")}
        />
        <Text style={[styles.library1, styles.qr1Typo, styles.office1Text]}>
          Library
        </Text>
      </Pressable>
      <Pressable
        style={[styles.canteen, styles.officePosition]}
        onPress={() => navigation.navigate("Canteen")}
      >
        <View
          style={[
            styles.academicChild,
            styles.groupItemLayout,
            styles.academicChildShadowBox,
            styles.itemLayout,
          ]}
        />
        <Image
          style={[styles.fastFood31, styles.icon2Position]}
          resizeMode="cover"
          source={require("../assets/fastfood-3-1.png")}
        />
        <Text style={styles.canteen1}>Canteen</Text>
      </Pressable>
      <Pressable
        style={[styles.account, styles.qrPosition]}
        onPress={() => navigation.navigate("AccountMenu")}
      >
        <Image
          style={[styles.user1Icon, styles.qrLayout]}
          resizeMode="cover"
          source={require("../assets/user-1.png")}
        />
        <Text style={[styles.account1, styles.textTypo]}>Account</Text>
      </Pressable>
      <Pressable
        style={[styles.qr, styles.qrLayout, styles.qrPosition]}
        onPress={() => navigation.navigate("QR")}
      >
        <Image
          style={[styles.qrCode41, styles.qrLayout]}
          resizeMode="cover"
          source={require("../assets/qrcode-4-1.png")}
        />
        <Text style={[styles.qr1, styles.qr1Typo]}>QR</Text>
      </Pressable>
      <Pressable
        style={[styles.report, styles.reportLayout]}
        onPress={() => navigation.navigate("Grievence")}
      >
        <View
          style={[
            styles.rectangleWrapper,
            styles.groupItemLayout,
            styles.academicChildShadowBox,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.itemLayout,
            ]}
          />
        </View>
        <Text
          style={[styles.academic1, styles.office1Text, styles.office1Typo]}
        >
          Grievance
        </Text>
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/1076740-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.attendanceHome, styles.attendanceHomeLayout]}
        onPress={() => navigation.navigate("AcademicAttendance")}
      >
        <Image
          style={[styles.nbchartsRingsIcon, styles.attendanceHomeLayout]}
          resizeMode="cover"
          source={require("../assets/nbchartsrings.png")}
        />
        <Image
          style={styles.peopleRaiseHandIconThinOu}
          resizeMode="cover"
          source={require("../assets/peopleraisehandiconthinoutlinestylebusinessfinancebuyingauctionstudentansweroutlineiconraisehand193509989-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>87%</Text>
        <Text style={styles.attendance}>ATTENDANCE</Text>
      </Pressable>
      <View style={[styles.homeInner, styles.homeLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View
        style={[styles.homeChild1, styles.lineViewLayout, styles.homeLayout]}
      />
      <Pressable
        style={[styles.achivements, styles.achivementsLayout]}
        onPress={() => navigation.navigate("Achivements")}
      >
        <View
          style={[
            styles.icon2Position,
            styles.groupItemLayout,
            styles.academicChildShadowBox,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.itemLayout,
            ]}
          />
        </View>
        <Image
          style={styles.icon4}
          resizeMode="cover"
          source={require("../assets/1248810-1.png")}
        />
        <Text
          style={[
            styles.achievements,
            styles.achivementsLayout,
            styles.office1Text,
            styles.office1Typo,
          ]}
        >
          Achievements
        </Text>
      </Pressable>
      <Pressable
        style={[styles.timeTableHome, styles.timeLayout]}
        onPress={() => navigation.navigate("AcademicTimetable")}
      >
        <View style={[styles.timeTableHomeChild, styles.timeLayout]} />
        <View style={[styles.timetableHome, styles.icon2Position]}>
          <Text style={styles.upcomingClasses}>UPCOMING CLASSES</Text>
          <Text style={[styles.pm, styles.pmTypo]}>12:20 PM</Text>
          <Text style={[styles.pm1, styles.pmTypo]}>01:10 PM</Text>
          <Text
            style={[styles.artificialIntelligence, styles.operatingSystemsTypo]}
          >
            ARTIFICIAL INTELLIGENCE
          </Text>
          <Text style={[styles.operatingSystems, styles.operatingSystemsTypo]}>
            OPERATING SYSTEMS
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 46,
    width: 253,
    position: "absolute",
  },
  rocket21Layout: {
    width: 50,
    position: "absolute",
  },
  itemLayout: {
    borderRadius: Border.br_md,
    position: "absolute",
  },
  launcherLayout: {
    height: 130,
    width: 130,
    position: "absolute",
  },
  slideLayout: {
    height: 3,
    borderRadius: Border.br_4xl,
    top: 284,
    position: "absolute",
  },
  reportLayout: {
    height: 80,
    width: 60,
    position: "absolute",
  },
  groupItemLayout: {
    height: 60,
    width: 60,
    top: 0,
  },
  academicChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 60,
  },
  office1Text: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.midnightblue_100,
    top: 64,
  },
  office1Typo: {
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.midnightblue_100,
    top: 64,
    textAlign: "left",
  },
  officePosition: {
    left: 150,
    height: 80,
    width: 60,
    position: "absolute",
  },
  icon2Position: {
    left: 14,
    position: "absolute",
  },
  qr1Typo: {
    left: 11,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  qrPosition: {
    top: 725,
    height: 57,
  },
  qrLayout: {
    width: 40,
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  attendanceHomeLayout: {
    height: 102,
    width: 102,
    position: "absolute",
  },
  homeLayout: {
    display: "none",
    width: 207,
    borderColor: "#000",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  achivementsLayout: {
    width: 89,
    position: "absolute",
  },
  timeLayout: {
    height: 115,
    position: "absolute",
  },
  pmTypo: {
    width: 43,
    height: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    textAlign: "left",
    color: Color.gray_200,
    left: 0,
    position: "absolute",
  },
  operatingSystemsTypo: {
    height: 17,
    width: 138,
    left: 60,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  homeChild: {
    top: 300,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    backgroundColor: Color.white,
    width: 355,
    height: 500,
    position: "absolute",
  },
  searchBarChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gainsboro_200,
    left: 0,
    top: 0,
  },
  search: {
    left: 93,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.inter,
    width: 67,
    height: 25,
    opacity: 0.5,
    textAlign: "left",
    color: Color.gray_200,
    top: 11,
    position: "absolute",
  },
  searchIcon2614x4601: {
    height: 26,
    top: 10,
    opacity: 0.5,
    left: 0,
  },
  searchBar: {
    top: 34,
    left: 87,
  },
  homeItem: {
    top: 711,
    width: 328,
    height: 83,
    left: 16,
  },
  groupChild: {
    left: 10,
    borderRadius: Border.br_xl,
    top: 10,
  },
  rocket21: {
    top: 36,
    height: 50,
    left: 38,
  },
  polygonParent: {
    left: 0,
    top: 0,
  },
  launcher: {
    top: 649,
    left: 117,
  },
  bulletinBoardIcon: {
    top: 98,
    left: 17,
    borderRadius: Border.br_2xl,
    width: 330,
    height: 174,
    position: "absolute",
  },
  slide1: {
    left: 129,
    width: 60,
    backgroundColor: Color.lightskyblue_200,
  },
  slide2: {
    left: 205,
    width: 15,
    backgroundColor: Color.gainsboro_200,
  },
  slide3: {
    left: 236,
    width: 7,
    backgroundColor: Color.gainsboro_200,
  },
  logoIcon: {
    top: 29,
    height: 57,
    width: 56,
    left: 13,
    position: "absolute",
  },
  academicChild: {
    backgroundColor: Color.lightskyblue_200,
    left: 0,
  },
  icon: {
    width: 34,
    opacity: 0.7,
    height: 40,
    left: 13,
    top: 11,
    position: "absolute",
  },
  academic1: {
    left: 1,
    position: "absolute",
  },
  academic: {
    top: 465,
    left: 38,
  },
  groupItem: {
    backgroundColor: Color.lightskyblue_200,
    left: 0,
  },
  rectangleWrapper: {
    left: 0,
    position: "absolute",
  },
  icon1: {
    top: 6,
    left: 9,
    width: 42,
    height: 43,
    opacity: 0.7,
    position: "absolute",
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  office: {
    top: 465,
  },
  icon2: {
    width: 35,
    height: 35,
    opacity: 0.7,
    top: 11,
  },
  library1: {
    width: 44,
    height: 12,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.midnightblue_100,
    top: 64,
    left: 11,
  },
  library: {
    left: 261,
    height: 76,
    top: 465,
    width: 60,
    position: "absolute",
  },
  fastFood31: {
    width: 32,
    height: 32,
    top: 11,
  },
  canteen1: {
    left: 6,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.midnightblue_100,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 64,
    textAlign: "left",
    position: "absolute",
  },
  canteen: {
    top: 568,
  },
  user1Icon: {
    left: 3,
    height: 40,
    top: 0,
  },
  account1: {
    top: 41,
    left: 0,
  },
  account: {
    left: 263,
    width: 48,
    position: "absolute",
  },
  qrCode41: {
    height: 40,
    left: 0,
    top: 0,
  },
  qr1: {
    top: 41,
    left: 11,
    color: Color.gray_200,
  },
  qr: {
    left: 54,
  },
  icon3: {
    top: 15,
    width: 27,
    height: 28,
    left: 16,
    position: "absolute",
  },
  report: {
    left: 266,
    top: 568,
  },
  nbchartsRingsIcon: {
    left: 0,
    top: 0,
  },
  peopleRaiseHandIconThinOu: {
    left: 15,
    width: 71,
    height: 45,
    top: 10,
    position: "absolute",
  },
  text: {
    top: 70,
    left: 42,
    height: 32,
    width: 56,
    color: Color.black,
  },
  attendance: {
    left: 18,
    width: 80,
    height: 16,
    fontSize: FontSize.size_xs,
    top: 56,
    color: Color.black,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  attendanceHome: {
    top: 328,
    left: 19,
  },
  homeInner: {
    top: 319,
    borderRadius: Border.br_2xs,
    borderWidth: 1,
    height: 117,
    borderStyle: "solid",
    display: "none",
    width: 207,
    borderColor: "#000",
    left: 133,
    position: "absolute",
  },
  lineView: {
    top: 350,
    borderColor: "#fff",
    width: 208,
    left: 133,
    height: 1,
    borderTopWidth: 1,
  },
  homeChild1: {
    top: 392,
    left: 134,
  },
  icon4: {
    left: 26,
    width: 36,
    height: 38,
    top: 11,
    position: "absolute",
  },
  achievements: {
    height: 14,
    left: 0,
  },
  achivements: {
    left: 27,
    height: 78,
    top: 568,
  },
  timeTableHomeChild: {
    borderRadius: Border.br_3xs,
    width: 210,
    backgroundColor: Color.gainsboro_200,
    left: 0,
    top: 0,
  },
  upcomingClasses: {
    width: 123,
    height: 19,
    fontSize: FontSize.size_xs,
    left: 6,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    textAlign: "left",
    color: Color.gray_200,
    top: 0,
    position: "absolute",
  },
  pm: {
    top: 35,
  },
  pm1: {
    top: 56,
  },
  artificialIntelligence: {
    top: 35,
  },
  operatingSystems: {
    top: 56,
  },
  timetableHome: {
    top: 13,
    width: 198,
    height: 73,
  },
  timeTableHome: {
    top: 315,
    left: 130,
    width: 212,
  },
  home: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home;
