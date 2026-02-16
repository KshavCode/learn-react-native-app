import React, { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ModalOption = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
      <View style={{ width: "90%", alignItems: 'center' }}>
        <Text style={{ color: '#64748B', textAlign: 'center', marginBottom: 20 }}>
          Modals are separate views that sit on top of your current screen content.
        </Text>

        <Pressable
          onPress={() => setVisible(true)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#701a75" : "#8e1f9f",
              paddingVertical: 14,
              paddingHorizontal: 24,
              borderRadius: 12,
              elevation: 3,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            },
          ]}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>Launch Demo Modal</Text>
        </Pressable>

        <Modal
          visible={visible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setVisible(false)}
        >
          <View style={localStyles.overlay}>
            <View style={localStyles.modalContainer}>
              <View style={localStyles.iconCircle}>
                <Text style={{ fontSize: 24 }}>✨</Text>
              </View>
              <Text style={localStyles.modalTitle}>Premium Modal</Text>
              <Text style={localStyles.modalText}>
                This is a transparent modal with a darkened backdrop and customized container.
              </Text>

              <Pressable
                onPress={() => setVisible(false)}
                style={localStyles.closeButton}
              >
                <Text style={localStyles.closeButtonText}>Dismiss</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export const ModalOptionSyntax = () => {
  const code = `import { useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet } from "react-native";

export default App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>

      <Modal 
        visible={visible} 
        transparent={true} 
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Hello World!</Text>
            <Pressable onPress={() => setVisible(false)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};`;

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

const localStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.7)", // Slate-900 with opacity
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  iconCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#FAF5FF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1E293B",
    marginBottom: 8,
  },
  modalText: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: "#F1F5F9",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: "#475569",
    fontWeight: "700",
    fontSize: 15,
  },
});