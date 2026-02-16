import {
    ImageBackground,
    ScrollView,
    Text,
    View
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
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ width: "90%", gap: 16 }}>
        <ImageBackground
          source={demoImage}
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Basic ImageBackground
          </Text>
        </ImageBackground>

        {/* With blurRadius */}
        <ImageBackground
          source={demoImage}
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
          blurRadius={5}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Blur Radius: 5
          </Text>
        </ImageBackground>

        {/* With borderRadius using imageStyle */}
        <ImageBackground
          source={demoImage}
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            overflow: "hidden",
          }}
          imageStyle={{ borderRadius: 16 }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Rounded Corners
          </Text>
        </ImageBackground>

      </View>
    </ScrollView>
  );
};

export const ImageBackgroundOptionSyntax = () => {
  const code = `import { ImageBackground, ScrollView, Text, View } from "react-native";

const demoImage = "link_to_your_image"

export default App = () => {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={demoImage}>
          <Text>Basic ImageBackground</Text>
        </ImageBackground>

        <ImageBackground source={demoImage} blurRadius={5}>
          <Text>Blur Radius: 5</Text>
        </ImageBackground>

        <ImageBackground source={demoImage} imageStyle={{ borderRadius: 16 }}>
          <Text>Rounded Corners</Text>
        </ImageBackground>
      </View>
    </ScrollView>
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
