import React from "react";
import { Text, TouchableHighlight, View, ScrollView } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableHighlightOption = () => {
  const handlePress = () => {
    console.log("TouchableHighlight Pressed!");
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <View style={{ width: '100%', gap: 20 }}>
        <Text style={{ color: '#64748B', textAlign: 'center', fontSize: 14, marginBottom: 10 }}>
          TouchableHighlight darkens the background (underlay) when pressed. It requires exactly one child element.
        </Text>
        <TouchableHighlight 
          style={[styles.button, { width: '100%' }]} 
          underlayColor="#1E1B4B" 
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Press Me (Indigo Underlay)</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={[styles.button, { width: '100%', backgroundColor: '#64748B' }]} 
          underlayColor="#0F172A" 
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Press Me (Slate Underlay)</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={[styles.button, { width: '100%', backgroundColor: '#3B82F6' }]} 
          underlayColor="#1D4ED8" 
          onPress={handlePress}
          activeOpacity={0.6}
        >
          <Text style={styles.buttonText}>Press Me (Opacity: 0.6)</Text>
        </TouchableHighlight>
      </View>
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
        underlayColor="#1E1B4B"
        style={{ 
          padding: 15, 
          backgroundColor: '#4338CA', 
          borderRadius: 12,
          alignItems: 'center' 
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          TouchableHighlight
        </Text>
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
        
        {/* The Fix: Passed the 'code' variable to the button */}
        <CopyBtn textToCopy={code} />
      </View>
    </ScrollView>
  );
};