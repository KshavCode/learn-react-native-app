import { Text, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableHighlightOption = () => {
    const handlePress = () => {
        console.log("TouchableHighlight Pressed!");
    };

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%' }}>
            <TouchableHighlight 
                style={[styles.button]} 
                underlayColor="#5f0061ff"
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>Press Me</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={[styles.button]} 
                underlayColor="#004461ff"
                onPress={handlePress}
                activeOpacity={0.4}
            >
                <Text style={styles.buttonText}>Press Me with Less Opacity</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};
export const TouchableHighlightOptionSyntax = () => {
    const code = `import { Text, TouchableHighlight, View } from "react-native";

const handlePress = () => {
  console.log("TouchableHighlight Pressed!");
};

export default App = () => {
  return (
    <View>
      <TouchableHighlight 
        onPress={handlePress} 
        underlayColor="#dddddd"
      >
        <Text>Press Me</Text>
      </TouchableHighlight>
      <TouchableHighlight 
        underlayColor="#004461ff"
        onPress={handlePress}
        activeOpacity={0.4}
      >
        <Text>Press Me with Less Opacity</Text>
      </TouchableHighlight>
    </View>
  );
};`;

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={styles.codeBlock}>{code}</Text>
            <CopyBtn />
        </SafeAreaView>
    );
};
