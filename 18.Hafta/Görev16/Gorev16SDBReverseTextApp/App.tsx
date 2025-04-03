import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import TextInputComponent from './src/components/TextInputComponent';
import ButtonComponent from './src/components/ButtonComponent';

export default function App() {
  const [text, setText] = useState<string>('');
  const [reversed, setReversed] = useState<string>('');
  const MAX_LENGTH = 50;

  const handleReverse = () => {
    if (text.length > MAX_LENGTH) {
      Alert.alert('Hata', `Metin ${MAX_LENGTH} karakteri geçemez.`);
      return;
    }
    setReversed(text.split('').reverse().join(''));
  };

  const handleClear = () => {
    setText('');
    setReversed('');
  };

  return (
    <View style={styles.container}>
      <TextInputComponent text={text} setText={setText} />
      <View style={styles.buttonRow}>
        <ButtonComponent onPress={handleReverse} title="Ters Çevir" testID="reverse-button" />
        <ButtonComponent onPress={handleClear} title="Temizle" testID="clear-button" />
      </View>
      <Text style={styles.output}>{reversed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});