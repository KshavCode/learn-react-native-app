import React from "react";
import { Button, Linking, ScrollView, Share, Text, View, Alert } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ButtonOption = () => {
  const sendEmail = () => {
    const subject = 'Feedback for Your App';
    const body = 'Dear Team,\n\nI would like to provide the following feedback:\n';
    Linking.openURL('mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body));
  }

  const shareFunction = async () => {
    try {
      await Share.share({
        message: 'Check out this awesome app!',
        url: 'https://google.com',
        title: 'Awesome App',
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={{ gap: 15 }}>
        <Text style={{ color: '#64748B', fontSize: 13, fontWeight: '600', marginBottom: 5 }}>STANDARD BUTTONS</Text>
        
        <Button title="Default Button" onPress={() => {}} />
        
        <Button title="Custom Color" onPress={() => alert("Clicked!")} color="#8e1f9fff" />
        
        <Button title="Disabled State" disabled={true} onPress={() => {}} />

        <Text style={{ color: '#64748B', fontSize: 13, fontWeight: '600', marginTop: 15, marginBottom: 5 }}>UTILITY BUTTONS</Text>
        
        <Button title="Send Email" onPress={sendEmail} color="#3b82f6" />
        
        <Button title="Open Share Sheet" onPress={shareFunction} color="#22c55e" />
      </View>
    </ScrollView>
  );
}

export const ButtonOptionSyntax = () => {
  const code = `import { Button, View, Linking, Share, Alert } from "react-native";

export default App = () => {
  const sendEmail = () => {
    const url = 'mailto:support@example.com?subject=Help';
    Linking.openURL(url);
  };

  const shareApp = async () => {
    await Share.share({
      message: 'Check out this awesome app!',
    });
  };

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Button 
        title="Standard Button" 
        onPress={() => console.log('Pressed')} 
      />
      
      <Button 
        title="Colored Button" 
        color="#8e1f9fff" 
        onPress={() => {}} 
      />
      
      <Button 
        title="Email Us" 
        onPress={sendEmail} 
      />
      
      <Button 
        title="Share App" 
        onPress={shareApp} 
      />
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
        
        {/* Fixed: Passed the code variable */}
        <CopyBtn textToCopy={code} />
      </View>
    </ScrollView>
  );
}