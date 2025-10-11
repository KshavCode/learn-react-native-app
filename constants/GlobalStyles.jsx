import { StyleSheet } from "react-native";

const colorScheme = ["#E7F2EF", "#A1C2BD", "#708993", "#19183B"];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme[0],
    padding: 10,
  },
  card: {
    backgroundColor: colorScheme[2],
    borderRadius: 10,
    padding: 2,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: colorScheme[3],
    width: "80%",
  },
  buttonText: {
    color: colorScheme[1],
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: colorScheme[2],
  },
  exampleTextHeading: {
    fontSize: 35,
    color: colorScheme[2],
    fontStyle: "italic",
  },
  exampleText: {
    marginTop: 10,
    fontSize: 20,
    color: colorScheme[2],
    fontStyle: "italic",
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  tabContainer: {
    paddingTop: 30,
  }
});

export default styles;
