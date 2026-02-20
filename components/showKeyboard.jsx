import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const KeyboardAvoidingViewOption = () => {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#F8FAFC' }}
      // The Fix: Android natively resizes the window in Expo apps. 
      // Using 'undefined' prevents the double-jump glitch on Android.
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 110 : 0} 
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, padding: 20 }}>
          
          <View style={{ marginBottom: 15 }}>
            <Text style={{ color: '#1E293B', fontSize: 18, fontWeight: '700' }}>
              Keyboard Interaction
            </Text>
            <Text style={{ color: '#64748B', fontSize: 14 }}>
              Focus the input below. Tap anywhere else to dismiss.
            </Text>
          </View>

          <ScrollView
            style={{ flex: 1, backgroundColor: '#FFF', borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0' }}
            contentContainerStyle={{ padding: 15 }}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag" // Premium feel: dismisses keyboard when user scrolls
            showsVerticalScrollIndicator={false}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Text key={item} style={{ marginBottom: 15, color: '#475569' }}>
                Filler Line {item}: This content will slide up to remain visible when the keyboard opens.
              </Text>
            ))}
          </ScrollView>

          <View style={{ marginTop: 20, gap: 10 }}>
            <TextInput
              style={[styles.input, { backgroundColor: '#FFF' }]}
              placeholder="Tap here to open keyboard..."
              value={text}
              onChangeText={setText}
              placeholderTextColor="#94A3B8"
            />
            <View style={{ padding: 10, backgroundColor: '#F1F5F9', borderRadius: 8 }}>
              <Text style={{ fontSize: 12, color: '#64748B' }}>Live Output: {text || "..."}</Text>
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const KeyboardAvoidingViewOptionSyntax = () => {
  const code = `import { KeyboardAvoidingView, Platform, TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";

export default App = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      // Android often handles this automatically in modern apps
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>
          <TextInput 
            placeholder="I avoid the keyboard smoothly" 
            style={{ borderWidth: 1, padding: 15, borderRadius: 10 }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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