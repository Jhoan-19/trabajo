import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function MiComponente() {
    const { favoritos, setFavoritos } = useContext(AppContext);

    const agregarAFavoritos = (pokemon) => {
        setFavoritos([...favoritos, pokemon]);
    };

    return (
        <View>
            <Text>Favoritos: {favoritos.length}</Text>
            {/* Agrega lógica para mostrar o interactuar con los favoritos */}
        </View>
    );
}