import { Button, Linking, ScrollView, Share, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ButtonOption = () => {
  const sendEmail = () => {
    const subject = 'Feedback for Your App';
    const body = 'Dear Team,\n\nI would like to provide the following feedback:\n';
    Linking.openURL('mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body));
  }
  const shareFunction = () => {
    Share.share({
      message: 'Check out this awesome app!',
      url: 'https://google.com',
      title: 'Awesome App',
      dialogTitle: 'Share the App with Friends'
    });
  }
    return (
        <View style={{height:300, justifyContent:'space-around'}}>
            <Button title="Click here without OnPress" touchSoundDisabled={false}/>
            <Button title="Click here with OnPress" onPress={()=>{alert("Clicked!")}} color="#8e1f9fff"/>
            <Button title="Click here (Disabled)" disabled={true}/>
            <Button title="Click here (Without Sound)" touchSoundDisabled={true}/>
            <Button title="Email Button" onPress={sendEmail}/>
            <Button title="Share Button" onPress={shareFunction}/>
        </View>
    )
}

export const ButtonOptionSyntax = () => {
    const code = `import { Button, View } from "react-native";

export default App = () => {
  const sendEmail = () => {
    const subject = 'Feedback for Your App';
    const body = 'Dear Team,\n\nI would like to provide the following feedback:\n';
    Linking.openURL('mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body));
  }
  const shareFunction = () => {
    Share.share({
      message: 'Check out this awesome app!',
      url: 'https://google.com',
      title: 'Awesome App',
      dialogTitle: 'Share the App with Friends'
    });
  }
  return (
    <View style={{height:300, justifyContent:'space-around'}}>
      <Button 
        title="Click here without OnPress"
      />
      <Button 
        title="Click here with OnPress" 
        onPress={()=>{alert("Clicked!")}} 
        color="#8e1f9fff"
      />
      <Button 
        title="Click here (Disabled)"
        disabled={true}
      />
      <Button 
        title="Click here (Without Sound)"
        touchSoundDisabled={true}
      />
      <Button 
        title="Email Button" 
        onPress={sendEmail}
      />
      <Button 
        title="Share Button" 
        onPress={shareFunction}
      />
    </View>
  )
};`;

    return (
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={styles.codeBlock}>{code}</Text>
            <CopyBtn />
          </View>
        </ScrollView>
    );
}