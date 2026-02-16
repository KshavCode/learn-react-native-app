import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import img2 from "../assets/images/favicon.png";
import img1 from "../assets/images/img1.jpg";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ImageOption = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ color: '#64748B', fontSize: 13, fontWeight: '600', marginBottom: 15 }}>RESIZE MODES</Text>
      
      <View style={{ gap: 20 }}>
        {/* Row 1: Cover & Contain */}
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, marginBottom: 5, color: '#94A3B8' }}>Cover</Text>
            <Image source={img1} style={{ width: '100%', height: 120, borderRadius: 12 }} resizeMode="cover" />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, marginBottom: 5, color: '#94A3B8' }}>Contain</Text>
            <Image source={img1} style={{ width: '100%', height: 120, borderRadius: 12, backgroundColor: '#F1F5F9' }} resizeMode="contain" />
          </View>
        </View>

        {/* Row 2: Stretch & Repeat */}
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, marginBottom: 5, color: '#94A3B8' }}>Stretch</Text>
            <Image source={img2} style={{ width: '100%', height: 120, borderRadius: 12 }} resizeMode="stretch" />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, marginBottom: 5, color: '#94A3B8' }}>Repeat</Text>
            <Image source={img2} style={{ width: '100%', height: 120, borderRadius: 12 }} resizeMode="repeat" />
          </View>
        </View>

        {/* Row 3: Center */}
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, marginBottom: 5, color: '#94A3B8' }}>Center</Text>
          <Image source={img2} style={{ width: '100%', height: 100, borderRadius: 12, backgroundColor: '#F1F5F9' }} resizeMode="center" />
        </View>
      </View>
    </ScrollView>
  );
};

export const ImageOptionSyntax = () => {
  const code = `import { View, Image } from "react-native";
import localImg from "./assets/image.png";

export default App = () => {
  return (
    <View style={{ gap: 20, padding: 20 }}>
      {/* Local Image with Cover */}
      <Image 
        source={localImg} 
        style={{ width: 200, height: 200, borderRadius: 20 }}
        resizeMode="cover"
      />

      {/* Network Image with Contain */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
      />

      {/* Repeating Pattern */}
      <Image 
        source={localImg} 
        style={{ width: '100%', height: 100 }}
        resizeMode="repeat"
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
        <CopyBtn textToCopy={code} />
      </View>
    </ScrollView>
  );
};