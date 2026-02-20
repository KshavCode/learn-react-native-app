import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TextOption = () => {
  return (
    <ScrollView 
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ gap: 24 }}>
        
        {/* Basic & Nested Styling */}
        <View>
          <Text style={localStyles.label}>NESTED STYLING</Text>
          <Text style={localStyles.baseText}>
            You can nest text to apply <Text style={localStyles.boldText}>bold weights</Text> or 
            <Text style={localStyles.coloredText}> different colors</Text> inline.
          </Text>
        </View>

        {/* Text Truncation */}
        <View>
          <Text style={localStyles.label}>TRUNCATION (Lines: 2)</Text>
          <Text numberOfLines={2} style={localStyles.baseText}>
            This text is very long and will be truncated after two lines. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Selectable Text */}
        <View>
          <Text style={localStyles.label}>SELECTABLE TEXT</Text>
          <Text selectable style={localStyles.baseText}>
            Long press this specific paragraph to select and copy parts of this text.
          </Text>
        </View>

        {/* Alignment & Decoration */}
        <View>
          <Text style={localStyles.label}>ALIGNMENT & DECORATION</Text>
          <Text style={[localStyles.baseText, { textAlign: 'center', textDecorationLine: 'underline' }]}>
            Centered and Underlined
          </Text>
          <Text style={[localStyles.baseText, { textAlign: 'right', fontStyle: 'italic', color: '#94A3B8' }]}>
            Right Aligned Italic
          </Text>
        </View>

      </View>
    </ScrollView>
  );
};

export const TextOptionSyntax = () => {
  const code = `import { Text, View, StyleSheet } from "react-native";

export default App = () => {
  return (
    <View style={styles.container}>
      {/* Standard Text */}
      <Text style={styles.title}>Hello World</Text>

      {/* Nested Text */}
      <Text style={styles.body}>
        This is <Text style={{fontWeight: 'bold'}}>Bold</Text> within a sentence.
      </Text>

      {/* Truncation */}
      <Text numberOfLines={1}>
        This is a very long text that will end with ellipses...
      </Text>

      {/* Selectable */}
      <Text selectable={true}>You can copy me!</Text>
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

const localStyles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 8,
  },
  baseText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1E293B',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#0F172A',
  },
  coloredText: {
    color: '#3B82F6',
    fontWeight: '600',
  },
});