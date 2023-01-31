import  React,{useState} from "react";
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Margin } from "../GlobalStyles";

const Canteen = () => {
  const navigation = useNavigation();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <Pressable
      style={styles.canteen}
      onPress={() => navigation.navigate("CanteenBill")}
    >
      <View style={styles.container}>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => setCount1(count1 - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count1}>{count1}</Text>
        <TouchableOpacity style={styles.button1} onPress={() => setCount1(count1 + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button2} onPress={() => setCount2(count2 - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count2}>{count2}</Text>
        <TouchableOpacity style={styles.button2} onPress={() => setCount2(count2 + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button3} onPress={() => setCount3(count3 - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count3}>{count2}</Text>
        <TouchableOpacity style={styles.button3} onPress={() => setCount3(count3 + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View style={styles.canteenChild} />
      <Text style={styles.canteen1}>CANTEEN</Text>
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <Text style={[styles.search, styles.searchPosition]}>SEARCH</Text>
        <Image
          style={[styles.searchIcon2614x4601, styles.searchPosition]}
          resizeMode="cover"
          source={require("../assets/searchicon2614x460-1.png")}
        />
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
      <View style={styles.canteenItem} />
      <View style={styles.menu}>
        <View style={[styles.menuChild, styles.menuChildLayout1]} />
        <View style={[styles.menuItem, styles.menuItemPosition]} />
        <View style={[styles.menuInner, styles.menuInnerPosition]} />
        <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
        <View style={[styles.menuChild1, styles.menuChild1Position]} />
        <View style={[styles.menuChild2, styles.menuChildLayout1]} />
        <View style={[styles.menuChild3, styles.menuChildLayout1]} />
        <Image
          style={[
            styles.indianChickenBiryaniServedIcon,
            styles.menuChildLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/indianchickenbiryaniservedterracottabowlwithyogurtwhitebackgroundselectivefocus-46668972554-1.png")}
        />
        <Image
          style={styles.menuItemPosition}
          resizeMode="cover"
          source={require("../assets/1000-f-361024401-whhocndepi0llqz1lvbyy0dvzuno3avp-1.png")}
        />
        <Image
          style={styles.menuInnerPosition}
          resizeMode="cover"
          source={require("../assets/schezwannoodlesszechwanvegetablehakkanoodleschowmeinispopularindochineserecipesservedbowlplatewithwoodenchopsticks-46668974647-1.png")}
        />
        <Image
          style={styles.rectangleViewPosition}
          resizeMode="cover"
          source={require("../assets/chickenfriedriceispopularindianchineseindochinesestreetfoodservedplatewithchopsticks-46668974428-1.png")}
        />
        <Image
          style={styles.menuChild1Position}
          resizeMode="cover"
          source={require("../assets/bigsandwichhamburgerburgerwithbeefredoniontomatofriedbacon-28295398-1.png")}
        />
        <View style={[styles.lineView, styles.menuChildLayout]} />
        <View style={[styles.menuChild4, styles.menuChildLayout]} />
        <View style={[styles.menuChild5, styles.menuChildLayout]} />
        <View style={[styles.menuChild6, styles.menuChildLayout]} />
        <View style={[styles.menuChild7, styles.menuChildLayout]} />
        <View style={[styles.menuChild8, styles.menuChildLayout]} />
        <Text style={styles.chickenBiriyani100Container}>
          <Text style={styles.chickenBiriyani}>{`CHICKEN BIRIYANI     `}</Text>
          <Text style={styles.text}>₹100</Text>
        </Text>
        <Image
          style={[styles.pxIndiaVegetariels1Icon, styles.indiaIconLayout]}
          resizeMode="cover"
          source={require("../assets/1280pxindia-vegetariels-1.png")}
        />
        <Image
          style={[styles.pxIndiaVegetariels1Icon1, styles.indiaIconLayout]}
          resizeMode="cover"
          source={require("../assets/1280pxindia-vegetariels-1.png")}
        />
        <Image
          style={[styles.pxIndiaVegetariels1Icon2, styles.indiaIconLayout]}
          resizeMode="cover"
          source={require("../assets/1280pxindia-vegetariels-1.png")}
        />
        <Text style={[styles.tandoori60, styles.tandoori60Typo]}>
          <Text style={styles.chickenBiriyani}>TANDOORI</Text>
          <Text style={styles.text}>₹60</Text>
        </Text>
        <Text style={[styles.vegNoodles80, styles.burgers60Typo]}>
          <Text style={styles.chickenBiriyani}>VEG-NOODLES</Text>
          <Text style={styles.text}>₹80</Text>
        </Text>
        <Text style={[styles.vegFriedrice80, styles.tandoori60Typo]}>
          <Text style={styles.chickenBiriyani}>VEG-FRIEDRICE</Text>
          <Text style={styles.text}>₹80</Text>
        </Text>
        <Text style={[styles.burgers60, styles.burgers60Typo]}>
          <Text style={styles.chickenBiriyani}>BURGERS</Text>
          <Text style={styles.text}>₹60</Text>
        </Text>
        <Text style={[styles.chocolateShake40Container, styles.burgers60Typo]}>
          <Text style={styles.chickenBiriyani}>CHOCOLATE SHAKE</Text>
          <Text style={styles.text}>₹40</Text>
        </Text>
        <Text style={[styles.gulabJamun20Container, styles.tandoori60Typo]}>
          <Text style={styles.chickenBiriyani}>GULAB JAMUN</Text>
          <Text style={styles.text}>₹20</Text>
        </Text>
        <Image
          style={[
            styles.creamyVanillaMilkyShakeWitIcon,
            styles.menuChildLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/creamyvanillamilkyshakewithchocolatesaucewhitesaucer-11457910109-1.png")}
        />
        <Image
          style={[
            styles.pxIndiaNonVegetarianLabelsIcon,
            styles.indiaIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/1280pxindia-nonvegetarian-labels-1.png")}
        />
        <Image
          style={[
            styles.pxIndiaNonVegetarianLabelsIcon1,
            styles.indiaIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/1280pxindia-nonvegetarian-labels-1.png")}
        />
        <Image
          style={[
            styles.pxIndiaNonVegetarianLabelsIcon2,
            styles.indiaIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/1280pxindia-nonvegetarian-labels-1.png")}
        />
        <Image
          style={[
            styles.pxIndiaNonVegetarianLabelsIcon3,
            styles.indiaIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/1280pxindia-nonvegetarian-labels-1.png")}
        />
        <Image
          style={[
            styles.indianSweetFoodGulabJamunIcon,
            styles.menuChildLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/indiansweetfoodgulabjamunservedroundceramicbowl-46668971987-1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  button1: {
    padding: 10,
    margin: 5,
    top:200,
    left:240,
  },
  button2: {
    padding: 10,
    margin: 5,
    top:120,
    left:120,
  },
  button3: {
    padding: 10,
    margin: 5,
    top:60,
    left:1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  count1: {
    fontSize: 20,
    margin: 5,
    top:200,
    left:240,
  },
  count2: {
    fontSize: 20,
    margin: 5,
    top:120,
    left:120,
  },
  count3: {
    fontSize: 20,
    margin: 5,
    top:60,
    left:0,
  },
  searchLayout: {
    height: 46,
    width: 253,
    position: "absolute",
  },
  searchPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  menuChildLayout1: {
    height: 70,
    width: 70,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  menuItemPosition: {
    top: 104,
    height: 70,
    width: 70,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  menuInnerPosition: {
    top: 208,
    height: 70,
    width: 70,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 312,
    height: 70,
    width: 70,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  menuChild1Position: {
    top: 416,
    height: 70,
    width: 70,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  menuChildLayout: {
    width: 272,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    left: 12,
    height: 1,
    position: "absolute",
  },
  indiaIconLayout: {
    width: 20,
    left: 79,
    height: 20,
    position: "absolute",
  },
  tandoori60Typo: {
    fontSize: FontSize.size_lg,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  burgers60Typo: {
    height: 16,
    fontSize: FontSize.size_lg,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  canteenChild: {
    top: 110,
    left: 5,
    borderTopLeftRadius: Border.br_3xl,
    backgroundColor: Color.white,
    width: 355,
    height: 777,
    position: "absolute",
  },
  canteen1: {
    top: 37,
    left: 95,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    width: 237,
    height: 50,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  searchBarChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gainsboro_200,
    left: 0,
    top: 0,
  },
  search: {
    top: 11,
    left: 93,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.inter,
    color: Color.gray_200,
    width: 67,
    height: 25,
    textAlign: "left",
  },
  searchIcon2614x4601: {
    top: 10,
    width: 50,
    height: 26,
    left: 0,
  },
  searchBar: {
    top: 126,
    left: 53,
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
  canteenItem: {
    width: 1,
    height: 1,
  },
  menuChild: {
    backgroundColor: Color.gainsboro_200,
    top: 0,
  },
  menuItem: {
    backgroundColor: Color.gainsboro_200,
  },
  menuInner: {
    backgroundColor: Color.gainsboro_200,
  },
  rectangleView: {
    backgroundColor: Color.gainsboro_200,
  },
  menuChild1: {
    backgroundColor: Color.gainsboro_200,
  },
  menuChild2: {
    top: 520,
    backgroundColor: Color.gainsboro_200,
  },
  menuChild3: {
    top: 624,
    backgroundColor: Color.gainsboro_200,
  },
  indianChickenBiryaniServedIcon: {
    top: 0,
  },
  lineView: {
    top: 85,
  },
  menuChild4: {
    top: 192,
  },
  menuChild5: {
    top: 296,
  },
  menuChild6: {
    top: 402,
  },
  menuChild7: {
    top: 499,
  },
  menuChild8: {
    top: 605,
  },
  chickenBiriyani: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    margin: Margin.m_md,
  },
  chickenBiriyani100Container: {
    top: 29,
    left: 90,
    fontSize: FontSize.size_base,
    whiteSpace: "pre-wrap",
    width: 179,
    height: 39,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplay,
    fontWeight: "700",
    position: "absolute",
  },
  pxIndiaVegetariels1Icon: {
    height: 20,
    top: 0,
  },
  pxIndiaVegetariels1Icon1: {
    top: 100,
    height: 20,
  },
  pxIndiaVegetariels1Icon2: {
    top: 413,
    height: 20,
  },
  tandoori60: {
    top: 140,
    width: 112,
    height: 18,
    left: 89,
  },
  vegNoodles80: {
    top: 236,
    width: 125,
    left: 89,
  },
  vegFriedrice80: {
    top: 338,
    width: 121,
    height: 13,
    left: 89,
  },
  burgers60: {
    top: 443,
    width: 100,
    left: 89,
  },
  chocolateShake40Container: {
    top: 547,
    left: 83,
    width: 139,
  },
  gulabJamun20Container: {
    top: 642,
    left: 75,
    width: 129,
    height: 20,
  },
  creamyVanillaMilkyShakeWitIcon: {
    top: 521,
  },
  pxIndiaNonVegetarianLabelsIcon: {
    top: 198,
    height: 20,
  },
  pxIndiaNonVegetarianLabelsIcon1: {
    top: 304,
    height: 20,
  },
  pxIndiaNonVegetarianLabelsIcon2: {
    top: 509,
    height: 20,
  },
  pxIndiaNonVegetarianLabelsIcon3: {
    top: 614,
    height: 20,
  },
  indianSweetFoodGulabJamunIcon: {
    top: 623,
  },
  menu: {
    top: 184,
    left: 33,
    width: 10,
    height: 694,
    position: "absolute",
  },
  canteen: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 887,
    
    width: "100%",
  },
});

export default Canteen;
