import { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const SwitchOption = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={{ height: 100, width:'60%', justifyContent: "space-around" }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Switch
        trackColor={{ false: "#bc79ffff", true: "#bbff83ff" }}
        thumbColor="#ff41ffff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Switch
        trackColor={{ false: "#ffb743ff", true: "#9d34ffff" }}
        thumbColor="#ff3ba7ff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export const SwitchOptionSyntax = () => {
  const code = `import { Switch, View } from "react-native";

export default App = () => {
  return (
    <View style={{height: 100, width:'60%', justifyContent: "space-around"}}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Switch
        trackColor={{ false: "#bc79ffff", true: "#bbff83ff" }}
        thumbColor="#ff41ffff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Switch
        trackColor={{ false: "#ffb743ff", true: "#9d34ffff" }}
        thumbColor="#ff3ba7ff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
};`;

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={styles.codeBlock}>{code}</Text>
      <CopyBtn />
    </View>
  );
};
