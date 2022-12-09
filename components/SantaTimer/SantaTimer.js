import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'
import Colors from '../../config/colors'

const SantaTimer = (props) => {

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
        }
    }, []);
   
    //format with {days}j:{hour}:{minute}:{second}
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hour = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((diffTime % (1000 * 60)) / 1000);
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

  return (
    <View style={styles.container}>
        <Text style={styles.text }> {days}j:{hour}:{minute}:{second} {"\n"} AVANT NOEL </Text>
        <Image 
        style={styles.image} 
        source={require('../../assets/img/tree.png')} 
        resizeMode="contain" 
        resizeMethod="resize"
        />
    </View>
  )
}

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
    text : {
        fontSize: 20,
        width: '55%',
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
    }
})


export default SantaTimer