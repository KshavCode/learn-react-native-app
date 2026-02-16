import React, { useState } from "react";
import { 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Text, 
  TextInput, 
  View 
} from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TextInputOption = () => {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#F8FAFC' }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        contentContainerStyle={{ padding: 20, alignItems: "center" }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "100%", gap: 12 }}>
          <Text style={{ color: '#64748B', fontSize: 13, fontWeight: '700', marginBottom: 5 }}>INPUT VARIANTS</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Default Placeholder"
            value={text}
            onChangeText={setText}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Custom Placeholder Color"
            value={text}
            onChangeText={setText}
            placeholderTextColor="#9d0000"
          />

          <TextInput
            style={styles.input}
            placeholder="Custom Cursor Color"
            value={text}
            onChangeText={setText}
            cursorColor="#ff5858"
          />

          <TextInput
            style={styles.input}
            placeholder="Numeric Keyboard"
            value={text}
            onChangeText={setText}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Max Length (4 chars)"
            value={text}
            onChangeText={setText}
            maxLength={4}
          />

          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
            placeholder="Multiline Input"
            value={text}
            onChangeText={setText}
            multiline
            numberOfLines={3}
          />

          <TextInput
            style={[styles.input, { backgroundColor: '#E2E8F0', color: '#94A3B8' }]}
            placeholder="Disabled Input"
            value={text}
            editable={false}
          />

          <TextInput
            style={[styles.input, { textAlign: 'center' }]}
            placeholder="Secure Password Entry"
            value={text}
            onChangeText={setText}
            secureTextEntry
          />

          <View style={{ marginTop: 10, padding: 15, backgroundColor: '#FFF', borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0' }}>
            <Text style={{ color: '#475569', fontWeight: '600' }}>Live Output:</Text>
            <Text style={{ color: '#1E293B', marginTop: 4 }}>{text || "Start typing..."}</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const TextInputOptionSyntax = () => {
  const code = `import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

export default App = () => {
  const [value, setValue] = useState("");

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}
        placeholder="Standard Input"
        onChangeText={setValue}
        value={value}
      />

      <TextInput
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}
        placeholder="Password"
        secureTextEntry={true}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Numbers only"
      />

      <Text>You typed: {value}</Text>
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