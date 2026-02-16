import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableWithoutFeedbackOption = () => {
    const handlePress = () => {
        console.log("TouchableWithoutFeedback Pressed!");
    };

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%' }}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={[styles.button]}>
                    <Text style={styles.buttonText}>Press Me</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handlePress} disabled={true}>
                <View style={[styles.button]}>
                    <Text style={styles.buttonText}>Press Me (Disabled)</Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};
export const TouchableWithoutFeedbackOptionSyntax = () => {
    const code = `import { Text, TouchableWithoutFeedback, View } from "react-native";

const handlePress = () => {
  console.log("TouchableWithoutFeedback Pressed!");
};

export default App = () => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handlePress} disabled={true}>
        <View style={[styles.button]}>
          <Text style={styles.buttonText}>Press Me (Disabled)</Text>
        </View>
      </TouchableWithoutFeedback>
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

