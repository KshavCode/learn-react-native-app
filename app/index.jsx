// App.js or index.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeTab from './tabs/HomeTab';
import OpenTab from './tabs/OpenTab';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="OpenTab" component={
          ({ route }) => <OpenTab name={route.params.name} />
        } />
      </Stack.Navigator>
  );
}
export default App;