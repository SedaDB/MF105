import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.inlineContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            padding: 8,
            backgroundColor: "#f0a4d0",
          }}
        >
          <Image
            source={require("./assets/icon.png")}
            style={{ width: 40, height: 40 }}
          />

          <Text style={{ fontSize: 18 }}>Toolbar</Text>
        </View>

        <Image
          source={{
            uri: "https://cdn.shopaccino.com/igmguru/articles/What-Is-React-Native.png?v=491",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Selamlar Furkan Türkyılmaz</Text>
        <Image
          source={require("./assets/icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <StatusBar style="dark" />

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>İlk yazım</Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            marginVertical: 20,
            marginHorizontal: 10,
            backgroundColor: "#2973B2",
            padding: 10,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Düzenle</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>İlk yazım</Text>
        </View>
        <Button title="Kaydet" onPress={() => alert("Kaydedildi")} />
      </ScrollView>
    </SafeAreaView>
  );
}
