import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSetting } from 'theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom`";
import {Navigate} from "react-router-dom";


const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path={"/"} element={<Navigate to="/dashboard" replace />} />
              <Route path={"/dashboard"} element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
