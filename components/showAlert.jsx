import React from "react";
import { Alert, Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const AlertOption = () => {
  const popUp = () => {
    Alert.alert(
      'Title Here',
      'This is a custom message!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK', 
          onPress: () => console.log('OK Pressed')
        },
      ]
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ color: '#64748B', marginBottom: 20, textAlign: 'center' }}>
        Click the button below to trigger the native system alert dialog.
      </Text>
      <TouchableOpacity 
        style={[styles.button, { width: '100%' }]} 
        onPress={popUp}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Show Alert Example</Text>
      </TouchableOpacity>
    </View>
  );
}

export const AlertOptionSyntax = () => {
  const code = `import { Alert, Text, TouchableOpacity, View } from "react-native";
    
const showAlert = () => {
  Alert.alert(
    'Title Here', 
    'This is a custom message!', 
    [
      {
        text: 'Cancel', 
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel' 
      },
      { 
        text: 'OK', 
        onPress: () => console.log('OK Pressed')
      },
    ]
  );    
};

export default App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity onPress={showAlert}>
        <Text>Show Alert</Text>
      </TouchableOpacity>
    </View>
  );
};`;

  return (
    <ScrollView 
      contentContainerStyle={{ padding: 20, alignItems: 'center' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: '100%' }}>
        <Text style={[styles.codeBlock, { marginBottom: 20 }]}>
          {code}
        </Text>
        
        {/* Fixed: Passed the 'code' variable to the button */}
        <CopyBtn textToCopy={code} />
      </View>
    </ScrollView>
  );
}