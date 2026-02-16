import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

const demoImage = {
  uri: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
};

export const ImageBackgroundOption = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingVertical: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: "90%", gap: 20 }}>
        {/* Basic Example */}
        <ImageBackground
          source={demoImage}
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Basic ImageBackground
            </Text>
          </View>
        </ImageBackground>

        {/* Blur Example */}
        <ImageBackground
          source={demoImage}
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
          blurRadius={10}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Blur Radius: 10
          </Text>
        </ImageBackground>

        {/* Rounded Corners Example */}
        <ImageBackground
          source={demoImage}
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Rounded Corners
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export const ImageBackgroundOptionSyntax = () => {
  const code = `import { ImageBackground, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default App = () => (
  <View style={{ flex: 1 }}>
    <ImageBackground 
      source={image} 
      resizeMode="cover" 
      style={{ flex: 1, justifyContent: "center" }}
      imageStyle={{ borderRadius: 20 }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>
        Inside Content
      </Text>
    </ImageBackground>
  </View>
);`;

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