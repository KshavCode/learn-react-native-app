import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TouchableOpacityOption = () => {
  const handlePress = () => {
    alert("TouchableOpacity Pressed!");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 20 }}>
      <Text style={{ color: '#64748B', textAlign: 'center', marginBottom: 10 }}>
        This component reduces its opacity when pressed to provide visual feedback.
      </Text>

      <TouchableOpacity 
        style={[styles.button, { width: '100%' }]} 
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Press Me (Default Opacity)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { width: '100%' }]} 
        onPress={handlePress} 
        activeOpacity={0.2}
      >
        <Text style={styles.buttonText}>Press Me (High Opacity Change)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { width: '100%' }]} 
        onPress={handlePress} 
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Press Me (Subtle Opacity Change)</Text>
      </TouchableOpacity>
    </View>
  );
};

export const TouchableOpacityOptionSyntax = () => {
  const code = `import { Text, TouchableOpacity, View } from "react-native";

export default App = () => {
  const handlePress = () => console.log("Pressed!");

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {/* Default behavior */}
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      {/* Custom feedback intensity */}
      <TouchableOpacity 
        onPress={handlePress} 
        activeOpacity={0.7} 
        style={styles.btn}
      >
        <Text>Press Me with Custom Opacity</Text>
      </TouchableOpacity>
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