import { ScrollView, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ScrollViewOption = () => {
  return (
    <View>
      <ScrollView
      contentContainerStyle={{
        alignItems: "center",
      }}
      horizontal
    >
      <View style={{ width: "90%", gap: 5, flexDirection:'row' }}>
        <Text style={{ fontSize: 16 }}>
          Scroll left to see more content...
        </Text>

        {Array.from({ length: 15 }).map((_, i) => (
          <View
            key={i}
            style={{
              padding: 14,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#ddd",
            }}
          >
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <View style={{ width: "90%", gap: 16 }}>
          <Text style={{ fontSize: 16 }}>
            Scroll down to see more content...
          </Text>

          {Array.from({ length: 15 }).map((_, i) => (
            <View
              key={i}
              style={{
                padding: 14,
                backgroundColor: "#fff",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#ddd",
              }}
            >
              <Text>Item {i + 1}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export const ScrollViewOptionSyntax = () => {
  const code = `import { ScrollView, Text, View } from "react-native";

export default App = () => {
  return (
    <View>
      <ScrollView horizontal>
      <View>
        <Text>
          Scroll left to see more content...
        </Text>

        {Array.from({ length: 15 }).map((_, i) => (
          <View key={i}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
      <ScrollView>
        <View>
          <Text>
            Scroll down to see more content...
          </Text>

          {Array.from({ length: 15 }).map((_, i) => (
            <View key={i}>
              <Text>Item {i + 1}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
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
