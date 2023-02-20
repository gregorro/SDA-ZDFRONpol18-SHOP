import { ThemeProvider } from '@mui/material';
import './App.css';
import { useAppSelector } from './app/hooks';
import Header from './components/header/header';
import { selectAppColorMode } from './slices/app.slice';
import { darkTheme, lightTheme } from './styled/theme'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useEffect } from 'react';
import { auth } from '.';

function App() {
  const colorMode = useAppSelector(selectAppColorMode)

  useEffect(()=> {
    onAuthStateChanged(auth, (user: User | null)=> {
      console.log('Current user', user)
    })
  }, [])


  return (
    <ThemeProvider theme={colorMode === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>

  );
}

export default App;
