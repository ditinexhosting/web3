import { handleResponse, API } from './utils';

export const homeApi = () => {
    return API.get('/set/12')
        .then(function (res) {
            return handleResponse(res)
        })
        .catch(function (error) {
            return handleResponse(error)
        })
}

