import { usePersistedState } from "./utils/usePersistedState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Usuarios from "./pages/Usuarios";
import User from "./pages/User";
import Adicionar from "./pages/Adicionar";
import GlobalStyle from './styles/globalStyle.jsx'
import { ThemeProvider } from "styled-components";
import light from './styles/light';
import dark from './styles/dark';
import { SwitchTheme } from "./components/Switchtheme";

const AllRoutes = () =>{

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light);
  }

    return(
      <BrowserRouter>

      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Sidebar />
        <SwitchTheme toggleTheme={toggleTheme}/>

              <Routes>
                <Route path='/' >
                  <Route path='usuarios' element={<Usuarios/>}/>
                  <Route path='adicionar' element={<Adicionar/>}/>
                  <Route path='user/:id' element={<User/>}/>
                </Route>
            </Routes>


        </ThemeProvider>

      </BrowserRouter>

    )
}


export default AllRoutes;