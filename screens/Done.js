import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Done = () => {
  return (
    <View style={styles.done}>
      <Image
        style={styles.doneChild}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.doneItem}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.doneInner}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.doneChild1}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.doneChild2}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  doneChild: {
    top: 249,
    left: 28,
    width: 300,
    height: 300,
    position: "absolute",
  },
  doneItem: {
    top: 225,
    left: 5,
    width: 350,
    height: 350,
    position: "absolute",
  },
  doneInner: {
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
  doneChild1: {
    top: 300,
    left: 80,
    width: 200,
    height: 200,
    position: "absolute",
  },
  doneChild2: {
    top: 318,
    left: 94,
    width: 172,
    height: 172,
    position: "absolute",
  },
  vectorIcon: {
    height: "10.42%",
    width: "23.15%",
    top: "44.63%",
    right: "38.52%",
    bottom: "44.96%",
    left: "38.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  done: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Done;
