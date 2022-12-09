import React from 'react'

const UserContext = React.createContext();

export default UserContext
// provider 

const UserProvider = ({ children }) => {
    const [psoeudo, setPsoeudo] = React.useState(null)
    const [email, setEmail] = React.useState(null)
    const [id, setId] = React.useState(null)
     
    return (
        <UserContext.Provider value={{ psoeudo, setPsoeudo, email, setEmail , id, setId}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
