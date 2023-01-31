import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';


const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    // Add logic to handle the submit action
    // navigation.navigate("Home");
    console.log('Username:', username);
    console.log('Password:', password);
    fetch('http://192.168.1.13:5000/posts', {
  method: 'GET',})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
    if (username === "Zain" && password === "zain123"){
      navigation.navigate("Home");
    } else {
      setErrorMessage('Incorrect username or password');
    }

  };

  return (
    <View style={styles.login}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
     
      {/* <View style={styles.usernamePassword}>
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
      <View style={styles.loginItem} /> */}
      <Text style={[styles.academia, styles.academiaTypo]}>ACADEMIA</Text>
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      {/* <Text style={[styles.forgotPassword, styles.academiaTypo]}>
        forgot password
      </Text> */}
      <View style={[styles.container, inputFocus && { marginBottom: 20 }]}>
      <TextInput
        style={[styles.input, { backgroundColor: 'white' }]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      <TextInput
        style={[styles.input, { backgroundColor: 'white' }]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 150,
    // bottom: 50,
    // width: '80%',
    // position: 'absolute',
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
  },
  usernameLayout: {
    height: 40,
    width: 217,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  usernameTypo: {
    height: 21,
    width: 110,
    fontSize: FontSize.size_3xl,
    left: 60,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  academiaTypo: {
    fontFamily: FontFamily.redHatDisplay,
    textAlign: "center",
    position: "absolute",
  },
  logoIcon: {
    top: 40,
    left: 310,
    width: 141,
    height: 141,
    position: "absolute",
  },
  usernamePasswordChild: {
    top: 0,
    left: 0,
  },
  errorMessage: {
    color: 'red',
    marginTop: 520,
    textAlign: "center",
    height: 25
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
    height: 55,
  },
  forgotPassword: {
    top: 668,
    left: 131,
    color: Color.lightskyblue_200,
    fontSize: FontSize.size_xl,
  },
  logoIcon1: {
    top: 110,
    width: 310,
    height: 390,
    left: -70,
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