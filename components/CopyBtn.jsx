import { Text, TouchableOpacity } from "react-native";
import styles from "../constants/GlobalStyles";

export default function CopyBtn() {
    return (
        <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>
        </TouchableOpacity>
    )
}