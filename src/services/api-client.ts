import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '6c01f64644724ac09e385beb3acc8370'
    }
})