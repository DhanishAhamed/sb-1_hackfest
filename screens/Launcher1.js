import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Launcher1 = () => {
  return (
    <View style={styles.launcher1}>
      <Image
        style={styles.launcher1Child}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.launcher1Item}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.launcher1Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.launcher1Child1}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.launcher1Child2}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.loupe1Icon}
        resizeMode="cover"
        source={require("../assets/loupe-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  launcher1Child: {
    top: 249,
    left: 28,
    width: 300,
    height: 300,
    position: "absolute",
  },
  launcher1Item: {
    top: 225,
    left: 5,
    width: 350,
    height: 350,
    position: "absolute",
  },
  launcher1Inner: {
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
  launcher1Child1: {
    top: 300,
    left: 80,
    width: 200,
    height: 200,
    position: "absolute",
  },
  launcher1Child2: {
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
  launcher1: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Launcher1;
