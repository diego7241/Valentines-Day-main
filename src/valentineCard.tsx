import { useState, useEffect } from "react";
import "./valentineCard.css"; // Importamos el CSS específico para la tarjeta de San Valentín

const ValentineCard = ({ onStartClick }: { onStartClick: () => void }) => {
    // Estado para el carrusel
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "/images/imagen1.jpg",
        "/images/imagen2.jpg",
        "/images/imagen3.jpg", // Asegúrate de que las URLs sean correctas
    ];

    // Estado de la cuenta regresiva
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Función para actualizar la cuenta regresiva
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-03-24T00:00:00"); // Fecha objetivo (24 de marzo)
        const currentDate = new Date();

        const difference = targetDate.getTime() - currentDate.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 3600 * 24));
            const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
            const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    // Efecto para actualizar la cuenta regresiva cada segundo
    useEffect(() => {
        const intervalId = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }, []);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    // Efecto para cambiar la imagen automáticamente
    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="happy-valentines">
            <div className="valentines-day-card">
                <div className="clouds"></div>
                <div className="hearts">
                    <div className="heartOne">
                        <div className="left-side"></div>
                        <div className="right-side"></div>
                    </div>
                    <div className="heartTwo">
                        <div className="left-side"></div>
                        <div className="right-side"></div>
                    </div>
                </div>
                <div className="text">
                    <span>Hola mi amor !</span>
                </div>
            </div>
            <p className="hover">- Realmente me tienes muy enamorado mi amor  -</p>

            {/* Carrusel de imágenes */}
            <div className="carousel">
                <button className="carousel-button" onClick={prevImage}>
                    {"<"}
                </button>
                <img src={images[currentImage]} alt="carousel" className="carousel-image" />
                <button className="carousel-button" onClick={nextImage}>
                    {">"}
                </button>
            </div>

            <p className="hover">Eres tan hermosa enserio</p>

            {/* Cuenta regresiva */}
            <div className="countdown">
                <p className="countdown-text">
                    ¡Faltan
                    <span className="days">{timeLeft.days}</span> días,
                    <span className="hours">{timeLeft.hours}</span> horas,
                    <span className="minutes">{timeLeft.minutes}</span> minutos y
                    <span className="seconds">{timeLeft.seconds}</span> segundos!
                </p>
            </div>

            <button className="start-button" onClick={onStartClick}>
                NO APRETES
            </button>
        </div>
    );
};

export default ValentineCard;
