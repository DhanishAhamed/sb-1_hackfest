import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Grievence = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.grievence}>
      <View style={styles.grievenceChild} />
      <Text style={styles.grievence1}>GRIEVENCE</Text>
      <View style={[styles.grievenceItem, styles.grievenceLayout]} />
      <View style={[styles.grievenceInner, styles.grievenceLayout]} />
      <View style={[styles.rectangleView, styles.grievenceLayout]} />
      <View style={styles.grievenceChild1} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Done")}
      />
      <Text style={[styles.feedbackType, styles.feedbackTypeTypo]}>
        FEEDBACK TYPE :
      </Text>
      <Text style={[styles.feedbackCategory, styles.subjectTypo]}>
        FEEDBACK CATEGORY :
      </Text>
      <Text style={[styles.subject, styles.subjectTypo]}>SUBJECT :</Text>
      <Text style={[styles.complaintsuggestionquery, styles.feedbackTypeTypo]}>
        COMPLAINT/SUGGESTION/QUERY :
      </Text>
      <Text style={[styles.maximum300Words, styles.submitTypo]}>
        MAXIMUM 300 WORDS
      </Text>
      <Text style={[styles.v, styles.vTypo]}>v</Text>
      <Text style={[styles.v1, styles.vTypo]}>v</Text>
      <Text style={[styles.v2, styles.vTypo]}>v</Text>
      <Text style={[styles.submit, styles.submitTypo]}>
        <Text style={styles.submit1}>SUBMIT</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1243985-1.png")}
      />
      <Pressable
        style={styles.logo}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  grievenceLayout: {
    height: 18,
    width: 184,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: 156,
    backgroundColor: Color.white,
    position: "absolute",
  },
  feedbackTypeTypo: {
    fontSize: FontSize.size_sm,
    left: 22,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  subjectTypo: {
    height: 27,
    color: Color.black,
    fontSize: FontSize.size_sm,
    left: 22,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  submitTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  vTypo: {
    height: 30,
    width: 35,
    left: 325,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  grievenceChild: {
    top: 110,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    width: 355,
    height: 690,
    backgroundColor: Color.white,
    position: "absolute",
  },
  grievence1: {
    top: 40,
    left: 95,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    width: 271,
    height: 44,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  grievenceItem: {
    top: 192,
  },
  grievenceInner: {
    top: 245,
  },
  rectangleView: {
    top: 309,
  },
  grievenceChild1: {
    top: 397,
    left: 27,
    width: 313,
    height: 333,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
  },
  rectanglePressable: {
    top: 755,
    left: 143,
    borderRadius: Border.br_3xs,
    backgroundColor: "rgba(40, 47, 148, 0.53)",
    width: 74,
    height: 24,
    position: "absolute",
  },
  feedbackType: {
    top: 193,
    width: 177,
    height: 28,
    color: Color.black,
  },
  feedbackCategory: {
    top: 246,
    width: 176,
  },
  subject: {
    width: 106,
    top: 309,
  },
  complaintsuggestionquery: {
    top: 361,
    width: 374,
    height: 36,
    color: Color.black,
  },
  maximum300Words: {
    top: 549,
    left: 110,
    color: Color.gray_300,
    width: 303,
    height: 32,
  },
  v: {
    top: 190,
  },
  v1: {
    top: 244,
  },
  v2: {
    top: 309,
  },
  submit1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  submit: {
    top: 759,
    width: 86,
    height: 25,
    color: Color.black,
    left: 156,
    fontSize: FontSize.size_xl,
  },
  ellipseIcon: {
    top: 677,
    left: 46,
    width: 29,
    height: 26,
    position: "absolute",
  },
  icon: {
    top: 681,
    left: 50,
    width: 20,
    height: 19,
    position: "absolute",
  },
  icon1: {
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
  grievence: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Grievence;
