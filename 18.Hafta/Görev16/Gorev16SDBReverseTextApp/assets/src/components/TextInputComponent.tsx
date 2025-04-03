import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  text: string;
  setText: (value: string) => void;
};

const TextInputComponent: React.FC<Props> = ({ text, setText }) => (
  <TextInput
    style={styles.input}
    value={text}
    onChangeText={setText}
    placeholder="Metin girin"
    testID="text-input"
    maxLength={100}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default TextInputComponent;