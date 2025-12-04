import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../constants/GlobalStyles";

let colorScheme = ['#E7F2EF', '#A1C2BD', '#708993', '#19183B'];

const Items = [
  { id: 1, name: 'ActivityIndicator' },
  { id: 2, name: 'Alert' },
  { id: 3, name: 'Button' },
  { id: 4, name: 'FlatList' },
  { id: 5, name: 'Image' },
  { id: 6, name: 'ImageBackground' },
  { id: 7, name: 'KeyboardAvoidingView' },
  { id: 8, name: 'Modal' },
  { id: 9, name: 'ScrollView' },
  { id: 10, name: 'Switch' },
  { id: 11, name: 'Text'},
  { id: 12, name: 'TextInput' },
  { id: 13, name: 'TouchableHighlight' },
  { id: 14, name: 'TouchableOpacity' },
  { id: 15, name: 'TouchableWithoutFeedback' },
];


const HomeTab = ( {navigation} ) => {
  const onPressCard = (itemName) => {
    navigation.navigate('OpenTab', { name: itemName });
  }

  const FlatListCard = ({item}) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => onPressCard(item.name)}>
        <Text style={{ fontSize: 20, marginVertical: 10, color: colorScheme[0], fontWeight:'500' }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Learn React Native</Text>
      <FlatList
        data={Items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={FlatListCard}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
}

export default HomeTab;
