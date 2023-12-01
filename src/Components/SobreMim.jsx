import React from "react"
import * as S from "../estilo/SobreMimStyled"
import Stycker from "../assets/imgs/smile.png"
import Email from "../assets/imgs/mail.png"
import Insta from "../assets/imgs/instagram.png"
import Tell from "../assets/imgs/phone.png"
function SobreMim () {
    return (
        
        <main>
            <section>
        <S.H1>Oie, me chamo Carlos Eduardo Lopes</S.H1>
        <S.H4>Desenvolvedor Front-End</S.H4>
        <S.Butao>
        <S.DC>Dowload CV</S.DC>
        </S.Butao>
        <S.Botao>
        <S.EEC>Entrar em contato</S.EEC>
        </S.Botao>
        <h1>Sobre mim</h1>
        <h4>Coisas sobbre que tenho que pensar sobre futuramente</h4>
            </section>
            <img src= {Email} alt="" />
            <img src= {Stycker} alt="" />
            <img src= {Insta} alt="" />
            <img src= {Tell} alt="" />
        </main>
    )
    }
export default SobreMim ;