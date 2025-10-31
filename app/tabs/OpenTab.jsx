import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AlertOption, AlertOptionSyntax } from "../../components/Alert";
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
  else {
    return (
      <SafeAreaView style={styles.container}> 
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

// https://www.npmjs.com/package/@rivascva/react-native-code-editor for code editor