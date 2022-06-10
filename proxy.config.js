const PROXY_CONFIG = {
    "/api":{
        target:"http://localhost:8080",
        changeOrigin: true,
        logLevel:"debug",
        secure: false
    }
}

module.exports = PROXY_CONFIG;