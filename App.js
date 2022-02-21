import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./screens/SignUp";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SignUp />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
