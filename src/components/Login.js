import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Image,
  View,
  Button,
  Alert,
  TextInput,
} from "react-native";
import { useState } from "react";
export default function Login() {
  const [emailFromUI, setEmailFromUI] = useState(""); // Destructure the state variable and the setter function
  const [textPass, setTextPass] = useState(""); // Destructure the state variable and the setter function

  const onSubmit = () => {
    console.log("your email is:" + emailFromUI);
    console.log("your password is:" + textPass);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmailFromUI(text)}
        placeholder="Email"
        value={emailFromUI}
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setTextPass(text)}
        value={textPass}
        placeholder="Password"
      />

      <Text>Your email is:{emailFromUI}</Text>
      {/* <Button 
     color="orange"
     title= "Click me" onPress={()=>{Alert.alert("My title","My Message",[{text:"Yes",onPress:()=>{console.log("Yes")}},
     {text:"No",onPress:()=>{console.log("No")}}])}}/> */}

      <Button color="orange" title="Login" onPress={onSubmit} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "android" ,
    alignItems: "center",
    padding: "10%",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
