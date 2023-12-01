import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as S from "./estilo/global"
import Header from "./Components/Header"
import SobreMim from "./Components/SobreMim"
import MinhasSkills from "./Components/MinhasSkills"
import Projetos from "./Components/Projetos"

function App () { 
  return (
    <>
    <S.GlobalStyle />
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<SobreMim/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
      <Route path="/minhasskills" element={<MinhasSkills/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
  }

export default App 