import { mount, shallow } from 'enzyme'

import React from 'react'
import { ThemeProvider } from 'styled-components'

export const shallowWithTheme = (tree, theme) => {
  const WrappingThemeProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );

  return shallow(
    tree,
    { wrappingComponent: WrappingThemeProvider }
  );
};

export const mountWithTheme = (tree, theme) => {
  const WrappingThemeProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );

  return mount(
    tree,
    { wrappingComponent: WrappingThemeProvider }
  );
};