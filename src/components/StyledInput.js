import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function StyledInput({
  placeholder = '',
  onChangeText,
  multiline = false,
  numberOfLines = 1,
}) {
  return (
    <TextInput
      style={inputStyles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
}

const inputStyles = StyleSheet.create({
  input: {
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#FDF9EC',
    textAlignVertical: 'top',
    elevation: 3,
  },
});
