import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo30.png")}
      />
      <View style={styles.usernamePassword}>
        <View style={[styles.usernamePasswordChild, styles.usernameLayout]} />
        <View style={[styles.usernamePasswordItem, styles.usernameLayout]} />
        <Text style={[styles.username, styles.usernameTypo]}>
          <Text style={styles.username1}>USERNAME</Text>
        </Text>
        <Text style={[styles.password, styles.usernameTypo]}>PASSWORD</Text>
      </View>
      <View style={styles.loginChild} />
      <Pressable
        style={styles.submit}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.submit1}>SUBMIT</Text>
      </Pressable>
      <View style={styles.loginItem} />
      <Text style={[styles.academia, styles.academiaTypo]}>ACADEMIA</Text>
      <Text style={[styles.forgotPassword, styles.academiaTypo]}>
        forgot password
      </Text>
      <Image
        style={styles.logoIcon1}
        resizeMode="cover"
        source={require("../assets/logo31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameLayout: {
    height: 40,
    width: 217,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  usernameTypo: {
    height: 16,
    width: 99,
    fontSize: FontSize.size_3xl,
    left: 60,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  academiaTypo: {
    fontFamily: FontFamily.redHatDisplay,
    textAlign: "left",
    position: "absolute",
  },
  logoIcon: {
    top: 40,
    left: 290,
    width: 141,
    height: 141,
    position: "absolute",
  },
  usernamePasswordChild: {
    top: 0,
    left: 0,
  },
  usernamePasswordItem: {
    top: 58,
    left: 1,
  },
  username1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  username: {
    top: 12,
  },
  password: {
    top: 70,
  },
  usernamePassword: {
    top: 462,
    left: 71,
    width: 218,
    height: 98,
    position: "absolute",
  },
  loginChild: {
    top: 579,
    left: 144,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.lightskyblue_200,
    height: 35,
    width: 70,
    position: "absolute",
  },
  submit1: {
    height: 22,
    fontSize: FontSize.size_xl,
    width: 70,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  submit: {
    left: 153,
    top: 587,
    position: "absolute",
  },
  loginItem: {
    top: 641,
    left: 30,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 301,
    height: 1,
    position: "absolute",
  },
  academia: {
    top: 197,
    left: 83,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    color: Color.gainsboro_100,
    width: 211,
    height: 30,
  },
  forgotPassword: {
    top: 668,
    left: 131,
    color: Color.lightskyblue_200,
    fontSize: FontSize.size_xl,
  },
  logoIcon1: {
    top: 121,
    width: 310,
    height: 310,
    left: 0,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;
