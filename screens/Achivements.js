import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Achivements = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.achivements}>
      <View style={styles.achivementsChild} />
      <Text style={[styles.achievements, styles.textClr]}>ACHIEVEMENTS</Text>
      <View style={styles.searchBar}>
        <View style={styles.searchBarChild} />
        <Text style={[styles.search, styles.searchPosition]}>SEARCH</Text>
        <Image
          style={[styles.searchIcon2614x4601, styles.searchPosition]}
          resizeMode="cover"
          source={require("../assets/searchicon2614x460-1.png")}
        />
      </View>
      <View style={[styles.achivementsItem, styles.achivementsShadowBox]} />
      <View style={[styles.achivementsInner, styles.achivementsShadowBox]} />
      <View
        style={[
          styles.rectangleView,
          styles.icon2Position,
          styles.achivementsShadowBox,
        ]}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1248343-1.png")}
      />
      <Text style={[styles.footballCertificatePdf, styles.certificateTypo]}>
        FOOTBALL CERTIFICATE .PDF
      </Text>
      <View style={[styles.view, styles.viewLayout, styles.viewPosition]}>
        <View style={[styles.viewChild, styles.viewLayout]} />
        <Text style={styles.view1}>VIEW</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout, styles.viewPosition]}>
        <View style={[styles.viewChild, styles.viewLayout]} />
        <Text style={styles.view1}>VIEW</Text>
      </View>
      <View style={[styles.view4, styles.viewLayout, styles.viewPosition]}>
        <View style={[styles.viewChild, styles.viewLayout]} />
        <Text style={styles.view1}>VIEW</Text>
      </View>
      <Image
        style={[
          styles.sportsAchievementCertificateIcon,
          styles.certificateIconLayout,
          styles.certificateIconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/sportsachievementcertificatetemplateformsword-2.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1241998-1.png")}
      />
      <Image
        style={[
          styles.certificateDiplomaTemplateWIcon,
          styles.certificateIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/120026463certificatediplomatemplatewithcolorfulpatternbackgroundartpaintdropsspotsvectorrainbowb-1-1.png")}
      />
      <Text style={[styles.singingCertificatePdf, styles.certificateTypo]}>
        {" "}
        SINGING CERTIFICATE .PDF
      </Text>
      <Image
        style={[styles.icon2, styles.icon2Position]}
        resizeMode="cover"
        source={require("../assets/1250481-1.png")}
      />
      <Image
        style={[
          styles.hackathonCertificateWinner1Icon,
          styles.certificateIconLayout,
          styles.certificateIconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/-16-hackathon-certificate-winner-1.png")}
      />
      <Text style={[styles.hackathonCertificatePdf, styles.certificateTypo]}>
        HACKATHON CERTIFICATE .PDF
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text, styles.textClr]}>+</Text>
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
  textClr: {
    color: Color.white,
    fontWeight: "700",
    position: "absolute",
  },
  searchPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  achivementsShadowBox: {
    width: 299,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.lightgray_100,
    left: 33,
    height: 156,
    borderRadius: Border.br_md,
  },
  icon2Position: {
    top: 580,
    position: "absolute",
  },
  iconLayout: {
    width: 161,
    position: "absolute",
  },
  certificateTypo: {
    opacity: 0.7,
    color: Color.black,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inter,
    left: 56,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  viewLayout: {
    height: 23,
    width: 49,
    position: "absolute",
  },
  viewPosition: {
    left: 260,
    width: 49,
  },
  certificateIconLayout: {
    height: 84,
    width: 105,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  certificateIconLayout1: {
    left: 48,
    width: 105,
    borderRadius: Border.br_3xs,
  },
  achivementsChild: {
    top: 110,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    backgroundColor: Color.white,
    width: 355,
    height: 690,
    position: "absolute",
  },
  achievements: {
    top: 40,
    left: 94,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.redHatDisplay,
    width: 266,
    height: 48,
    textAlign: "left",
  },
  searchBarChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gainsboro_200,
    left: 0,
    top: 0,
    height: 46,
    width: 253,
    position: "absolute",
  },
  search: {
    top: 11,
    left: 93,
    fontSize: FontSize.size_2xl,
    color: Color.gray_200,
    width: 67,
    height: 25,
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  searchIcon2614x4601: {
    top: 10,
    width: 50,
    height: 26,
    left: 0,
  },
  searchBar: {
    top: 120,
    height: 46,
    width: 253,
    left: 56,
    position: "absolute",
  },
  achivementsItem: {
    height: 156,
    top: 207,
    position: "absolute",
  },
  achivementsInner: {
    top: 381,
    height: 156,
    position: "absolute",
  },
  rectangleView: {
    height: 156,
  },
  icon: {
    left: 155,
    height: 156,
    top: 207,
  },
  footballCertificatePdf: {
    top: 335,
    width: 234,
    height: 43,
  },
  viewChild: {
    backgroundColor: Color.steelblue,
    width: 49,
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
  },
  view1: {
    top: 5,
    left: 7,
    width: 35,
    height: 7,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    color: Color.white,
    fontWeight: "700",
    position: "absolute",
  },
  view: {
    top: 323,
  },
  view2: {
    top: 692,
  },
  view4: {
    top: 495,
  },
  sportsAchievementCertificateIcon: {
    top: 231,
  },
  icon1: {
    top: 383,
    left: 163,
    height: 151,
  },
  certificateDiplomaTemplateWIcon: {
    top: 406,
    left: 47,
  },
  singingCertificatePdf: {
    top: 504,
    width: 241,
    height: 28,
  },
  icon2: {
    left: 173,
    width: 151,
    height: 161,
  },
  hackathonCertificateWinner1Icon: {
    top: 602,
  },
  hackathonCertificatePdf: {
    top: 700,
    width: 238,
    height: 29,
  },
  ellipseIcon: {
    top: 724,
    left: 274,
    width: 63,
    height: 65,
    opacity: 0.8,
    position: "absolute",
  },
  text: {
    top: 729,
    left: 291,
    fontSize: FontSize.size_8xl,
    textAlign: "right",
    width: 28,
    height: 17,
    fontFamily: FontFamily.inter,
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
  achivements: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Achivements;
