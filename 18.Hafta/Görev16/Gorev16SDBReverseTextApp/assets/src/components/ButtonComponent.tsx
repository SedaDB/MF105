import React from 'react';
import { Button } from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
  testID?: string;
};

const ButtonComponent: React.FC<Props> = ({ onPress, title, testID }) => (
  <Button title={title} onPress={onPress} testID={testID} />
);

export default ButtonComponent;