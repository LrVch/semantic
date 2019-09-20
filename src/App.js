import './App.css';

import React, { useState } from 'react';

import Account from './components/theming/Account/Account';
import AppWrapper from './components/theming/AppWrapper/AppWrapper'
import Content from './components/theming/Content/Content'
import Footer from './components/theming/Footer/Footer'
import Header from './components/theming/Header/Header'
import { ThemeProvider } from 'styled-components'
import Themes  from './themes'

const themes = {...Themes}

function App() {
  const [theme, setTheme] = useState(themes.palevioletred)

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header
          activeTheme={theme.name}
          themes={Object.keys(themes)}
          onChangeTheme={theme => setTheme(themes[theme])}
        />
        <Content>
          <Account/>
        </Content>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
