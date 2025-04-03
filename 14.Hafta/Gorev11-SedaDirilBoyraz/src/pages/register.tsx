import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>;
interface Props {
    navigation: RegisterScreenNavigationProp;
}


const Register: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Burada kayıt işlemi yapılabilir.
    alert('Kayıt başarılı!');
    navigation.replace('Login'); // Kayıt sonrası Login sayfasına yönlendir
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Kayıt Ol</Text>
      <TextInput 
        placeholder="E-Posta" 
        value={email} 
        onChangeText={setEmail} 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
      />
      <TextInput 
        placeholder="Şifre" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
      <Button title="Giriş Yap" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Register;
