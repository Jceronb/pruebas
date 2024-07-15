import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";



export const MainApp = () => {
  return (
    <UserProvider>
        {/* // Componente que se va a mostrar en todas las páginas de la aplicación */}
        {/* <h1>MainApp</h1> */}
        <NavBar/>

        <hr/>
        {/* Renderizamos las rutas */ }
        <Routes>

          <Route path="/" element={ <HomePage/> } />
          <Route path="login" element={ <LoginPage/> } />
          <Route path="about" element={ <AboutPage/> } />

        { /*Crear excepción cuando no se encuentre la ruta */ }
          <Route path="/*" element={ <Navigate to="/about"/> } />

        </Routes>
    </UserProvider>
  )
}

