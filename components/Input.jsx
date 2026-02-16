import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const TextInputOption = () => {
    const [text, setText] = useState("");

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%' }}>
            <View style={{ width: '80%' }}>
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something using Placeholder..."
                    value={text}
                    onChangeText={setText}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something using Placeholder with a new color..."
                    value={text}
                    onChangeText={setText}
                    placeholderTextColor='#9d0000ff'
                />
                <TextInput
                    style={[styles.input]}
                    value={text}
                    onChangeText={setText}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something using AutoFill..."
                    value={text}
                    onChangeText={setText}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something with red cursor..."
                    value={text}
                    onChangeText={setText}
                    cursorColor='#ff5858ff'
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something with numeric keyboard..."
                    value={text}
                    onChangeText={setText}
                    keyboardType="numeric"
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something with limited length of 4.."
                    value={text}
                    onChangeText={setText}
                    maxLength={4}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something with Multiline enabled..."
                    value={text}
                    onChangeText={setText}
                    multiline={true}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type something with Multiline enabled + number of lines..."
                    value={text}
                    onChangeText={setText}
                    multiline={true}
                    numberOfLines={3}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Disabled Input..."
                    value={text}
                    onChangeText={setText}
                    readOnly={true}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Password Input and center align..."
                    value={text}
                    onChangeText={setText}
                    secureTextEntry={true}
                    textAlign="center"
                />
                <TextInput
                    style={[styles.input]}
                    placeholder="Type Input and Select the text..."
                    value={text}
                    onChangeText={setText}
                    selectionColor='#ffbabaff'
                />
                <Text style={{ marginTop: 10 }}>You typed: {text}</Text>
            </View>
        </SafeAreaView>
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
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
      <Text>You typed: {text}</Text>
    </View>
  );
};`;

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={styles.codeBlock}>{code}</Text>
            <CopyBtn />
        </SafeAreaView>
    );
};

