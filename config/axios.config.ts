// Axios module configuration: https://go.nuxtjs.dev/config-axios

import data from '../data.global';

export default {
    baseURL: `https://${data.main.domain}`,
}