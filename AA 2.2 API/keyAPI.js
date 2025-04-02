import axios from "axios";

const key = "live_QnCkTbJjSvINZT8z7Sfnew4H07lvnNZAMBejbItYAmBG2LHZWuSbSuCgfIlIzZ7p";

const obtenerGatos = async () => {
    try {
        const respuesta = await axios.get("https://api.thecatapi.com/v1/images/search", {
            headers: {
                "x-api-key": key
            }
        });

        console.log("Imagen del gato:", respuesta.data);
    } catch (error) {
        console.error("Error al hacer la solicitud:", error.response.data);
    }
};

obtenerGatos();
