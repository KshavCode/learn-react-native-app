import { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ModalOption = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <View style={{ width: "90%" }}>

        {/* Open Modal Button */}
        <Pressable
          onPress={() => setVisible(true)}
          style={{
            backgroundColor: "#8e1f9fff",
            padding: 12,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Open Modal</Text>
        </Pressable>

        {/* Modal */}
        <Modal
          visible={visible}
          transparent={true}
          animationType="slide"
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.4)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "80%",
                backgroundColor: "#fff",
                padding: 20,
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, marginBottom: 20 }}>
                Basic modal!
              </Text>

              <Pressable
                onPress={() => setVisible(false)}
                style={{
                  backgroundColor: "#ff5858ff",
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>
                  Close Modal
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
export const ModalOptionSyntax = () => {
  const code = `import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setVisible(true)}>
        <Text>Open Modal</Text>
      </Pressable>

      <Modal visible={visible} transparent={true} animationType="slide">
        <View>
          <View>
            <Text>Basic Modal!</Text>
            <Pressable onPress={() => setVisible(false)}>
              <Text>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
