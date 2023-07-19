import { View,Text ,SafeAreaView,StatusBar,StyleSheet} from "react-native";

export default function BookMark({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Boomk Mark Page</Text>
        </SafeAreaView>
    )
};
const styles =  StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})