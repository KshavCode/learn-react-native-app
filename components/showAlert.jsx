import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const AlertOption = () => {
    const popUp = () => {
        Alert.alert('Title Here','This is an custom message!', [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        );
    }
    return (
          <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%'}}>
            <TouchableOpacity style={[styles.button]} onPress={popUp}>
              <Text style={styles.buttonText}>This is an Alert Button</Text>
            </TouchableOpacity>
          </SafeAreaView>
    );
}

export const AlertOptionSyntax = () => {
    const code = `import { Alert, Text, TouchableOpacity, View } from "react-native";
    
const showAlert = () => {Alert.alert('Title Here', 'This is a custom message!', [
    {
      text: 'Cancel', 
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel' 
    },
    { 
      text: 'OK', 
      onPress: () => console.log('OK Pressed')
    },
])    
};

export default App = () => {
  return (
    <View>
      <TouchableOpacity onPress={showAlert}>
        <Text> This is an Alert Button</Text>
      </TouchableOpacity>
    </View>
  )
};`;

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={styles.codeBlock}>{code}</Text>
            <CopyBtn />
        </SafeAreaView>
    );
}
