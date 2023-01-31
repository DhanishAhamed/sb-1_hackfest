import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const OfficeFeepaymentAllTransact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.officeFeepaymentAllTransact}>
      <Image
        style={styles.officeFeepaymentAllTransactChild}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={[styles.office, styles.viewTypo]}>OFFICE</Text>
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
      <View
        style={[styles.officeFeepaymentAllTransactItem, styles.officePosition]}
      />
      <View
        style={[
          styles.officeFeepaymentAllTransactInner,
          styles.groupChildShadowBox,
          styles.officePosition,
        ]}
      />
      <Text style={[styles.viewAllTransaction, styles.viewTypo]}>
        View All Transaction
      </Text>
      <View style={[styles.rectangleView, styles.officeChildShadowBox]} />
      <View
        style={[
          styles.officeFeepaymentAllTransactChild1,
          styles.officeChildShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeFeepaymentAllTransactChild2,
          styles.officeChildShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeFeepaymentAllTransactChild3,
          styles.officeChildShadowBox,
        ]}
      />
      <View
        style={[
          styles.officeFeepaymentAllTransactChild4,
          styles.officeChildShadowBox,
        ]}
      />
      <Image
        style={[styles.development11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/development1-1.png")}
      />
      <Image
        style={[styles.openBook11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/openbook1-1.png")}
      />
      <Image
        style={[styles.budget1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/budget-1.png")}
      />
      <Image
        style={[styles.fee1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/fee-1.png")}
      />
      <Image
        style={[styles.deal1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/deal-1.png")}
      />
      <Text style={[styles.tutionFee, styles.tutionTypo]}>Tution Fee</Text>
      <Text style={[styles.tutionFee1, styles.tutionTypo]}>Tution Fee</Text>
      <Text style={[styles.tutionFee2, styles.tutionTypo]}>Tution Fee</Text>
      <Text style={[styles.tutionFee3, styles.tutionTypo]}>Tution Fee</Text>
      <Text style={[styles.tutionFee4, styles.tutionTypo]}>Tution Fee</Text>
      <View
        style={[
          styles.rectangleParent,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.groupChildShadowBox,
          ]}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.groupChildShadowBox,
          ]}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
      </View>
      <View
        style={[
          styles.rectangleContainer,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.groupChildShadowBox,
          ]}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
      </View>
      <View
        style={[
          styles.groupView,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.groupChildShadowBox,
          ]}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
      </View>
      <View
        style={[
          styles.rectangleParent1,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupParentLayout,
            styles.groupChildShadowBox,
          ]}
        />
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  officePosition: {
    width: 314,
    left: 30,
    position: "absolute",
  },
  groupChildShadowBox: {
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  officeChildShadowBox: {
    height: 70,
    width: 276,
    backgroundColor: Color.lightskyblue_400,
    left: 50,
    borderRadius: Border.br_3xs,
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
  iconLayout: {
    height: 45,
    width: 45,
    left: 67,
    position: "absolute",
  },
  iconPosition: {
    left: 71,
    height: 45,
    width: 45,
    position: "absolute",
  },
  tutionTypo: {
    height: 15,
    width: 75,
    color: Color.gray_100,
    letterSpacing: 1.2,
    fontSize: FontSize.size_base,
    left: 139,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  groupParentLayout: {
    width: 49,
    height: 70,
    position: "absolute",
  },
  groupParentPosition: {
    left: 277,
    width: 49,
  },
  officeFeepaymentAllTransactChild: {
    top: 110,
    left: 5,
    width: 355,
    height: 704,
    position: "absolute",
  },
  office: {
    top: 29,
    left: 119,
    fontSize: FontSize.size_6xl,
    width: 122,
    height: 51,
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
  officeFeepaymentAllTransactItem: {
    top: 150,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.white,
    height: 615,
    opacity: 0.6,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 314,
  },
  officeFeepaymentAllTransactInner: {
    top: 151,
    height: 61,
  },
  viewAllTransaction: {
    top: 172,
    left: 103,
    fontSize: FontSize.size_2xl,
    letterSpacing: 1.5,
    width: 201,
  },
  rectangleView: {
    top: 247,
  },
  officeFeepaymentAllTransactChild1: {
    top: 352,
  },
  officeFeepaymentAllTransactChild2: {
    top: 457,
  },
  officeFeepaymentAllTransactChild3: {
    top: 562,
  },
  officeFeepaymentAllTransactChild4: {
    top: 667,
  },
  development11Icon: {
    top: 469,
  },
  openBook11Icon: {
    top: 364,
  },
  budget1Icon: {
    top: 260,
  },
  fee1Icon: {
    top: 574,
  },
  deal1Icon: {
    top: 680,
  },
  tutionFee: {
    top: 275,
  },
  tutionFee1: {
    top: 379,
  },
  tutionFee2: {
    top: 483,
  },
  tutionFee3: {
    top: 587,
  },
  tutionFee4: {
    top: 691,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  view: {
    top: 26,
    left: 7,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.3,
    width: 35,
    height: 17,
  },
  rectangleParent: {
    top: 248,
  },
  rectangleGroup: {
    top: 352,
  },
  rectangleContainer: {
    top: 458,
  },
  groupView: {
    top: 563,
  },
  rectangleParent1: {
    top: 667,
  },
  officeFeepaymentAllTransact: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfficeFeepaymentAllTransact;
