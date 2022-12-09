import React from 'react'
import GenericInput from './GenericInput'
import propsTypes from 'prop-types'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const EmailInput = (props) => {

    const [valid, setValid] = React.useState(false)

    function onChange(text) {
        setValid(EMAIL_REGEX.test(text));
        
        if (props.onChange)
            props.onChange(text,EMAIL_REGEX.test(text));
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

EmailInput.propTypes = {
    style: propsTypes.object,
    title: propsTypes.string,
    placeholder: propsTypes.string,
    onChange: propsTypes.func,
}

EmailInput.defaultProps = {
    style: undefined,
    title: 'Password',
    placeholder: 'Email',
    validModel: undefined,
    onChange: undefined,
}

export default EmailInput;