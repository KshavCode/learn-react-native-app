import React from "react";
import { Text, TouchableOpacity, ToastAndroid, Platform, Alert } from "react-native";
// If using Expo, keep this:
import * as Clipboard from 'expo-clipboard'; 

import styles from "../constants/GlobalStyles";

export default function CopyBtn({ textToCopy }) {
  
  const handleCopy = async () => {
    if (!textToCopy) return;

    // 1. Copy the text to clipboard
    // Expo method:
    await Clipboard.setStringAsync(textToCopy); 

    // 2. Show native feedback based on the operating system
    if (Platform.OS === 'android') {
      // Native Android Toast
      ToastAndroid.show('Copied to Clipboard! ✨', ToastAndroid.SHORT);
    } else {
      // Native iOS fallback
      Alert.alert('Success', 'Copied to Clipboard! ✨');
    }
  };

  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={handleCopy}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Copy to Clipboard</Text>
    </TouchableOpacity>
  );
}