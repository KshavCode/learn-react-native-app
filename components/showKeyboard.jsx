import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const KeyboardAvoidingViewOption = () => {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1, padding: 20 }}>
        <ScrollView
          style={{ flex: 1, marginTop: 20 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={{ marginBottom: 10 }}>
            This is some filler content to show movement.
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Line 1: Lorem ipsum dolor sit amet.
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Line 2: Consectetur adipiscing elit.
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Line 3: Sed do eiusmod tempor incididunt.
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Line 4: Ut labore et dolore magna aliqua.
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Line 5: Duis aute irure dolor in reprehenderit.
          </Text>
        </ScrollView>

        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.input}
            placeholder="I'm the one that avoids the keyboard"
            value={text}
            onChangeText={setText}
          />
          <Text style={{ marginTop: 8 }}>You typed: {text}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};


export const KeyboardAvoidingViewOptionSyntax = () => {
  const code = `import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default App = () => {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View>
        <View>
          <Text>
            KeyboardAvoidingView Demo
          </Text>
          <Text>
            Focus the bottom input and watch this area move up.
          </Text>
        </View>

        <ScrollView>
          <Text>This is some filler content to show movement.</Text>
          <Text>Line 1</Text>
          <Text>Line 2</Text>
          <Text>Line 3</Text>
          <Text>Line 4</Text>
          <Text>Line 5</Text>
        </ScrollView>
        <View>
          <TextInput}
            placeholder="I'm the one that avoids the keyboard"
            value={text}
            onChangeText={setText}
          />
          <Text>You typed: {text}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};`;

  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={styles.codeBlock}>{code}</Text>
        <CopyBtn />
      </View>
    </ScrollView>
  );
};
