import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import propsTypes from 'prop-types'

const Background = (props) => {
    let images = [];
    let paddingStyle = {};
    if (!props.disableTop) {
        if (props.decorateTop) {
            images.push(<Image 
                resizeMode="stretch" 
                resizeMethod="resize" 
                key={1} 
                style={styles.topDecorate} 
                source={require("../../assets/img/TemplateDecorate.png")}/>);
        } else {
            images.push(<Image 
                resizeMode="stretch" 
                resizeMethod="resize" 
                key={2} 
                style={styles.top} 
                source={require("../../assets/img/Template.png")}/>);
        }
        paddingStyle = {paddingTop: 120};
    }
    if (!props.disableBottom) {
        images.push(<Image 
            resizeMode="stretch" 
            resizeMethod="resize" 
            key={3} 
            style={styles.bottom} 
            source={require("../../assets/img/Template.png")} />);
        paddingStyle = {...paddingStyle ,paddingBottom: 120};
    }

  return (
    <View style={[styles.container, paddingStyle]}>
        {images}
        {props.children}
    </View>
  )
}

Background.propTypes = {
    disableTop: propsTypes.bool,
    disableBottom: propsTypes.bool,
    decorateTop: propsTypes.bool,
}

Background.defaultProps = {
    disableTop: false,
    disableBottom: false,
    decorateTop: false,
}

const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        width: '100%',
        height: 120,
        top: 0,
        left: 0,
        right: 0,
        transform: [{ rotate: '180deg' }],
    },
    topDecorate: {
        position: 'absolute',
        width: '100%',
        height: 120,
        top: 0,
        left: 0,
        right: 0,
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 120,
    },
    container: {
        flex: 1,
    },
})





export default Background