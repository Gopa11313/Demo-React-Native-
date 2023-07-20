import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

export default function BookMark({ navigation }) {
  const [age1, setAge1] = useState("");
  const [age2, setAge2] = useState("");
  useEffect(() => {
    console.log("what's the currect age:" + age1);
  });
  const calculate = () => {
    const sum = parseInt(age1) + parseInt(age2);
    console.log("This is my age:" + sum);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age1}
        onChangeText={setAge1}
      />
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age2}
        onChangeText={setAge2}
      />
      <Button title="calculate" onPress={calculate} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
