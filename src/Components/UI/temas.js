import { fundoClaro, conteudoClaro, fundoEscuro, conteudoEscuro, textoFundoEscuro, textoFundoClaro } from './variaveis'

export const temaClaro = {
    body:fundoClaro,
    inside:conteudoClaro,
    text: textoFundoClaro
}

export const temaEscuro = {
    body:fundoEscuro,
    inside:conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
}