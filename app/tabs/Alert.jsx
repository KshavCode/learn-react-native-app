import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../constants/GlobalStyles";

const AlertTab = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Alert</Text>
            <TouchableOpacity style={styles.button}/>
        </SafeAreaView>
    )
}

export default AlertTab;