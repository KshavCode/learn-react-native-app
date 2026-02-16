import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ActivityIndicatorOption = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <View style={{ width: "90%", gap: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text>Default ActivityIndicator</Text>
          <ActivityIndicator />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text>Large, Purple ActivityIndicator</Text>
          <ActivityIndicator size="large" color="#8e1f9fff" />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text>Small, Red ActivityIndicator</Text>
          <ActivityIndicator size="small" color="#ff5858ff" />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text>ActivityIndicator with custom margin</Text>
          <ActivityIndicator style={{ marginTop: 20 }} />
        </View>
      </View>
    </ScrollView>
  );
};

export const ActivityIndicatorOptionSyntax = () => {
  const code = `import { ActivityIndicator, Text, View } from "react-native";

export default App = () => {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size="large" color="#8e1f9fff" />
      <ActivityIndicator size="small" color="#ff5858ff" />
      <ActivityIndicator style={{ marginTop: 20 }} />
    </View>
  );
};`;

  return (
    <ScrollView 
      contentContainerStyle={{ 
        justifyContent: "center", 
        alignItems: "center", 
        paddingVertical: 20 
      }}
    >
      <View style={{ width: "90%" }}>
        <Text style={styles.codeBlock}>{code}</Text>
        
        {/* The Fix: Passed the 'code' variable instead of the component name */}
        <CopyBtn textToCopy={code} />
      </View>
    </ScrollView>
  );
};