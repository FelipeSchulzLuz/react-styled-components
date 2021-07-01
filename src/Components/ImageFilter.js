import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import utilidades from '../assets/images/utilidades.svg';
import transporte from '../assets/images/transporte.svg';
import saude from '../assets/images/saude.svg';
import outros from '../assets/images/outros.svg';
import { Icone } from './UI/index';

function ImageFilter(type) {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
        Utilidades: <Icone src={utilidades} alt="Utilidades" />,
        Transporte: <Icone src={transporte} alt="Transporte" />,
        Saude: <Icone src={saude} alt="Saude" />,
        default: <Icone src={outros} alt="Outro" />
    };

    return Images[type] || Images.default;
};

export default ImageFilter;