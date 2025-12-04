import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TextInputOption = () => {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // tweak if header exists
    >
      <ScrollView
        contentContainerStyle={{ 
          alignItems: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ width: "90%" }}>
          <TextInput
            style={styles.input}
            placeholder="Type something using Placeholder..."
            value={text}
            onChangeText={setText}
          />
          <TextInput
            style={styles.input}
            placeholder="Type something using Placeholder with a new color..."
            value={text}
            onChangeText={setText}
            placeholderTextColor="#9d0000ff"
          />
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
          />
          <TextInput
            style={styles.input}
            placeholder="Type something using AutoFill..."
            value={text}
            onChangeText={setText}
          />
          <TextInput
            style={styles.input}
            placeholder="Type something with red cursor..."
            value={text}
            onChangeText={setText}
            cursorColor="#ff5858ff"
          />
          <TextInput
            style={styles.input}
            placeholder="Type something with numeric keyboard..."
            value={text}
            onChangeText={setText}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Type something with limited length of 4.."
            value={text}
            onChangeText={setText}
            maxLength={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Type something with Multiline enabled..."
            value={text}
            onChangeText={setText}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Type something with Multiline enabled + number of lines..."
            value={text}
            onChangeText={setText}
            multiline
            numberOfLines={3}
          />
          <TextInput
            style={styles.input}
            placeholder="Disabled Input..."
            value={text}
            onChangeText={setText}
            editable={false}   // use editable instead of readOnly
          />
          <TextInput
            style={styles.input}
            placeholder="Password Input and center align..."
            value={text}
            onChangeText={setText}
            secureTextEntry
            textAlign="center"
          />
          <TextInput
            style={styles.input}
            placeholder="Type Input and Select the text..."
            value={text}
            onChangeText={setText}
            selectionColor="#ffbabaff"
          />
          <Text style={{ marginTop: 10 }}>You typed: {text}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export const TextInputOptionSyntax = () => {
    const code = `import { Text, TextInput, View } from "react-native";
import { useState } from "react";

export default App = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Type something using Placeholder..."
        value={text}
        onChangeText={setText}
      />
      <TextInput
        placeholder="Type something using Placeholder with a new color..."
        value={text}
        onChangeText={setText}
        placeholderTextColor="#9d0000ff"
      />
      <TextInput
        value={text}
        onChangeText={setText}
      />
      <TextInput
        placeholder="Type something using AutoFill..."
        value={text}
        onChangeText={setText}
      />
      <TextInput
        placeholder="Type something with red cursor..."
        value={text}
        onChangeText={setText}
        cursorColor="#ff5858ff"
      />
      <TextInput
        placeholder="Type something with numeric keyboard..."
        value={text}
        onChangeText={setText}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Type something with limited length of 4.."
        value={text}
        onChangeText={setText}
        maxLength={4}
      />
      <TextInput
        placeholder="Type something with Multiline enabled..."
        value={text}
        onChangeText={setText}
        multiline
      />
      <TextInput
        placeholder="Type something with Multiline enabled + number of lines..."
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={3}
      />
      <TextInput
        placeholder="Disabled Input..."
        value={text}
        onChangeText={setText}
        editable={false}   // use editable instead of readOnly
      />
      <TextInput
        placeholder="Password Input and center align..."
        value={text}
        onChangeText={setText}
        secureTextEntry
        textAlign="center"
      />
      <TextInput
        placeholder="Type Input and Select the text..."
        value={text}
        onChangeText={setText}
        selectionColor="#ffbabaff"
      />
    </View>
  );
};`;

    return (
        <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center',  flex: 1 }}>
                <Text style={styles.codeBlock}>{code}</Text>
                <CopyBtn />
            </View>
        </ScrollView>
    );
};

