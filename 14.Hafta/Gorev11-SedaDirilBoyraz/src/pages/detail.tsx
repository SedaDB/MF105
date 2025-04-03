import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Detail: { userId: number };
};

type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, "Detail">;
type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

interface Props {
  navigation?: DetailScreenNavigationProp; 
  route?: DetailScreenRouteProp;
}

const Detail: React.FC<Props> = ({ route }) => {
  const userId = route?.params?.userId;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!userId) return;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [userId]);

  if (!user) {
    return <Text>Yükleniyor...</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{user.name}</Text>
      <Text>E-Posta: {user.email}</Text>
      <Text>Telefon: {user.phone}</Text>
      <Text>Web Site: {user.website}</Text>
    </View>
  );
};

export default Detail;
