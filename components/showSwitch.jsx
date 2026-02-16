import React, { useState } from "react";
import { Switch, Text, View, ScrollView } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const SwitchOption = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
      <View style={{ width: '90%', backgroundColor: '#FFF', padding: 25, borderRadius: 20, gap: 20, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10 }}>
        
        <Text style={{ color: '#64748B', fontSize: 13, fontWeight: '700', marginBottom: 10 }}>SWITCH VARIANTS</Text>

        {/* Standard Android/iOS Look */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#1E293B', fontWeight: '500' }}>System Default</Text>
          <Switch
            trackColor={{ false: "#CBD5E1", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#2563EB" : "#F4F3F4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* Vibrant/Neon Look */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#1E293B', fontWeight: '500' }}>Neon Purple</Text>
          <Switch
            trackColor={{ false: "#bc79ff", true: "#bbff83" }}
            thumbColor={isEnabled ? "#ff41ff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* High Contrast Look */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#1E293B', fontWeight: '500' }}>Candy Store</Text>
          <Switch
            trackColor={{ false: "#ffb743", true: "#9d34ff" }}
            thumbColor={isEnabled ? "#ff3ba7" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={{ marginTop: 10, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#F1F5F9' }}>
          <Text style={{ color: '#64748B', fontSize: 12, textAlign: 'center' }}>
            State: <Text style={{ color: isEnabled ? '#22C55E' : '#EF4444', fontWeight: 'bold' }}>{isEnabled ? "ENABLED" : "DISABLED"}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export const SwitchOptionSyntax = () => {
  const code = `import React, { useState } from "react";
import { Switch, View, Text } from "react-native";

export default App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggle = () => setIsEnabled(prev => !prev);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggle}
        value={isEnabled}
      />
      <Text>{isEnabled ? "On" : "Off"}</Text>
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