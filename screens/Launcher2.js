import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Launcher2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.launcher2}>
      <Image
        style={styles.launcher2Child}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.launcher2Item}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.launcher2Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.launcher2Child1}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.launcher2Child2}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.loupe1Icon}
        resizeMode="cover"
        source={require("../assets/loupe-1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LauncherOpen")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
      </Pressable>
      <Image
        style={styles.launcher2Child3}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={styles.launcher2Child4}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.launcher2Child5}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={styles.user11Icon}
        resizeMode="cover"
        source={require("../assets/user1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  launcher2Child: {
    top: 249,
    left: 28,
    width: 300,
    height: 300,
    position: "absolute",
  },
  launcher2Item: {
    top: 225,
    left: 5,
    width: 350,
    height: 350,
    position: "absolute",
  },
  launcher2Inner: {
    top: 200,
    left: 0,
    width: 400,
    height: 400,
    position: "absolute",
  },
  ellipseIcon: {
    top: 274,
    left: 55,
    width: 250,
    height: 250,
    position: "absolute",
  },
  launcher2Child1: {
    top: 300,
    left: 80,
    width: 200,
    height: 200,
    position: "absolute",
  },
  launcher2Child2: {
    top: 318,
    left: 94,
    width: 172,
    height: 172,
    position: "absolute",
  },
  loupe1Icon: {
    top: 375,
    left: 155,
    width: 50,
    height: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 245,
    top: 239,
    width: 70,
    height: 70,
    position: "absolute",
  },
  launcher2Child3: {
    top: 214,
    left: 220,
    width: 120,
    height: 120,
    position: "absolute",
  },
  launcher2Child4: {
    top: 199,
    left: 205,
    width: 150,
    height: 150,
    position: "absolute",
  },
  launcher2Child5: {
    top: 224,
    left: 230,
    width: 100,
    height: 100,
    position: "absolute",
  },
  user11Icon: {
    top: 264,
    left: 270,
    width: 20,
    height: 20,
    position: "absolute",
  },
  launcher2: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Launcher2;
