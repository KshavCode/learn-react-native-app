import React from "react";
import { Text, TouchableHighlight, View, ScrollView } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableHighlightOption = () => {
  const handlePress = () => {
    console.log("TouchableHighlight Pressed!");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 20 }}>
      <Text style={{ color: '#64748B', textAlign: 'center', marginBottom: 10 }}>
        TouchableHighlight darkens the background color (underlay) when pressed.
      </Text>

      <TouchableHighlight 
        style={[styles.button, { width: '100%' }]} 
        underlayColor="#1e1b4b" // Darker indigo
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Press Me (Default)</Text>
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.button, { width: '100%' }]} 
        underlayColor="#0f172a" 
        onPress={handlePress}
        activeOpacity={0.6}
      >
        <Text style={styles.buttonText}>Press Me (Low Opacity)</Text>
      </TouchableHighlight>
    </View>
  );
};

export const TouchableHighlightOptionSyntax = () => {
  const code = `import { Text, TouchableHighlight, View } from "react-native";

export default App = () => {
  const handlePress = () => console.log("Pressed!");

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TouchableHighlight 
        onPress={handlePress} 
        underlayColor="#1e1b4b"
        style={{ padding: 15, backgroundColor: '#4338ca', borderRadius: 10 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
      </TouchableHighlight>
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