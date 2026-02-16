import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ScrollViewOption = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC' }}>
      {/* Horizontal ScrollView Section */}
      <View style={{ paddingVertical: 15 }}>
        <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: '700', color: '#64748B', fontSize: 12 }}>
          HORIZONTAL SCROLL
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <View style={{ flexDirection: 'row', gap: 12 }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <View
                key={i}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#FFF",
                  borderRadius: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: "#E2E8F0",
                  elevation: 2,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 4,
                }}
              >
                <Text style={{ fontWeight: '600', color: '#1E293B' }}>Card {i + 1}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Vertical ScrollView Section */}
      <View style={{ flex: 1 }}>
        <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: '700', color: '#64748B', fontSize: 12 }}>
          VERTICAL SCROLL
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        >
          <View style={{ gap: 12 }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <View
                key={i}
                style={{
                  padding: 20,
                  backgroundColor: "#FFF",
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#E2E8F0",
                }}
              >
                <Text style={{ color: '#1E293B', fontWeight: '500' }}>List Item {i + 1}</Text>
                <Text style={{ color: '#94A3B8', fontSize: 12, marginTop: 4 }}>
                  Scrollable content block example
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export const ScrollViewOptionSyntax = () => {
  const code = `import { ScrollView, Text, View } from "react-native";

export default App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Horizontal Scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
           <View style={styles.card}><Text>1</Text></View>
           <View style={styles.card}><Text>2</Text></View>
        </View>
      </ScrollView>

      {/* Vertical Scroll */}
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text>Large amount of content...</Text>
      </ScrollView>
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