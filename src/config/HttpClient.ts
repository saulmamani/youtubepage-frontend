import {Axios} from 'axios-observable';
import {Alert} from "@/addons/Alert";
import router from "@/router";

export const http = Axios.create({
    baseURL: `${process.env.VUE_APP_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

// const requestHandler = (request:any) => {
//     request.headers.Authorization = 'Bearer ' + localStorage.getItem("token_youtubeapp");
//     return request;
// };
//
const responseHandler = (response:any) => {
    return response;
};

// const errorHandler = (error:any) => {
//     return Promise.reject(error);
// };

// http.interceptors.request.use(
//     async (request:any) => requestHandler(request),
//     (error:any) => errorHandler(error)
// );

http.interceptors.response.use(
    (response:any) => responseHandler(response),
    async (error:any) => {
        if (error.response.status === 401) {
            await Alert.errorTop("Ha ocurrido un error de seguridad, vuelva a intentarlo");
        }
        if (error.response.status === 403) {
            await router.push({name: 'error_permisos'});
        }
        if (error.response.status === 404 || error.response.status === 403) {
            await router.push({name: 'error'});
        }
        if (error.response.status !== 1) //error 500, 400, etc
        {
            await Alert.error(`
                            ${error.response.data.message} <br/>
                            ${error.response.data?.error}
                        `);
        }

        if (error.response.status === 422) {
            const errors = error.response.data.errors;
            let errosString = "";
            for (const field of Object.keys(errors)) {
                errosString += "- " + errors[field][0] + "<br>";
            }

            await Alert.error(errosString);
        }
    }
);
