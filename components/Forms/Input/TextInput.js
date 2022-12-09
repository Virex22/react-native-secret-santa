import React from 'react'
import GenericInput from './GenericInput'
import propsTypes from 'prop-types'


const TextInput = (props) => {

    const [valid, setValid] = React.useState(false)

    function onChange(text) {
        setValid(props.regex.test(text));
        console.log(props.regex.test(text), text);

        if (props.onChange)
            props.onChange(text,props.regex.test(text));
    }
    
  return (
    <GenericInput 
        invalid={!valid}
        model={onChange}
        placeholder={props.placeholder}
        style={[props.style]}
        title={props.title}
    />
  )
}

TextInput.propTypes = {
    style: propsTypes.object,
    title: propsTypes.string,
    placeholder: propsTypes.string,
    onChange: propsTypes.func,
    regex: propsTypes.object,
}

TextInput.defaultProps = {
    style: undefined,
    title: 'Password',
    placeholder: 'Email',
    onChange: undefined,
    regex: undefined,
}

export default TextInput;