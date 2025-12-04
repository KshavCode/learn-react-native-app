import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableOpacityOption = () => {
    const handlePress = () => {
        console.log("Button Pressed!");
    };

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%' }}>
            <TouchableOpacity style={[styles.button]} onPress={handlePress}>
                <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress={handlePress} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Press Me with Less Opacity</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
export const TouchableOpacityOptionSyntax = () => {
    const code = `import { Text, TouchableOpacity, View } from "react-native";

const handlePress = () => {
  console.log("Button Pressed!");
};

export default App = () => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>Press Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
            <Text style=>Press Me with Less Opacity</Text>
        </TouchableOpacity>
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