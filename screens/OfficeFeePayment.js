import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const OfficeFeePayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeFeePayment}>
      <Image
        style={styles.officeFeePaymentChild}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={styles.office}>OFFICE</Text>
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
        <View style={[styles.scholarship, styles.scholarshipPosition]}>
          <View
            style={[
              styles.scholarshipChild,
              styles.scholarshipChildShadowBox,
              styles.scholarshipPosition,
            ]}
          />
        </View>
      </View>
      <Image
        style={styles.fees1Icon}
        resizeMode="cover"
        source={require("../assets/fees-1.png")}
      />
      <Text style={[styles.feePayment, styles.payNowTypo]}>Fee Payment</Text>
      <View
        style={[
          styles.officeFeePaymentItem,
          styles.officeLayout,
          styles.scholarshipChildShadowBox,
        ]}
      />
      <View style={[styles.officeFeePaymentInner, styles.officeChildLayout]} />
      <View style={[styles.rectangleView, styles.officeChildLayout]} />
      <View style={[styles.officeFeePaymentChild1, styles.officeChildLayout]} />
      <View style={[styles.officeFeePaymentChild2, styles.officeChildLayout]} />
      <View style={[styles.officeFeePaymentChild3, styles.officeChildLayout]} />
      <Text style={[styles.tuitionFee, styles.textTypo]}>Tuition Fee</Text>
      <Text style={[styles.text, styles.textTypo]}>2,00,000</Text>
      <Text style={[styles.text1, styles.text1Typo]}>2,38,000</Text>
      <Text style={[styles.text2, styles.cDCTypo]}> 20,000</Text>
      <Text style={[styles.text3, styles.text3Typo]}> 15,000</Text>
      <Text style={[styles.text4, styles.text4Typo]}> 3,000</Text>
      <Text style={[styles.text5, styles.fineTypo]}> 0</Text>
      <Text style={[styles.cDC, styles.cDCTypo]}>C D C</Text>
      <Text style={[styles.bookFee, styles.text3Typo]}>Book Fee</Text>
      <Text style={[styles.examFee, styles.text4Typo]}>Exam Fee</Text>
      <Text style={[styles.fine, styles.fineTypo]}>Fine</Text>
      <Text style={[styles.total, styles.text1Typo]}>Total</Text>
      <View style={styles.lineView} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("OfficeFeePaymentPage")}
      />
      <Text style={[styles.payNow, styles.payNowTypo, styles.payNowClr]}>
        Pay Now
      </Text>
      <Pressable
        style={[
          styles.officeFeePaymentChild4,
          styles.rectanglePressableShadowBox,
          styles.officeLayout,
        ]}
        onPress={() => navigation.navigate("OfficeFeepaymentAllTransactions")}
      />
      <Text
        style={[styles.viewAllTransaction, styles.payNowTypo, styles.payNowClr]}
      >
        View All Transaction
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scholarshipPosition: {
    left: 0,
    top: 0,
    height: 650,
    width: 343,
  },
  scholarshipChildShadowBox: {
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
  payNowTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeLayout: {
    width: 293,
    borderRadius: Border.br_3xs,
    left: 55,
  },
  officeChildLayout: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "#282f94",
    left: 82,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    top: 334,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  text1Typo: {
    top: 646,
    color: Color.black,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  cDCTypo: {
    top: 394,
    color: Color.black,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  text3Typo: {
    top: 454,
    color: Color.black,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  text4Typo: {
    top: 514,
    color: Color.black,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  fineTypo: {
    top: 574,
    color: Color.black,
    fontWeight: "600",
    letterSpacing: 1.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    position: "absolute",
  },
  rectanglePressableShadowBox: {
    backgroundColor: Color.midnightblue_100,
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
  payNowClr: {
    color: Color.white,
    fontSize: FontSize.size_2xl,
  },
  officeFeePaymentChild: {
    top: 110,
    left: 5,
    width: 355,
    height: 704,
    position: "absolute",
  },
  office: {
    top: 29,
    fontSize: FontSize.size_6xl,
    width: 122,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    color: Color.white,
    left: 119,
    position: "absolute",
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
  },
  scholarship: {
    position: "absolute",
  },
  officeMenu: {
    height: 650,
    width: 343,
    top: 150,
    left: 30,
    position: "absolute",
  },
  fees1Icon: {
    left: 57,
    width: 57,
    top: 150,
    height: 57,
    position: "absolute",
  },
  feePayment: {
    top: 170,
    left: 120,
    color: Color.midnightblue_100,
    width: 180,
    height: 26,
  },
  officeFeePaymentItem: {
    top: 315,
    backgroundColor: Color.white,
    height: 428,
  },
  officeFeePaymentInner: {
    top: 331,
  },
  rectangleView: {
    top: 391,
  },
  officeFeePaymentChild1: {
    top: 451,
  },
  officeFeePaymentChild2: {
    top: 511,
  },
  officeFeePaymentChild3: {
    top: 571,
  },
  tuitionFee: {
    left: 121,
  },
  text: {
    left: 245,
  },
  text1: {
    left: 245,
  },
  text2: {
    left: 247,
  },
  text3: {
    left: 245,
  },
  text4: {
    left: 245,
  },
  text5: {
    left: 247,
  },
  cDC: {
    left: 121,
  },
  bookFee: {
    left: 121,
  },
  examFee: {
    left: 121,
  },
  fine: {
    left: 119,
  },
  total: {
    left: 119,
  },
  lineView: {
    top: 618,
    left: 73,
    borderColor: "#000",
    borderTopWidth: 1,
    width: 245,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rectanglePressable: {
    top: 686,
    left: 76,
    borderRadius: Border.br_sm,
    width: 237,
    height: 40,
  },
  payNow: {
    top: 696,
    left: 164,
  },
  officeFeePaymentChild4: {
    top: 220,
    height: 61,
  },
  viewAllTransaction: {
    top: 241,
    left: 109,
    letterSpacing: 1.5,
  },
  officeFeePayment: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeFeePayment;
