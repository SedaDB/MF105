import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";

// Kullanıcı tipi tanımla (User Type)
type User = {
  id: number;
  name: string;
};

type HomeScreenNavigationProp = StackNavigationProp<any, "Home">;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<Props> = ({ navigation }) => {
  // ✅ State'in türünü `User[]` olarak belirtiyoruz.
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users") // ✅ API dönüş türünü belirttik.
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Kullanıcı Listesi</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { userId: item.id })}
          >
            <Text style={{ fontSize: 18, padding: 10, borderBottomWidth: 1 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
