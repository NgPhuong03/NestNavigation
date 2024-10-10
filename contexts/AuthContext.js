import React, { createContext, useState} from 'react';
import { Alert } from 'react-native';

// Tạo Context
const AuthContext = createContext();

// Tạo Provider
const MyProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    // '22521159@gm.uit.edu.vn'
    const LogIn = ( email, password) => {
        if ( email === '1' && password === '123'){
            setAuthenticated(true);
        } else {
            Alert.alert('Incorrect email or password.','','');
        }
    }

    const LogOut = () => {
        setAuthenticated(false);
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated , LogIn, LogOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, MyProvider };
