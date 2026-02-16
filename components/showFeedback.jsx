import React from "react";
import { Text, TouchableWithoutFeedback, View, ScrollView } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableWithoutFeedbackOption = () => {
  const handlePress = () => {
    alert("TouchableWithoutFeedback Pressed!");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 20 }}>
      <Text style={{ color: '#64748B', textAlign: 'center', marginBottom: 10 }}>
        This component provides no visual feedback (opacity or highlight) when pressed.
      </Text>
      
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.button, { width: '100%' }]}>
          <Text style={styles.buttonText}>Press Me (No Feedback)</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePress} disabled={true}>
        <View style={[styles.button, { width: '100%', opacity: 0.5 }]}>
          <Text style={styles.buttonText}>Press Me (Disabled)</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const TouchableWithoutFeedbackOptionSyntax = () => {
  const code = `import { Text, TouchableWithoutFeedback, View } from "react-native";

const handlePress = () => {
  console.log("Pressed!");
};

export default App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback disabled={true}>
        <View style={[styles.button, { opacity: 0.5 }]}>
          <Text style={styles.buttonText}>Disabled</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};`;

  return (
    <ScrollView 
      contentContainerStyle={{ padding: 20, alignItems: 'center' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: '100%' }}>
        <Text style={[styles.codeBlock, { marginBottom: 20 }]}>{code}</Text>
        <CopyBtn textToCopy={code} />
      </View>
    </ScrollView>
  );
};