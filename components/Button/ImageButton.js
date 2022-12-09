import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import propsTypes from 'prop-types'

const ImageButton = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onClick} activeOpacity={0.7}>
        <Image 
        resizeMethod='resize'
        resizeMode='contain'
        style={{width : props.width, height : props.height}}  
        source={props.source} />
    </TouchableOpacity>
  )
}

ImageButton.propTypes = {
    onClick: propsTypes.func,
    source: propsTypes.number.isRequired,
    width: propsTypes.number.isRequired,
    height: propsTypes.number.isRequired,
    style: propsTypes.object,
}

ImageButton.defaultProps = {
    onClick: undefined,
    style: undefined,
}

export default ImageButton