import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Component Imports
import { ActivityIndicatorOption, ActivityIndicatorOptionSyntax } from "../components/showActivityIndicator";
import { AlertOption, AlertOptionSyntax } from "../components/showAlert";
import { ButtonOption, ButtonOptionSyntax } from "../components/showButton";
import { TouchableWithoutFeedbackOption, TouchableWithoutFeedbackOptionSyntax } from "../components/showFeedback";
import { FlatListOption, FlatListOptionSyntax } from "../components/showFlatList";
import { TouchableHighlightOption, TouchableHighlightOptionSyntax } from "../components/showHighlight";
import { ImageOption, ImageOptionSyntax } from "../components/showImage";
import { ImageBackgroundOption, ImageBackgroundOptionSyntax } from "../components/showImageBackground";
import { TextInputOption, TextInputOptionSyntax } from '../components/showInput';
import { KeyboardAvoidingViewOption, KeyboardAvoidingViewOptionSyntax } from "../components/showKeyboard";
import { ModalOption, ModalOptionSyntax } from "../components/showModal";
import { TouchableOpacityOption, TouchableOpacityOptionSyntax } from "../components/showOpacity";
import { ScrollViewOption, ScrollViewOptionSyntax } from "../components/showScrollView";
import { SwitchOption, SwitchOptionSyntax } from "../components/showSwitch";
import { TextOption, TextOptionSyntax } from "../components/showText";
import styles from "../constants/GlobalStyles";

const Tab = createMaterialTopTabNavigator();

// 1. Create a dictionary/map of all your components
const ComponentRegistry = {
  ActivityIndicator: { Example: ActivityIndicatorOption, Syntax: ActivityIndicatorOptionSyntax },
  Alert: { Example: AlertOption, Syntax: AlertOptionSyntax },
  Button: { Example: ButtonOption, Syntax: ButtonOptionSyntax },
  FlatList: { Example: FlatListOption, Syntax: FlatListOptionSyntax },
  Image: { Example: ImageOption, Syntax: ImageOptionSyntax },
  ImageBackground: { Example: ImageBackgroundOption, Syntax: ImageBackgroundOptionSyntax },
  KeyboardAvoidingView: { Example: KeyboardAvoidingViewOption, Syntax: KeyboardAvoidingViewOptionSyntax },
  Modal: { Example: ModalOption, Syntax: ModalOptionSyntax },
  ScrollView: { Example: ScrollViewOption, Syntax: ScrollViewOptionSyntax },
  Switch: { Example: SwitchOption, Syntax: SwitchOptionSyntax },
  Text: { Example: TextOption, Syntax: TextOptionSyntax },
  TextInput: { Example: TextInputOption, Syntax: TextInputOptionSyntax },
  TouchableHighlight: { Example: TouchableHighlightOption, Syntax: TouchableHighlightOptionSyntax },
  TouchableOpacity: { Example: TouchableOpacityOption, Syntax: TouchableOpacityOptionSyntax },
  TouchableWithoutFeedback: { Example: TouchableWithoutFeedbackOption, Syntax: TouchableWithoutFeedbackOptionSyntax },
};

// 2. Generic Screen for the "Example" Tab
function ExampleScreen({ route }) {
  const { name } = route.params;
  const ActiveComponent = ComponentRegistry[name]?.Example;

  return (
    <SafeAreaView style={[styles.container, { paddingTop: 0, flex: 1, backgroundColor: '#F8FAFC' }]} edges={['bottom', 'left', 'right']}>
      {ActiveComponent ? (
        <ActiveComponent />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.exampleTextHeading}>{name}</Text>
          <Text style={styles.exampleText}>Preview coming soon.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// 3. Generic Screen for the "Source Code" Tab
function SourceCodeScreen({ route }) {
  const { name } = route.params;
  const ActiveComponent = ComponentRegistry[name]?.Syntax;

  return (
    <SafeAreaView style={[styles.container, { paddingTop: 0, flex: 1, backgroundColor: '#F8FAFC' }]} edges={['bottom', 'left', 'right']}>
      {ActiveComponent ? (
        <ActiveComponent />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.exampleTextHeading}>{name}</Text>
          <Text style={styles.exampleText}>Source code not available.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// 4. Main Tab Navigator
const OpenTab = ({ route }) => {
  // Extract 'name' passed from HomeTab navigation
  const { name } = route.params;

  return (
    <Tab.Navigator 
      style={styles.tabContainer}
      screenOptions={{
        tabBarActiveTintColor: '#19183B',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarIndicatorStyle: { backgroundColor: '#4A90E2', height: 3, borderRadius: 3 },
        tabBarLabelStyle: { fontWeight: '700', fontSize: 13, textTransform: 'none' },
        tabBarStyle: { elevation: 0, shadowOpacity: 0, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
      }}
    >
      <Tab.Screen 
        name="Example Preview" 
        component={ExampleScreen} 
        initialParams={{ name }} 
      />
      <Tab.Screen 
        name="Source Code" 
        component={SourceCodeScreen} 
        initialParams={{ name }} 
      />
    </Tab.Navigator>
  );
};

export default OpenTab;