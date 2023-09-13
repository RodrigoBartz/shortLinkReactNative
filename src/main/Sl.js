import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export const  Sl = () => {
  const [entrada, setEntrada] = useState('')
  const [shortL, setShortL] = useState('')

  const retirarSL = () => {
    try {
      const json = JSON.parse(entrada);
      if (json.result.short_link) setShortL(json.result.short_link);
    } catch (error) {
      alert('JSON Error')
    }
  };

  return (
    <View >
      <Text>Json: </Text>
      <TextInput multiline value={entrada} onChangeText={setEntrada}></TextInput>
      <Button title='Tirar ShortLink' onPress={retirarSL}></Button>
      <Text>ShortLink: {shortL}</Text>
    </View>
  );
}
