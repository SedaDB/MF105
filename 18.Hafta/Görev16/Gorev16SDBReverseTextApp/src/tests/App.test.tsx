import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../../App';

test('Boş metin girildiğinde sonuç da boş olmalı', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('text-input');
  const button = getByTestId('reverse-button');

  fireEvent.changeText(input, '');
  fireEvent.press(button);

  expect(getByText('')).toBeTruthy();
});

test('Normal metin ters çevriliyor mu', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('text-input');
  const button = getByTestId('reverse-button');

  fireEvent.changeText(input, 'hello');
  fireEvent.press(button);

  expect(getByText('olleh')).toBeTruthy();
});

test('Özel karakterler ters çevriliyor mu', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('text-input');
  const button = getByTestId('reverse-button');

  fireEvent.changeText(input, '!@#');
  fireEvent.press(button);

  expect(getByText('#@!')).toBeTruthy();
});

test('Temizle butonu çalışıyor mu', () => {
  const { getByTestId, queryByText } = render(<App />);
  const input = getByTestId('text-input');
  const reverseButton = getByTestId('reverse-button');
  const clearButton = getByTestId('clear-button');

  fireEvent.changeText(input, 'deneme');
  fireEvent.press(reverseButton);
  fireEvent.press(clearButton);

  expect(queryByText('emened')).toBeNull();
});