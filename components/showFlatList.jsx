import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

const DATA = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "Fourth Item" },
  { id: "5", title: "Fifth Item" },
];

export const FlatListOption = () => {
  const renderItem = ({ item }) => (
    <View
      style={{
        padding: 12,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
      }}
    >
      <Text style={{ fontSize: 16 }}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export const FlatListOptionSyntax = () => {
  const code = `import { FlatList, Text, View } from "react-native";

const DATA = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "Fourth Item" },
  { id: "5", title: "Fifth Item" },
];

export default App = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
