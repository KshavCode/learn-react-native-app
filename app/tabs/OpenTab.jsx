import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicatorOption, ActivityIndicatorOptionSyntax } from "../../components/showActivityIndicator";
import { AlertOption, AlertOptionSyntax } from "../../components/showAlert";
import { ButtonOption, ButtonOptionSyntax } from "../../components/showButton";
import { TouchableWithoutFeedbackOption, TouchableWithoutFeedbackOptionSyntax } from "../../components/showFeedback";
import { FlatListOption, FlatListOptionSyntax } from "../../components/showFlatList";
import { TouchableHighlightOption, TouchableHighlightOptionSyntax } from "../../components/showHighlight";
import { ImageOption, ImageOptionSyntax } from "../../components/showImage";
import { ImageBackgroundOption, ImageBackgroundOptionSyntax } from "../../components/showImageBackground";
import { TextInputOption, TextInputOptionSyntax } from '../../components/showInput';
import { KeyboardAvoidingViewOption, KeyboardAvoidingViewOptionSyntax } from "../../components/showKeyboard";
import { ModalOption, ModalOptionSyntax } from "../../components/showModal";
import { TouchableOpacityOption, TouchableOpacityOptionSyntax } from "../../components/showOpacity";
import { ScrollViewOption, ScrollViewOptionSyntax } from "../../components/showScrollView";
import { SwitchOption, SwitchOptionSyntax } from "../../components/showSwitch";
import styles from "../../constants/GlobalStyles";

const Tab = createMaterialTopTabNavigator();
function ExampleScreen({name}) {
  if (name==="Alert") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <AlertOption/>
      </SafeAreaView>
    )
  }
  else if (name==="Button") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <ButtonOption/>
      </SafeAreaView>
    )
  }
  else if (name==="Switch") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <SwitchOption/>
      </SafeAreaView>
    )
  }
  else if (name==="Image") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <ImageOption/>
      </SafeAreaView>
    )
  }
  else if (name==="TouchableOpacity") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TouchableOpacityOption/>
      </SafeAreaView>
    )
  }
  else if (name==="TouchableHighlight") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TouchableHighlightOption/>
      </SafeAreaView>
    )
  }
  else if (name==="TouchableWithoutFeedback") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TouchableWithoutFeedbackOption/>
      </SafeAreaView>
    )
  }
  else if (name==="TextInput") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TextInputOption/>
      </SafeAreaView>
    )
  }
  else if (name==="ImageBackground") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ImageBackgroundOption/>
      </SafeAreaView>
    )
  }
  else if (name==="KeyboardAvoidingView") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <KeyboardAvoidingViewOption/>
      </SafeAreaView>
    )
  }
  else if (name==="FlatList") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <FlatListOption/>
      </SafeAreaView>
    )
  }
  else if (name==="ActivityIndicator") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ActivityIndicatorOption/>
      </SafeAreaView>
    )
  }
  else if (name==="Modal") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ModalOption/>
      </SafeAreaView>
    )
  }
  else if (name==="ScrollView") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ScrollViewOption/>
      </SafeAreaView>
    )
  }
  else {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
          <Text style={styles.exampleTextHeading}>{name}</Text>
          <Text style={styles.exampleText}>{name}</Text>
      </SafeAreaView>
    );
  }
}
function SourceCodeScreen({name}) {
  if (name==="Alert") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <AlertOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="Button") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <ButtonOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="Switch") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <SwitchOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="Image") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
        <ImageOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="TouchableOpacity") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TouchableOpacityOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="TouchableHighlight") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TouchableHighlightOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="TouchableWithoutFeedback") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TouchableWithoutFeedbackOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="TextInput") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <TextInputOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="ImageBackground") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ImageBackgroundOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="KeyboardAvoidingView") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <KeyboardAvoidingViewOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="FlatList") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <FlatListOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="ActivityIndicator") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ActivityIndicatorOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="Modal") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ModalOptionSyntax/>
      </SafeAreaView>
    )
  }
  else if (name==="ScrollView") {
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}>
        <ScrollViewOptionSyntax/>
      </SafeAreaView>
    )
  }
  else {
    return (
      <SafeAreaView style={[styles.container]}> 
          <Text style={styles.exampleText}>Source Code</Text>
      </SafeAreaView>
    );
  }
}


const OpenTab = ({name}) => {
    return (
        <Tab.Navigator style={styles.tabContainer}>
          <Tab.Screen name="Example" component={() => {
            return <ExampleScreen name={name} />
          }} />
          <Tab.Screen name="Source Code" component={() => {
            return <SourceCodeScreen name={name} />
          }} />
        </Tab.Navigator>
    )
}

export default OpenTab;
