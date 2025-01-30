import React, { useState, useEffect } from "react";
import "./valentineCard.css"; // Importamos el CSS específico para la tarjeta de San Valentín

const ValentineCard = ({ onStartClick }: { onStartClick: () => void }) => {
    // Estado para el carrusel
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "/images/imagen1.jpg",
        "/images/imagen2.jpg",
        "/images/imagen3.jpg", // Asegúrate de que las URLs sean correctas
    ];

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
                    {/* Agrega los demás corazones si lo deseas */}
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
            <button className="start-button" onClick={onStartClick}>
                Empezar
            </button>
        </div>
    );
};

export default ValentineCard;
