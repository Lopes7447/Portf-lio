import React from "react"
import { Link } from "react-router-dom";
import * as S from "../estilo/headerStyle"
function Header () { 
  return (
    <S.Header>
      <nav>
        <S.Ul>
          <li>
            <S.StyledLink to="/">Sobre Mim</S.StyledLink>
          </li>
          <li>
            <S.StyledLink to="/projetos">Projetos</S.StyledLink>
          </li>
          <li>
            <S.StyledLink to="/minhasskills">Minhas Skills</S.StyledLink>
          </li>
        </S.Ul>
      </nav>
      <S.H1>Portfólio</S.H1>

    </S.Header>
  )
  }

export default Header 