import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import ListaConsulta from '../pages/ListaConsulta'
import CadastraConsulta from '../pages/ListaConsulta'

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/lista" element={<ListaConsulta />} />
        <Route path="/cadastra" element={<CadastraConsulta />} />
      </Routes>
    </BrowserRouter>
  )
}
