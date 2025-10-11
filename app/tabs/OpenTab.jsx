import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../constants/GlobalStyles";

const Tab = createMaterialTopTabNavigator();

function ExampleScreen({name}) {
  if (name==="Alert") {
    const popUp = () => {
      Alert.alert('Title Here','This is an custom message!', [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
      );
    }
    return (
      <SafeAreaView style={[styles.container, {paddingTop: 0}]}> 
          <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%'}}>
            <TouchableOpacity style={[styles.button]} onPress={popUp}>
              <Text style={styles.buttonText}>This is an Alert Button</Text>
            </TouchableOpacity>
          </SafeAreaView>
      </SafeAreaView>
    );
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
function SourceCodeScreen() {
  return (
    <SafeAreaView style={styles.container}> 
        <Text style={styles.exampleText}>Source Code</Text>
    </SafeAreaView>
  );
}


const OpenTab = ({name}) => {
    return (
        <Tab.Navigator style={styles.tabContainer}>
          <Tab.Screen name="Example" component={() => {
            return <ExampleScreen name={name} />
          }} />
          <Tab.Screen name="Source Code" component={SourceCodeScreen} />
        </Tab.Navigator>
    )
}

export default OpenTab;

// https://www.npmjs.com/package/@rivascva/react-native-code-editor for code editor