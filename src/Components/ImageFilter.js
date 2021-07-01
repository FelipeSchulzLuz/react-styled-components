import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import utilidades from '../assets/images/utilidades.svg';
import transporte from '../assets/images/transporte.svg';
import saude from '../assets/images/saude.svg';
import outros from '../assets/images/outros.svg';
import { IconeTema } from './UI/index';

function ImageFilter(type) {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        Saude: <IconeTema src={saude} alt="Saude" />,
        default: <IconeTema src={outros} alt="Outro" />
    };

    return Images[type] || Images.default;
};

export default ImageFilter;