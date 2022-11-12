import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
import {maskPhone} from './masks'

interface InputProps extends TextInputProps {
  mask: 'phone',
  inputMaskChange: any;  
}
const Input: React.FC<InputProps> = ({mask, inputMaskChange, ...rest}) => {
  function handleText(text: string){
    const value = maskPhone(text);
    inputMaskChange(value);
  }
  return (
    <>
    <TextInput
    style={estilos.input}
    onChangeText={(text) => handleText(text)}
    {...rest}/>
    </>
  );  
};

export default Input;

const estilos = StyleSheet.create({
  input: {
    outline: 'none',
    color: '#000000',
    width: 370,
    borderWidth: 1,
    fontSize: 20,
    padding: 7,
    borderRadius: 9,
    marginTop: 25,
    borderColor: 'transparent',
    borderBottomColor: '#000000',
    backgroundColor: '#F0F0F0',
    elevation: 2,
  }
})