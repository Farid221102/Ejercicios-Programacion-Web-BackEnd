import axios from "axios";

const URL_LOGIN = "https://reqres.in/api/login";
const URL_DATOS = "https://reqres.in/api/users/2";

const credenciales = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
};

const autenticar = async () => {
    try {
        const respuestaLogin = await axios.post(URL_LOGIN, credenciales);
        const token = respuestaLogin.data.token;
        console.log("Token obtenido: ", token);

        const respuestaDatos = await axios.get(URL_DATOS, {
            headers: { "Authorization": `Bearer ${token}` }
        });

        console.log("Datos:", respuestaDatos.data);
    } catch (error) {
        console.error("Error:", error.respuestaLogin);
    }
};

autenticar();