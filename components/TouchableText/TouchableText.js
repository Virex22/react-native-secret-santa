import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../config/colors';
import PropTypes from 'prop-types';

const TouchableText = props => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={props.onClick}
      activeOpacity={0.8}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

TouchableText.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

TouchableText.defaultProps = {
  text: 'Link',
  style: undefined,
};

const styles = StyleSheet.create({
  text: {
    color: Colors.darkGray,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default TouchableText;
