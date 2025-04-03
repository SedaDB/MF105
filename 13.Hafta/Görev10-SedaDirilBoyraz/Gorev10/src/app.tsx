import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import fetchUsers from './api/service';

export default function App() {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchUser = async () => {
    try {
      const data = await fetchUsers(Number(userId));
      setUserData(data);
      setError(null);
    } catch (err) {
      setError('Kullanıcı bilgileri alınamadı.');
      setUserData(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı ID girin"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
      />
      <Button title="Kullanıcıyı Getir" onPress={handleFetchUser} />
      {error && <Text style={styles.error}>{error}</Text>}
      {userData && (
        <View>
          <Text style={styles.name}>İsim: {userData.name}</Text>
          {userData.posts && userData.posts.map((post: any) => (
            <View key={post.id} style={styles.post}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  post: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  postTitle: {
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
}); 