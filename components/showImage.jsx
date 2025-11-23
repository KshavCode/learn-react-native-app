import { Image, ScrollView, Text, View } from "react-native";
import img2 from "../assets/images/favicon.png";
import img1 from "../assets/images/img1.jpg";
import styles from "../constants/GlobalStyles";
import CopyBtn from "./CopyBtn";

export const ImageOption = () => {
  return (
    <View style={{gap:20}}>
        <View style={{alignItems:'flex-start', gap:10, flexDirection:'row'}}>
            <Image source={img1} style={{width:'50%', height:100, borderRadius:30}}/>
            <Image source={img2} style={{width:'50%', height:100}} resizeMode="cover"/>
        </View>
        <View style={{alignItems:'flex-start', gap:10, flexDirection:'row'}}>
            <Image source={img2} style={{width:'50%', height:100}} resizeMode="repeat"/>
            <Image source={img1} style={{width:'50%', height:100, borderRadius:30}} resizeMode="contain"/>
        </View>
        <View style={{alignItems:'flex-start', gap:10, flexDirection:'row'}}>
            <Image source={img2} style={{width:'50%', height:100}} resizeMode="stretch"/>
        </View>
    </View>
    )
}

export const ImageOptionSyntax = () => {
    const code = `import { View, Image } from "react-native";

export default App = () => {
    return (
    <View style={{gap:20}}>
        <View>
            <Image 
                source={img1} 
                style={{
                    borderRadius:30}
                }/>
            <Image 
                source={img2} 
                resizeMode="cover"
            />
        </View>
        <View>
            <Image 
                source={img2} 
                resizeMode="repeat"
            />
            <Image 
                source={img1} 
                resizeMode="contain"
            />
        </View>
        <View>
            <Image 
                source={img2} 
                resizeMode="stretch"
            />
        </View>
    </View>
  `;

    return (
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={styles.codeBlock}>{code}</Text>
            <CopyBtn />
          </View>
        </ScrollView>
    );
}