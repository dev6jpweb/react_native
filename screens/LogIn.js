import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const url = "http://192.168.1.72:3000";
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    const payload = {
      email,
      password,
    };

    fetch(`${url}/logIn`,{
        method="POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(payload)
    
    })
    .then((res)=>res.json)
    .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    
    
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.text}>
            <TextInput placeholder="email" onChangeText={setEmail}></TextInput>
            <TextInput
              placeholder="password"
              onChangeText={setPassword}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={submitHandler}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
  },
  card: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "80%",
    marginTop: "40%",
    borderRadius: 20,
    maxHeight: 380,
    paddingBottom: "30%",
  },
  button: {
    width: "80%",
    backgroundColor: "black",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
  text: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
});
