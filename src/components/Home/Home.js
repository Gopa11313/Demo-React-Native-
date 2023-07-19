import { Text,StyleSheet, View ,SafeAreaView,StatusBar } from "react-native";
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Page</Text>
    </SafeAreaView>
  );
}
const styles =  StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})
