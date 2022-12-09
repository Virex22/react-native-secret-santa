import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../config/colors';
import propsTypes from 'prop-types';

const Return = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onClick}
      activeOpacity={0.7}>
      <Text style={styles.text}>◀ Retour</Text>
    </TouchableOpacity>
  );
};

Return.propTypes = {
  onClick: propsTypes.func,
};

Return.defaultProps = {
  onClick: undefined,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  text: {
    fontSize: 17,
    color: Colors.darkGray,
    fontWeight: 'bold',
  },
});

export default Return;
