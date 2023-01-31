import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Canteenpayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.canteenpayment}>
      <View style={styles.canteenpaymentChild} />
      <Pressable
        style={[
          styles.canteenpaymentItem,
          styles.lineIconPosition,
          styles.canteenpaymentShadowBox,
        ]}
        onPress={() => navigation.navigate("Token")}
      />
      <View
        style={[styles.canteenpaymentInner, styles.rectangleViewShadowBox]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View
        style={[styles.canteenpaymentChild1, styles.canteenpaymentShadowBox]}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-37.png")}
      />
      <View style={[styles.lineView, styles.canteenpaymentChildLayout2]} />
      <View
        style={[styles.canteenpaymentChild2, styles.canteenpaymentChildLayout2]}
      />
      <View
        style={[styles.canteenpaymentChild3, styles.canteenpaymentChildLayout2]}
      />
      <View
        style={[styles.canteenpaymentChild4, styles.canteenpaymentChildLayout2]}
      />
      <View
        style={[styles.canteenpaymentChild5, styles.canteenpaymentChildLayout2]}
      />
      <View
        style={[styles.canteenpaymentChild6, styles.canteenpaymentChildLayout2]}
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
        style={[styles.canteenpaymentChild7, styles.canteenpaymentChildLayout1]}
      />
      <View
        style={[styles.canteenpaymentChild8, styles.canteenpaymentChildLayout1]}
      />
      <View
        style={[styles.canteenpaymentChild9, styles.canteenpaymentChildLayout1]}
      />
      <View
        style={[
          styles.canteenpaymentChild10,
          styles.canteenpaymentChildLayout1,
        ]}
      />
      <View
        style={[
          styles.canteenpaymentChild11,
          styles.canteenpaymentChildLayout1,
        ]}
      />
      <View
        style={[
          styles.canteenpaymentChild12,
          styles.canteenpaymentChildLayout1,
        ]}
      />
      <View
        style={[
          styles.canteenpaymentChild13,
          styles.canteenpaymentChildLayout1,
        ]}
      />
      <View
        style={[
          styles.canteenpaymentChild14,
          styles.canteenpaymentChildLayout1,
        ]}
      />
      <View
        style={[
          styles.canteenpaymentChild15,
          styles.canteenpaymentChildLayout1,
        ]}
      />
      <View
        style={[
          styles.canteenpaymentChild16,
          styles.canteenpaymentChildLayout1,
        ]}
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
        style={[styles.ellipseIcon, styles.canteenpaymentChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.canteenpaymentChild17, styles.canteenpaymentChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.canteenpaymentChild18, styles.canteenpaymentChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.canteenpaymentChild19, styles.canteenpaymentChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.canteenpaymentChild20, styles.canteenpaymentChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.canteenpaymentChild21, styles.canteenpaymentChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.canteenpaymentChild22, styles.canteenpaymentChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.canteenpaymentChild23, styles.canteenpaymentChildLayout]}
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
      <Text style={[styles.text5, styles.totalTypo]}>₹160</Text>
      <Text style={[styles.items, styles.textClr]}>{`2 Items `}</Text>
      <Text style={[styles.text6, styles.text6Typo, styles.textClr]}>.</Text>
      <Text style={[styles.office, styles.textTypo1]}>OFFICE</Text>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    width: 323,
    left: 19,
    position: "absolute",
  },
  canteenpaymentShadowBox: {
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
  canteenpaymentChildLayout2: {
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
  canteenpaymentChildLayout1: {
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
  canteenpaymentChildLayout: {
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
  canteenpaymentChild: {
    top: 110,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    backgroundColor: Color.gray_500,
    width: 355,
    height: 690,
    position: "absolute",
  },
  canteenpaymentItem: {
    top: 136,
    height: 44,
  },
  canteenpaymentInner: {
    top: 230,
  },
  rectangleView: {
    top: 462,
  },
  canteenpaymentChild1: {
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
  canteenpaymentChild2: {
    top: 368,
    left: 19,
  },
  canteenpaymentChild3: {
    top: 508,
    left: 19,
  },
  canteenpaymentChild4: {
    top: 553,
    left: 19,
  },
  canteenpaymentChild5: {
    top: 599,
    left: 18,
  },
  canteenpaymentChild6: {
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
  canteenpaymentChild7: {
    top: 240,
  },
  canteenpaymentChild8: {
    top: 286,
  },
  canteenpaymentChild9: {
    top: 332,
  },
  canteenpaymentChild10: {
    top: 379,
  },
  canteenpaymentChild11: {
    top: 472,
  },
  canteenpaymentChild12: {
    top: 518,
  },
  canteenpaymentChild13: {
    top: 563,
  },
  canteenpaymentChild14: {
    top: 610,
  },
  canteenpaymentChild15: {
    top: 706,
  },
  canteenpaymentChild16: {
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
  canteenpaymentChild17: {
    top: 341,
  },
  canteenpaymentChild18: {
    top: 294,
    width: 8,
    left: 321,
  },
  canteenpaymentChild19: {
    top: 480,
  },
  canteenpaymentChild20: {
    top: 526,
  },
  canteenpaymentChild21: {
    top: 572,
  },
  canteenpaymentChild22: {
    top: 713,
  },
  canteenpaymentChild23: {
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
  logoIcon: {
    top: 30,
    left: 30,
    width: 56,
    height: 57,
    position: "absolute",
  },
  canteenpayment: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Canteenpayment;
