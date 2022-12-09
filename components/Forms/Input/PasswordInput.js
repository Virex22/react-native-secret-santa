import React from 'react'
import GenericInput from './GenericInput'
import propsTypes from 'prop-types'

const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

const PasswordInput = (props) => {
    const [valid, setValid] = React.useState(false)

    function onChange(text) {
        setValid(PASS_REGEX.test(text));
        if (props.onChange)
            props.onChange(text,PASS_REGEX.test(text));
    }

  return (
    <GenericInput 
        invalid={!valid}
        password={true} 
        model={onChange}
        style={props.style}
        title={props.title}
    />
  )
}

PasswordInput.propTypes = {
    style: propsTypes.object,
    title: propsTypes.string,
    onChange: propsTypes.func,
}

PasswordInput.defaultProps = {
    style: undefined,
    title: 'Password',
}

export default PasswordInput