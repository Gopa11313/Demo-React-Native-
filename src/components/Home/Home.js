import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";
export default function Home({ navigation }) {
  const increse = () => {
    NumberFuncation(number + 1);
    showErrorFunction(false);
  };
  const decrease = () => {
    if (number == 95) {
      showErrorFunction(true);
      return;
    }
    NumberFuncation(number - 1);
  };
  const Reset = () => {
    NumberFuncation(99);
    showErrorFunction(false);
  };
  const [number, NumberFuncation] = useState(99);
  const [showError, showErrorFunction] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.myLabel}>Home Page</Text>
        <Text style={{ fontSize: 20 }}>press the button to update</Text>
        <Text
          style={{
            fontSize: 99,
            color: showError ? "red" : "black",
            textDecorationLine: showError ? "line-through" : "none",
          }}
          value={number}
        >
          {number}
        </Text>

        <Button title="Incrase" onPress={increse} />

        <Button title="Decrease" onPress={decrease} />
        <Button title="Reset" onPress={Reset} />
        {/* coditional satatement if the showError is true it will show */}

        {showError && <Text>You cannot go below than 95</Text>}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inner: {
    padding: 20,
  },
  myLabel: {
    fontSize: 25,
    color: "blue",
    fontStyle: "bold",
  },
});
