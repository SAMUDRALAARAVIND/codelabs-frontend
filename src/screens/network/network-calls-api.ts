interface ConfigRequest {
    url: string ;
    method: string ;
    data?: any
}
export interface ResponseModel {
    data?: any;
    status:string;
    message: string;
}

export const request = async (httpConfig: ConfigRequest) => {
    const {url , method, data} = httpConfig
    const httpOptions =  {
        method, 
        body:data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve) => {
        fetch(url,httpOptions)
            .then((response) => response.json())
            .then((result) => resolve(result))
            .catch((err) => resolve({message:'Something went wrong', status: 'error'}))
    })
}