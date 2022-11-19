export type apiStatus = 'init' | 'pending' | 'error' | 'success'

export interface ApiData {
    data?: any;
    apiStatus: apiStatus;
    error?: string 
}