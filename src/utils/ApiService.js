import axios from 'axios';

const getAxios = (url, params) =>
    axios.get(url, {
        params: {...params}
    });
//
// const makeRequest = (path, params) => axios.get(`https://api.themoviedb.org/3${path}`, {
//     params: {
//         ...params,
//         api_key: TMDB_KEY
//     }
// });

export const getRequest = async (url, params = {}) => {
    try {
        const {data: {results}, data} = await getAxios(url, params);
        return [results || data, null];
    } catch (e) {
        return [null, e];
    }
}
// axios.post('url',
//     {
//         contact: 'Sewon',
//         email: 'sewon@gmail.com'
//     },
//     {
//         headers: {
//             'Content-type': 'application/json',
//             'Accept': 'application/json'
//         }
//     }
// )
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((response) => {
//         console.log('Error!) });