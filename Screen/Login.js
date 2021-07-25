import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar, TextInput, Pressable, ToastAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'


const imageData = "https://images.unsplash.com/photo-1616790876844-97c0c6057364?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandelar = () => {
    if (email === "" && password === "") {
      ToastAndroid.show("Email or Password Section is Blank !", ToastAndroid.SHORT);
    } else {
      console.warn({ email, password })

      axios.post('https://reqres.in/api/login', {
        UserID: email,
        Password: password
      }).then(res=>console.warn(res))
      //I thing POST api is wrong so i redirect the navigation with Home Screen manually !
      navigation.replace("Home");
      setEmail("")
      setPassword("")
    }


  }

  return (
    <ImageBackground source={{ uri: imageData }} style={styles.main}>
      <StatusBar backgroundColor="rgba(0, 0, 153,0.8)" />
      <LinearGradient colors={['rgba(0, 0, 153, 0.8)', 'rgba(102,0,102,0.8)']} style={styles.greadColor} >
        <View style={styles.Section1}>
          <Text style={styles.h1}>Log In</Text>
          <Text style={styles.h2}>Let's go to work</Text>
        </View>

        <View style={styles.Section2}>
          <View style={styles.inputSection}>
            <TextInput onChangeText={(e) => { setEmail(e) }} keyboardType="email-address" value={email} placeholderTextColor="white" placeholder="Email" style={{ backgroundColor: 'rgba(255,255,255,.3)', borderRadius: 20, color: 'white', paddingHorizontal: 15 }} />
          </View>

          <View style={styles.inputSection}>
            <TextInput onChangeText={(e) => { setPassword(e) }} value={password} placeholderTextColor="white" placeholder="Password" style={{ backgroundColor: 'rgba(255,255,255,.3)', borderRadius: 20, color: 'white', paddingHorizontal: 15 }} />
          </View>

          <Pressable style={{ alignItems: 'flex-end', justifyContent: "center", paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 14, color: 'white' }}>FORGOT PASSWORD</Text>
          </Pressable>

        </View>

        <View style={styles.Section3}>
          <Pressable onPress={LoginHandelar} style={styles.button}>
            <Text style={{ fontSize: 16, color: 'white' }}>LOGIN</Text>
          </Pressable>
          <View style={{ alignItems: 'center', justifyContent: "center", padding: 15 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Or Create Account useing Social Media</Text>
          </View>

          <View style={styles.button2}>

            <Text style={{ fontSize: 16, color: 'white' }}>Login With Facebook</Text>
          </View>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Don't have a account?<Text style={{ fontSize: 16, color: 'rgb(233,65,139)' }}>Signup</Text></Text>

          </View>

        </View>




      </LinearGradient>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  greadColor: {
    flex: 1
  },
  inputSection: {
    padding: 15,

  },
  Section1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-end"
  },
  Section2: {

  },
  Section3: {
    flex: 1,
    padding: 15
  },
  h1: {
    fontSize: 25,
    color: 'white'
  },
  h2: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    backgroundColor: 'rgb(233,65,139)',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }, button2: {
    backgroundColor: 'rgb(59,89,151)',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Login
