import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Token = () => {
  return (
    <View style={styles.token}>
      <View style={[styles.tokenChild, styles.tokenPosition]} />
      <View style={[styles.tokenItem, styles.tokenPosition]} />
      <Text style={[styles.canteen, styles.canteenTypo, styles.textTypo1]}>
        CANTEEN
      </Text>
      <View style={styles.tokenInner} />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1167091-1.png")}
      />
      <Text style={[styles.tokenNo, styles.textTypo]}>Token no:</Text>
      <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>053</Text>
      <Text style={[styles.nameZainAhmedContainer, styles.textTypo]}>
        <Text style={styles.name}>Name :Zain ahmed</Text>
        <Text style={styles.name}>ordered at : 10:00AM</Text>
        <Text style={styles.name}>Pickup Time: 11:45 AM</Text>
        <Text style={styles.name}>Your order:</Text>
        <Text style={styles.name}>{`       `}</Text>
        <Text style={styles.name}>Chicken biriyani X `1 == 100</Text>
        <Text style={styles.name}>Tandoori X 1 == 60</Text>
      </Text>
      <Text style={[styles.text2, styles.text2Typo]}>160</Text>
      <View style={styles.lineView} />
      <Text style={[styles.totalPosition, styles.text2Typo]}>Total</Text>
      <View style={[styles.rectangleView, styles.totalPosition]} />
      <Text style={[styles.saveToGallery, styles.canteenTypo]}>
        SAVE TO GALLERY
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tokenPosition: {
    height: 690,
    width: 355,
    borderTopLeftRadius: Border.br_3xl,
    left: 5,
    top: 110,
    position: "absolute",
  },
  canteenTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  text2Typo: {
    top: 576,
    color: Color.black,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
  },
  totalPosition: {
    left: 85,
    position: "absolute",
  },
  tokenChild: {
    backgroundColor: Color.white,
  },
  tokenItem: {
    backgroundColor: Color.lightgray_200,
  },
  canteen: {
    top: 33,
    left: 101,
    width: 237,
    height: 50,
    fontWeight: "700",
  },
  tokenInner: {
    top: 148,
    left: 41,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gainsboro_200,
    width: 283,
    height: 562,
    position: "absolute",
  },
  icon: {
    top: 186,
    left: 105,
    width: 150,
    height: 151,
    position: "absolute",
  },
  tokenNo: {
    top: 345,
    left: 151,
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
  },
  text: {
    top: 365,
    left: 152,
    fontWeight: "700",
  },
  name: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nameZainAhmedContainer: {
    top: 414,
    left: 71,
    whiteSpace: "pre-wrap",
    width: 202,
    height: 126,
    fontSize: FontSize.size_2xl,
  },
  text2: {
    left: 232,
    position: "absolute",
  },
  lineView: {
    top: 563,
    left: 66,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 233,
    height: 1,
    position: "absolute",
  },
  rectangleView: {
    top: 627,
    borderRadius: Border.br_2xl,
    width: 184,
    height: 40,
    backgroundColor: Color.gray_200,
  },
  saveToGallery: {
    top: 637,
    left: 108,
    fontWeight: "800",
    fontSize: FontSize.size_2xl,
  },
  token: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.gray_200,
  },
});

export default Token;
