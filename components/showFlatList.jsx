import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

const DATA = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "Fourth Item" },
  { id: "5", title: "Fifth Item" },
];

export const FlatListOption = () => {
  const renderItem = ({ item }) => (
    <View
      style={{
        padding: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        // Subtle shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 16, color: "#1E293B", fontWeight: "600" }}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const FlatListOptionSyntax = () => {
  const code = `import { FlatList, Text, View } from "react-native";

const DATA = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
];

export default App = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
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