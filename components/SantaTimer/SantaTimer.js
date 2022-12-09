import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../config/colors';
import {getFormatedRemainingTime} from '../../helper/timeHelper';

const SantaTimer = () => {
  const [diffTime, setDiffTime] = useState();

  function calcDiffTime() {
    let nowTime = new Date();
    let christmasTime = new Date(nowTime.getFullYear(), 11, 25);
    setDiffTime(christmasTime.getTime() - nowTime.getTime());
  }

  useEffect(() => {
    calcDiffTime();
    let interval = setInterval(() => {
      calcDiffTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {' '}
        {getFormatedRemainingTime(diffTime)} {'\n'} AVANT NOEL{' '}
      </Text>
      <Image
        style={styles.image}
        source={require('../../assets/img/tree.png')}
        resizeMode="contain"
        resizeMethod="resize"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.beige,
    borderRadius: 15,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '50%',
    color: Colors.darkGray,
    alignSelf: 'center',
  },
  image: {
    width: '35%',
    height: 80,
    resizeMode: 'contain',
    display: 'flex',
    alignSelf: 'flex-end',
  },
});

export default SantaTimer;
