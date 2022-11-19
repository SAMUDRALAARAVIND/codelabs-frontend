interface ConfigRequest {
    url: string ;
    method: string ;
    data?: any
}
export const request = async (httpConfig: ConfigRequest) => {
    return fetch(httpConfig.url, {
        body: httpConfig.data,
        method:httpConfig.method,

    }).then((response) => {
        return response.json() 
    })
}