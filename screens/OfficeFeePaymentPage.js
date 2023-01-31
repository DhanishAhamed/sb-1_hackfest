import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const OfficeFeePaymentPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeFeePaymentPage}>
      <View style={styles.officeFeePaymentPageChild} />
      <View
        style={[
          styles.officeFeePaymentPageItem,
          styles.lineIconPosition,
          styles.officeShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeFeePaymentPageInner,
          styles.rectangleViewShadowBox,
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View
        style={[styles.officeFeePaymentPageChild1, styles.officeShadowBox]}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-37.png")}
      />
      <View style={[styles.lineView, styles.officeChildLayout2]} />
      <View
        style={[styles.officeFeePaymentPageChild2, styles.officeChildLayout2]}
      />
      <View
        style={[styles.officeFeePaymentPageChild3, styles.officeChildLayout2]}
      />
      <View
        style={[styles.officeFeePaymentPageChild4, styles.officeChildLayout2]}
      />
      <View
        style={[styles.officeFeePaymentPageChild5, styles.officeChildLayout2]}
      />
      <View
        style={[styles.officeFeePaymentPageChild6, styles.officeChildLayout2]}
      />
      <Text style={[styles.upi, styles.upiTypo, styles.upiTypo1]}>UPI</Text>
      <Text
        style={[styles.creditDebit, styles.textTypo1, styles.upiTypo1]}
      >{`CREDIT & DEBIT CARDS`}</Text>
      <Text
        style={[
          styles.morePaymentOptionsContainer,
          styles.upiTypo,
          styles.upiTypo1,
        ]}
      >
        <Text style={styles.morePaymentOptions}>MORE PAYMENT OPTIONS</Text>
      </Text>
      <View
        style={[styles.officeFeePaymentPageChild7, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild8, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild9, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild10, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild11, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild12, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild13, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild14, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild15, styles.officeChildLayout1]}
      />
      <View
        style={[styles.officeFeePaymentPageChild16, styles.officeChildLayout1]}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/196578-1.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/196578-1.png")}
      />
      <Image
        style={styles.mastercardEarly1990sLogo1Icon}
        resizeMode="cover"
        source={require("../assets/mastercard-early-1990s-logo-1.png")}
      />
      <Image
        style={[styles.googlePayLogo1Icon, styles.googleIconLayout]}
        resizeMode="cover"
        source={require("../assets/googlepaylogo-1.png")}
      />
      <Image
        style={[styles.googlePayLogo2Icon, styles.googleIconLayout]}
        resizeMode="cover"
        source={require("../assets/googlepaylogo-1.png")}
      />
      <Image
        style={styles.pxPaytmLogoStandalone1Icon}
        resizeMode="cover"
        source={require("../assets/2560pxpaytm-logo-standalone-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.text1, styles.textTypo]}>+</Text>
      <Image
        style={[styles.wallet1Icon, styles.wallet1IconLayout]}
        resizeMode="cover"
        source={require("../assets/wallet-1.png")}
      />
      <Image
        style={[styles.cash1Icon, styles.cash1IconLayout]}
        resizeMode="cover"
        source={require("../assets/cash-1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.officeFeePaymentPageChild17, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.officeFeePaymentPageChild18, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.officeFeePaymentPageChild19, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.officeFeePaymentPageChild20, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.officeFeePaymentPageChild21, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.officeFeePaymentPageChild22, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.officeFeePaymentPageChild23, styles.officeChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Text style={[styles.gpay, styles.gpayTypo]}>6485278456329@gpay</Text>
      <Text style={[styles.paytm, styles.paytmTypo]}>4825574815958@paytm</Text>
      <Text style={[styles.paytm1, styles.paytmTypo]}>7459154865787@paytm</Text>
      <Text style={[styles.addNewUpi, styles.gpayTypo]}>Add New UPI ID</Text>
      <Text style={[styles.zain, styles.gpayTypo]}>
        <Text style={styles.morePaymentOptions}>ZAIN</Text>
      </Text>
      <Text style={[styles.text2, styles.textClr, styles.textTypo1]}>
        {" "}
        . . . . . . . . . . . 5367
      </Text>
      <Text style={[styles.text3, styles.textClr, styles.textTypo1]}>
        {" "}
        . . . . . . . . . . . 3716
      </Text>
      <Text style={[styles.text4, styles.textClr, styles.textTypo1]}>
        {" "}
        . . . . . . . . . . . 8462
      </Text>
      <Text style={[styles.lokesh, styles.text6Typo]}>LOKESH</Text>
      <Text
        style={[styles.christina, styles.cash1IconLayout, styles.textTypo1]}
      >
        CHRISTINA
      </Text>
      <Text style={[styles.addNewCard, styles.walletsTypo]}>Add New Card</Text>
      <Text style={[styles.wallets, styles.walletsTypo]}>WALLETS</Text>
      <Text
        style={[
          styles.paytmPhonepay,
          styles.textClr,
          styles.wallet1IconLayout,
          styles.textTypo1,
        ]}
      >{`(Paytm , Phonepay , Amazon Pay & more)`}</Text>
      <Text style={[styles.payOnDelivery, styles.upiTypo]}>
        PAY ON DELIVERY
      </Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.text5, styles.totalTypo]}>2,38,000</Text>
      <Text style={[styles.items, styles.textClr]}>{`2 Items `}</Text>
      <Text style={[styles.text6, styles.text6Typo, styles.textClr]}>.</Text>
      <Text style={[styles.office, styles.textTypo1]}>OFFICE</Text>
      <Pressable
        style={styles.logo}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    width: 323,
    left: 19,
    position: "absolute",
  },
  officeShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  rectangleViewShadowBox: {
    height: 182,
    width: 323,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 19,
    position: "absolute",
  },
  officeChildLayout2: {
    height: 1,
    width: 325,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderStyle: "solid",
    position: "absolute",
  },
  upiTypo: {
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  upiTypo1: {
    fontSize: FontSize.size_2xl,
    left: 21,
    color: Color.black,
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  officeChildLayout1: {
    height: 24,
    width: 32,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_4xs,
    left: 36,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
  },
  iconLayout: {
    width: 30,
    height: 20,
    position: "absolute",
  },
  googleIconLayout: {
    width: 19,
    left: 43,
    height: 20,
    position: "absolute",
  },
  textTypo: {
    height: 16,
    width: 10,
    left: 47,
    color: Color.midnightblue_100,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  wallet1IconLayout: {
    height: 11,
    position: "absolute",
  },
  cash1IconLayout: {
    height: 12,
    position: "absolute",
  },
  officeChildLayout: {
    width: 8,
    left: 321,
    height: 8,
    position: "absolute",
  },
  gpayTypo: {
    left: 83,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  paytmTypo: {
    width: 143,
    fontSize: FontSize.size_xs,
    left: 83,
    height: 14,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  textClr: {
    color: Color.gray_600,
    fontSize: FontSize.size_3xs,
  },
  text6Typo: {
    height: 13,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  walletsTypo: {
    width: 101,
    left: 81,
    fontSize: FontSize.size_xs,
    color: Color.midnightblue_100,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  totalTypo: {
    height: 22,
    fontSize: FontSize.size_base,
    color: Color.midnightblue_100,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officeFeePaymentPageChild: {
    top: 110,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    backgroundColor: Color.gray_500,
    width: 355,
    height: 690,
    position: "absolute",
  },
  officeFeePaymentPageItem: {
    top: 136,
    height: 44,
  },
  officeFeePaymentPageInner: {
    top: 230,
  },
  rectangleView: {
    top: 462,
  },
  officeFeePaymentPageChild1: {
    top: 696,
    width: 322,
    height: 86,
    left: 19,
    position: "absolute",
  },
  lineIcon: {
    top: 273,
    height: 2,
  },
  lineView: {
    top: 321,
    left: 19,
  },
  officeFeePaymentPageChild2: {
    top: 368,
    left: 19,
  },
  officeFeePaymentPageChild3: {
    top: 508,
    left: 19,
  },
  officeFeePaymentPageChild4: {
    top: 553,
    left: 19,
  },
  officeFeePaymentPageChild5: {
    top: 599,
    left: 18,
  },
  officeFeePaymentPageChild6: {
    top: 739,
    left: 17,
  },
  upi: {
    top: 195,
    width: 31,
    color: Color.black,
  },
  creditDebit: {
    top: 424,
    width: 180,
    height: 28,
    color: Color.black,
    position: "absolute",
  },
  morePaymentOptions: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  morePaymentOptionsContainer: {
    top: 660,
    width: 205,
    color: Color.black,
  },
  officeFeePaymentPageChild7: {
    top: 240,
  },
  officeFeePaymentPageChild8: {
    top: 286,
  },
  officeFeePaymentPageChild9: {
    top: 332,
  },
  officeFeePaymentPageChild10: {
    top: 379,
  },
  officeFeePaymentPageChild11: {
    top: 472,
  },
  officeFeePaymentPageChild12: {
    top: 518,
  },
  officeFeePaymentPageChild13: {
    top: 563,
  },
  officeFeePaymentPageChild14: {
    top: 610,
  },
  officeFeePaymentPageChild15: {
    top: 706,
  },
  officeFeePaymentPageChild16: {
    top: 748,
  },
  icon: {
    top: 474,
    left: 36,
  },
  icon1: {
    left: 37,
    top: 520,
  },
  mastercardEarly1990sLogo1Icon: {
    top: 568,
    left: 40,
    width: 24,
    height: 14,
    position: "absolute",
  },
  googlePayLogo1Icon: {
    top: 242,
  },
  googlePayLogo2Icon: {
    top: 334,
  },
  pxPaytmLogoStandalone1Icon: {
    width: 26,
    height: 8,
    left: 39,
    top: 294,
    position: "absolute",
  },
  text: {
    top: 382,
  },
  text1: {
    top: 613,
  },
  wallet1Icon: {
    top: 711,
    left: 46,
    width: 11,
  },
  cash1Icon: {
    left: 45,
    width: 15,
    top: 754,
  },
  ellipseIcon: {
    top: 248,
  },
  officeFeePaymentPageChild17: {
    top: 341,
  },
  officeFeePaymentPageChild18: {
    top: 294,
    width: 8,
    left: 321,
  },
  officeFeePaymentPageChild19: {
    top: 480,
  },
  officeFeePaymentPageChild20: {
    top: 526,
  },
  officeFeePaymentPageChild21: {
    top: 572,
  },
  officeFeePaymentPageChild22: {
    top: 713,
  },
  officeFeePaymentPageChild23: {
    top: 756,
  },
  gpay: {
    top: 338,
    width: 126,
    fontSize: FontSize.size_xs,
    height: 14,
    color: Color.black,
  },
  paytm: {
    top: 291,
  },
  paytm1: {
    top: 245,
  },
  addNewUpi: {
    top: 384,
    width: 117,
    fontSize: FontSize.size_xs,
    color: Color.midnightblue_100,
    height: 14,
  },
  zain: {
    top: 473,
    width: 144,
    height: 15,
    fontSize: FontSize.size_xs,
    color: Color.midnightblue_100,
  },
  text2: {
    top: 487,
    left: 81,
    position: "absolute",
  },
  text3: {
    top: 578,
    left: 81,
    position: "absolute",
  },
  text4: {
    top: 533,
    left: 81,
    position: "absolute",
  },
  lokesh: {
    width: 70,
    left: 81,
    fontSize: FontSize.size_xs,
    color: Color.midnightblue_100,
    top: 520,
  },
  christina: {
    width: 76,
    left: 81,
    fontSize: FontSize.size_xs,
    color: Color.midnightblue_100,
    top: 563,
  },
  addNewCard: {
    height: 17,
    top: 613,
  },
  wallets: {
    top: 707,
    height: 21,
  },
  paytmPhonepay: {
    top: 721,
    width: 192,
    left: 81,
  },
  payOnDelivery: {
    width: 114,
    left: 81,
    fontSize: FontSize.size_xs,
    top: 754,
    color: Color.midnightblue_100,
  },
  total: {
    top: 145,
    width: 45,
    left: 36,
  },
  text5: {
    top: 149,
    left: 277,
    width: 69,
  },
  items: {
    top: 164,
    width: 133,
    height: 9,
    left: 39,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  text6: {
    top: 162,
    left: 65,
    width: 17,
  },
  office: {
    top: 29,
    left: 119,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    width: 122,
    height: 51,
    position: "absolute",
  },
  icon2: {
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
  officeFeePaymentPage: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeFeePaymentPage;
