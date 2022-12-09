import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import propsTypes from 'prop-types';
import Colors from '../../../config/colors';

const GenericInput = props => {
  const [value, setValue] = React.useState('');

  function onChange(value) {
    setValue(props.handler ? props.handler(value) : value);
    if (props.model) props.model(value);
  }

  let titleJSX = props?.title ? (
    <Text style={styles.text}> {props.title} </Text>
  ) : null;

  return (
    <View style={styles.view}>
      {titleJSX}
      <TextInput
        secureTextEntry={props.password}
        keyboardType={props.number ? 'phone-pad' : 'default'}
        style={
          props.invalid && value != ''
            ? [styles.input, {borderColor: Colors.error}]
            : styles.input
        }
        onChangeText={onChange}
        placeholder={props.placeholder}
        value={value}
      />
      {props.children}
    </View>
  );
};

GenericInput.propTypes = {
  title: propsTypes.string,
  placeholder: propsTypes.string,
  password: propsTypes.bool,
  handler: propsTypes.func,
  model: propsTypes.func,
  invalid: propsTypes.bool,
  number: propsTypes.bool,
};

GenericInput.defaultProps = {
  title: null,
  placeholder: null,
  password: false,
  handler: null,
  model: null,
  invalid: false,
  number: false,
};

const styles = StyleSheet.create({
  input: {
    height: 42,
    borderRadius: 7,
    fontSize: 16,
    padding: 10,
    margin: 5,
    borderColor: Colors.textSecondary,
    borderWidth: 1,
    color: Colors.text,
  },
  text: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  view: {
    width: '80%',
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default GenericInput;
