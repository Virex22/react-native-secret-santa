import React from 'react'

const UserContext = React.createContext();

export default UserContext;

const UserProvider = ({ children }) => {
    const [profile, setProfile] = React.useState({})
     
    return (
        <UserContext.Provider value={{ profile, setProfile }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
