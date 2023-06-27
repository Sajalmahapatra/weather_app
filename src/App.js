import { useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './app.styled';


function App() {
  console.log(process.env.REACT_APP_WEATHER_API_KEY);
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
