import { useState } from "react";
import ValentineCard from "./valentineCard"; // Importamos la tarjeta de San Valentín
import "./App.css"; // Importamos los estilos generales

export default function Page() {
  const [showValentineCard, setShowValentineCard] = useState(true); // Muestra la tarjeta
  const [showQuestion, setShowQuestion] = useState(false); // Muestra la pregunta
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si la música está siendo reproducida
  const yesButtonSize = noCount * 20 + 16;

  // Función para manejar el clic en "Empezar"
  const handleStartClick = () => {
    setShowValentineCard(false); // Cambiar a la pantalla de la pregunta
    setShowQuestion(true); // Mostrar la pregunta
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "¿Realmente segura?",
      "¡Piénsalo de nuevo!",
      "¡DIANA GALARZA!",
      "¡Seguro que NO NOELIA?",
      "¡Puede que te arrepientas de esto!",
      "¡Piénsalo otra vez!",
      "¿Estás absolutamente seguro?",
      "¡Esto podría ser un error!",
      "¡TUMBA LA FIESTA!",
      "¡ZZZZZZZZZZ!",
      "¿ZZZ X2?",
      "¿No lo reconsiderarías?",
      "¿Esa es tu respuesta final?",
      "DIANA NOELIA GALARZA FERNANDEZ",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Función para manejar la reproducción de música
  const handlePlayMusic = () => {
    const audioElement = document.getElementById("guitar-music");
    if (audioElement) {
      audioElement.play().catch((error) => {
        console.error("Error al reproducir la música:", error); // Capturar el error si no se puede reproducir
      });
      setIsPlaying(true); // Cambiar el estado para indicar que la música está siendo reproducida
    }
  };

  // Función para pausar la música
  const handlePauseMusic = () => {
    const audioElement = document.getElementById("guitar-music");
    if (audioElement) {
      audioElement.pause();
      setIsPlaying(false); // Cambiar el estado a pausado
    }
  };

  return (
    <div className="centered-container">
      {showValentineCard ? (
        <ValentineCard onStartClick={handleStartClick} />
      ) : showQuestion ? (
        <div className="valentine-container">
          {yesPressed ? (
            <>
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
              <div className="text-container">Lo suponía, ¡eres muy inteligente!!!</div>

              <div className="audio-container">
                <div className="text-container">Desde el cielo todo es más bonito,
                  Déjame llevarte a las estrellas otra vez,
                  Como la noche de ayer 🎶</div>

                {/* Reproductor de audio con eventos para controlar el estado */}
                <audio
                  id="guitar-music"
                  className="audio-player"
                  onCanPlay={() => console.log("Audio listo para reproducirse")}
                >
                  <source src="/audio.mp3" type="audio/mp3" />
                  Tu navegador no soporta la etiqueta de audio.
                </audio>

                <div className="controls">
                  {isPlaying ? (
                    <button onClick={handlePauseMusic} className="control-button">
                      Pausar
                    </button>
                  ) : (
                    <button onClick={handlePlayMusic} className="control-button">
                      Reproducir
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                className="h-[200px]"
                style={{ width: "400px", height: "240px" }}
                src="https://gifdb.com/images/high/happy-birthday-my-love-bear-flying-kisses-2rdyv5zjj39mok89.webp"
              />
              <h1 className="text-container">¿Puedo ser tu valentine?</h1>
              <div>
                <button
                  className={"yes-button"}
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>

                <button onClick={handleNoClick} className="no-button">
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
