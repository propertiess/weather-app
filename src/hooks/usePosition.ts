import {useEffect, useState} from 'react';

type coords = {
    latitude: number
    longitude: number
}

export const usePosition = () => {
    const [position, setPosition] = useState<coords | null>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true)

    const onChange = (pos: coords) => {
        // Здесь мы могли бы сохранить весь объект position, но для
        // ясности давайте явно перечислим, какие свойства нас интересуют.

        setPosition({...pos});
    };

    const onError = (error: Error) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;
        setIsLoading(true)
        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            setIsLoading(false)

            return;
        }

        geo.getCurrentPosition(pos => {

            onChange({latitude: pos.coords.latitude, longitude: pos.coords.longitude})
            setIsLoading(false)
        })

    }, []);

    return {...position, error, isLoading};
}