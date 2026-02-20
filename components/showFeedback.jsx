import React from "react";
import { Text, TouchableWithoutFeedback, View, ScrollView } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableWithoutFeedbackOption = () => {
  const handlePress = () => {
    alert("TouchableWithoutFeedback Pressed! (Notice there was no visual change)");
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <View style={{ width: '100%', gap: 20 }}>
        <Text style={{ color: '#64748B', textAlign: 'center', fontSize: 14, marginBottom: 10 }}>
          This component provides zero visual feedback when pressed. Use it when you want to trigger an action without changing the UI&apos;s appearance.
        </Text>
        
        {/* Active Example */}
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={[styles.button, { width: '100%' }]}>
            <Text style={styles.buttonText}>Press Me (Silent Tap)</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* Disabled Example */}
        <TouchableWithoutFeedback onPress={handlePress} disabled={true}>
          <View style={[styles.button, { width: '100%', opacity: 0.4, backgroundColor: '#94A3B8' }]}>
            <Text style={styles.buttonText}>Press Me (Disabled)</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export const TouchableWithoutFeedbackOptionSyntax = () => {
  const code = `import { Text, TouchableWithoutFeedback, View } from "react-native";

export default App = () => {
  const handlePress = () => alert("Tapped!");

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {/* IMPORTANT: TouchableWithoutFeedback MUST 
          contain exactly one child element (like a View).
      */}
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={{ padding: 15, backgroundColor: '#6366F1', borderRadius: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            No Visual Feedback
          </Text>
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
        
        {/* Fixed: Explicitly passing the 'code' variable */}
        <CopyBtn textToCopy={code} />
      </View>
    </ScrollView>
  );
};