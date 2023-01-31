import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const CanteenBill = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.canteenBill}>
      <View style={[styles.canteenBillChild, styles.canteenPosition]} />
      <View style={[styles.canteenBillItem, styles.canteenPosition]} />
      <Text style={[styles.canteen, styles.payNowTypo]}>CANTEEN</Text>
      <Image
        style={[styles.indianChickenBiryaniServedIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/indianchickenbiryaniservedterracottabowlwithyogurtwhitebackgroundselectivefocus-46668972554-1.png")}
      />
      <Text style={[styles.chickenBiriyani100Container, styles.tandoori60Typo]}>
        <Text style={styles.chickenBiriyani}>{`CHICKEN BIRIYANI  `}</Text>
        <Text style={styles.text}>{`₹100   `}</Text>
      </Text>
      <Text style={[styles.chickenBiriyani100Container1, styles.total160Typo]}>
        <Text
          style={styles.chickenBiriyani}
        >{`CHICKEN BIRIYANI                                                    ₹100 `}</Text>
        <Text style={styles.chickenBiriyani}> </Text>
        <Text
          style={styles.text}
        >{`TANDOORI                                                                     ₹60   `}</Text>
      </Text>
      <Image
        style={[styles.pxIndiaVegetariels1Icon, styles.indiaIconLayout]}
        resizeMode="cover"
        source={require("../assets/1280pxindia-vegetariels-1.png")}
      />
      <Image
        style={[styles.f361024401Whhocndepi0llqz1lvIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1000-f-361024401-whhocndepi0llqz1lvbyy0dvzuno3avp-1.png")}
      />
      <View style={styles.canteenBillInner} />
      <Text style={[styles.tandoori60, styles.tandoori60Typo]}>
        <Text style={styles.chickenBiriyani}>TANDOORI</Text>
        <Text style={styles.text}>₹60</Text>
      </Text>
      <Image
        style={[styles.pxIndiaVegetariels2Icon, styles.indiaIconLayout]}
        resizeMode="cover"
        source={require("../assets/1280pxindia-vegetariels-1.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.canteenBillChild1, styles.lineViewLayout]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Canteenpayment")}
      />
      <Text style={[styles.payNow, styles.payNowTypo]}>Pay Now</Text>
      <Text style={[styles.total160, styles.total160Typo]}>TOTAL ₹160</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  canteenPosition: {
    height: 690,
    width: 355,
    borderTopLeftRadius: Border.br_3xl,
    left: 5,
    top: 110,
    position: "absolute",
  },
  payNowTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 70,
    width: 70,
    borderRadius: Border.br_3xs,
    left: 50,
    position: "absolute",
  },
  tandoori60Typo: {
    height: 34,
    color: Color.black,
    left: 143,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  total160Typo: {
    fontWeight: "600",
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  indiaIconLayout: {
    height: 20,
    width: 20,
    left: 143,
    position: "absolute",
  },
  lineViewLayout: {
    width: 356,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    left: 5,
    position: "absolute",
  },
  canteenBillChild: {
    backgroundColor: Color.white,
  },
  canteenBillItem: {
    backgroundColor: Color.lightgray_200,
  },
  canteen: {
    top: 33,
    left: 101,
    fontSize: FontSize.size_6xl,
    width: 237,
    height: 50,
  },
  indianChickenBiryaniServedIcon: {
    top: 168,
  },
  chickenBiriyani: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    margin: Margin.m_md,
  },
  chickenBiriyani100Container: {
    top: 204,
    width: 181,
    whiteSpace: "pre-wrap",
    fontSize: FontSize.size_base,
    color: Color.black,
    left: 143,
  },
  chickenBiriyani100Container1: {
    top: 431,
    left: 60,
    whiteSpace: "pre-wrap",
  },
  pxIndiaVegetariels1Icon: {
    top: 179,
  },
  f361024401Whhocndepi0llqz1lvIcon: {
    top: 307,
  },
  canteenBillInner: {
    top: 280,
    left: 59,
    width: 272,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    position: "absolute",
  },
  tandoori60: {
    top: 338,
    fontSize: FontSize.size_lg,
    width: 117,
    color: Color.black,
    left: 143,
  },
  pxIndiaVegetariels2Icon: {
    top: 313,
  },
  lineView: {
    top: 409,
  },
  canteenBillChild1: {
    top: 496,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
  },
  rectanglePressable: {
    top: 615,
    left: 64,
    borderRadius: Border.br_2xl,
    width: 240,
    height: 60,
    position: "absolute",
    backgroundColor: Color.gray_200,
  },
  payNow: {
    top: 627,
    left: 132,
    fontSize: FontSize.size_5xl,
    width: 165,
    height: 44,
  },
  total160: {
    top: 517,
    left: 217,
  },
  canteenBill: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.gray_200,
  },
});

export default CanteenBill;
