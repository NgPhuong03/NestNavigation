import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, MyProvider } from './contexts/AuthContext';
import { useContext } from 'react';
import AuthNavigator from './components/AuthNavigator';
import HomeStack from './components/HomeStack';

const RootStack = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeStack/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <MyProvider>
      <RootStack/>
    </MyProvider>
  );
}
