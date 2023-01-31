import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const Library = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.library}>
      <View style={styles.libraryChild} />
      <Text style={styles.library1}>LIBRARY</Text>
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <Text style={[styles.search, styles.searchPosition]}>SEARCH</Text>
        <Image
          style={[styles.searchIcon2614x4601, styles.searchPosition]}
          resizeMode="cover"
          source={require("../assets/searchicon2614x460-1.png")}
        />
      </View>
      <View style={styles.category}>
        <View style={[styles.categoryChild, styles.categoryChildLayout]} />
        <View style={[styles.categoryItem, styles.categoryChildLayout]} />
        <View style={[styles.categoryInner, styles.categoryPosition]} />
        <View style={[styles.rectangleView, styles.categoryPosition]} />
        <View style={[styles.categoryChild1, styles.categoryPosition]} />
        <View style={styles.categoryChild2} />
        <View style={[styles.categoryChild3, styles.categoryChildLayout]} />
        <Text style={[styles.digitalLibrary, styles.cseTypo]}>
          DIGITAL LIBRARY
        </Text>
        <Text style={[styles.cse, styles.cseTypo]}>CSE</Text>
        <Text style={[styles.mechanical, styles.civilTypo]}>MECHANICAL</Text>
        <Text style={[styles.civil, styles.civilTypo]}>CIVIL</Text>
        <Text style={[styles.management, styles.managementTypo]}>
          MANAGEMENT
        </Text>
        <Text style={[styles.electronics, styles.managementTypo]}>
          ELECTRONICS
        </Text>
        <Text style={[styles.more, styles.moreTypo]}>{`MORE `}</Text>
        <Text style={[styles.trending, styles.moreTypo]}>TRENDING</Text>
      </View>
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
        style={[
          styles.libraryInner,
          styles.groupParentLayout,
          styles.groupParentLayout1,
        ]}
      >
        <View
          style={[
            styles.groupParent,
            styles.groupParentLayout,
            styles.groupParentLayout1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.groupParentLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Image
              style={[
                styles.x669wc1Icon,
                styles.iconLayout1,
                styles.iconLayout2,
              ]}
              resizeMode="cover"
              source={require("../assets/500x669wc-1.png")}
            />
            <Text
              style={[
                styles.wirelessCommunication,
                styles.communicationPosition,
                styles.communicationTypo,
              ]}
            >
              <Text style={styles.wireless}>WIRELESS</Text>
              <Text style={styles.communication}>COMMUNICATION</Text>
            </Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Image
              style={[
                styles.x669wc1Icon,
                styles.iconLayout1,
                styles.iconLayout2,
              ]}
              resizeMode="cover"
              source={require("../assets/images-1.png")}
            />
          </View>
          <View
            style={[styles.dataCommunicationParent, styles.groupParentLayout]}
          >
            <Text
              style={[
                styles.dataCommunication,
                styles.communicationPosition,
                styles.communicationTypo,
              ]}
            >{`DATA & COMMUNICATION`}</Text>
            <View style={[styles.groupContainer, styles.groupParentLayout]}>
              <View style={[styles.rectangleParent, styles.groupParentLayout]}>
                <View
                  style={[styles.rectangleParent, styles.groupParentLayout]}
                >
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text
                    style={[
                      styles.internetOfThings,
                      styles.communicationPosition,
                    ]}
                  >
                    <Text style={styles.wireless}>INTERNET OF</Text>
                    <Text style={styles.communication}>THINGS</Text>
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.x669iot1Icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/500x669iot-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.vectorParent, styles.frameViewLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.groupChild1Layout]}
            resizeMode="cover"
            source={require("../assets/rectangle-53.png")}
          />
          <Image
            style={[
              styles.w0nutxl3l1Icon,
              styles.iconLayout1,
              styles.iconLayout2,
            ]}
            resizeMode="cover"
            source={require("../assets/81w0nutxl3l-1.png")}
          />
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Image
            style={[styles.fb8iqjc1l1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/81fb8iqjc1l-1.png")}
          />
          <Image
            style={[styles.buyAshirwadAdvancedEngineerIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/buy-ashirwad-advanced-engineering-mathematicsi-by-drkantesh-gupta-for-rtu-electronics-engineering-btech-1.png")}
          />
        </View>
        <Text style={styles.communicationEngineering}>
          <Text style={styles.wireless}>COMMUNICATION</Text>
          <Text style={styles.wireless}>ENGINEERING</Text>
        </Text>
        <Text
          style={[styles.advancedMathmatics, styles.advancedMathmaticsTypo]}
        >
          ADVANCED MATHMATICS
        </Text>
        <Text
          style={[styles.softwareEngineering, styles.advancedMathmaticsTypo]}
        >
          <Text style={styles.wireless}>SOFTWARE ENGINEERING</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 46,
    width: 253,
    position: "absolute",
  },
  searchPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  categoryChildLayout: {
    height: 39,
    width: 145,
    backgroundColor: Color.lightskyblue_300,
    left: 3,
    position: "absolute",
  },
  categoryPosition: {
    left: 165,
    height: 39,
    width: 145,
    backgroundColor: Color.lightskyblue_300,
    position: "absolute",
  },
  cseTypo: {
    height: 20,
    color: Color.midnightblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  civilTypo: {
    height: 19,
    top: 76,
    color: Color.midnightblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  managementTypo: {
    color: Color.midnightblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  moreTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  groupParentLayout: {
    height: 175,
    position: "absolute",
  },
  groupParentLayout1: {
    width: 342,
    height: 175,
  },
  groupChildLayout: {
    borderRadius: Border.br_md,
    backgroundColor: Color.lightgray_200,
    height: 175,
    width: 117,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 125,
    width: 91,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout2: {
    left: 13,
    height: 125,
    width: 91,
    borderRadius: Border.br_3xs,
  },
  communicationPosition: {
    textAlign: "center",
    top: 140,
    color: Color.black,
    position: "absolute",
  },
  communicationTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
  },
  frameViewLayout: {
    height: 176,
    position: "absolute",
  },
  groupChild1Layout: {
    top: 1,
    borderRadius: Border.br_md,
    height: 175,
    width: 117,
    position: "absolute",
  },
  iconLayout: {
    top: 9,
    height: 125,
    width: 91,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  advancedMathmaticsTypo: {
    height: 16,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  libraryChild: {
    top: 116,
    left: 6,
    borderTopLeftRadius: Border.br_3xl,
    backgroundColor: Color.white,
    width: 355,
    height: 773,
    position: "absolute",
  },
  library1: {
    top: 39,
    left: 99,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    width: 151,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  searchBarChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.lightblue,
    left: 0,
    top: 0,
  },
  search: {
    left: 93,
    fontSize: FontSize.size_2xl,
    color: Color.gray_200,
    width: 67,
    height: 25,
    fontFamily: FontFamily.inter,
    top: 11,
    textAlign: "left",
  },
  searchIcon2614x4601: {
    width: 50,
    height: 26,
    top: 10,
    left: 0,
  },
  searchBar: {
    top: 133,
    left: 57,
  },
  categoryChild: {
    borderTopLeftRadius: Border.br_xl,
    top: 0,
  },
  categoryItem: {
    top: 63,
  },
  categoryInner: {
    top: 126,
  },
  rectangleView: {
    top: 63,
  },
  categoryChild1: {
    borderTopRightRadius: Border.br_xl,
    top: 0,
  },
  categoryChild2: {
    top: 185,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 307,
    backgroundColor: Color.lightskyblue_300,
    left: 3,
    height: 25,
    position: "absolute",
  },
  categoryChild3: {
    top: 126,
  },
  digitalLibrary: {
    width: 117,
    left: 25,
    top: 10,
  },
  cse: {
    left: 220,
    width: 109,
    top: 11,
  },
  mechanical: {
    left: 31,
    width: 103,
  },
  civil: {
    left: 215,
    width: 78,
  },
  management: {
    top: 139,
    left: 187,
    height: 23,
    width: 100,
  },
  electronics: {
    top: 138,
    width: 102,
    height: 13,
    left: 25,
  },
  more: {
    top: 190,
    width: 93,
    height: 7,
    left: 138,
    fontSize: FontSize.size_lg,
    color: Color.black,
  },
  trending: {
    top: 230,
    fontSize: FontSize.size_5xl,
    width: 173,
    height: 42,
    left: 0,
  },
  category: {
    top: 203,
    left: 27,
    width: 329,
    height: 272,
    position: "absolute",
  },
  icon: {
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
  groupChild: {
    backgroundColor: Color.lightgray_200,
    left: 0,
  },
  x669wc1Icon: {
    top: 11,
  },
  wireless: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  communication: {
    margin: Margin.m_md,
  },
  wirelessCommunication: {
    left: 9,
    height: 27,
    width: 100,
  },
  rectangleParent: {
    width: 117,
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    left: 137,
    width: 117,
    top: 0,
  },
  dataCommunication: {
    width: 103,
    height: 25,
    left: 0,
  },
  internetOfThings: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    width: 79,
    height: 30,
    left: 18,
    fontFamily: FontFamily.inter,
  },
  x669iot1Icon: {
    left: 20,
    top: 11,
  },
  groupContainer: {
    left: 131,
    width: 117,
    top: 0,
  },
  dataCommunicationParent: {
    left: 144,
    width: 249,
    top: 0,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  libraryInner: {
    top: 495,
    left: 20,
  },
  rectangleIcon: {
    left: 0,
  },
  w0nutxl3l1Icon: {
    top: 16,
  },
  groupChild1: {
    left: 275,
    backgroundColor: Color.lightgray_200,
  },
  groupChild2: {
    backgroundColor: Color.lightgray_200,
    left: 138,
  },
  fb8iqjc1l1Icon: {
    left: 288,
  },
  buyAshirwadAdvancedEngineerIcon: {
    left: 151,
  },
  vectorParent: {
    width: 392,
    left: 0,
    top: 0,
  },
  communicationEngineering: {
    top: 146,
    left: 7,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.black,
    width: 103,
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  advancedMathmatics: {
    left: 158,
    width: 77,
    top: 140,
    height: 16,
  },
  softwareEngineering: {
    top: 143,
    left: 270,
    width: 127,
  },
  frameView: {
    top: 684,
    width: 354,
    left: 18,
  },
  library: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 889,
    overflow: "hidden",
    width: "100%",
  },
});

export default Library;
