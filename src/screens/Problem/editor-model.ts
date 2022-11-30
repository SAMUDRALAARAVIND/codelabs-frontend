import { beginBatch, endBatch, observable } from "@legendapp/state";
import Strings from "../common/Strings";
import { Endpoints } from "../network/endpoints";
import { NetworkConstants } from "../network/network-constants";
import { ApiStatus } from "../Problems/problems-model";

export interface EditorCode{} 

interface IOutputResponse {
    data?: string ;
    apiStatus: ApiStatus;
    error?: string;
}

interface IRunRequest {
    code : string;
    language: string;
}

export class EditorModel {
    obs;
    constructor(){
        this.obs = observable<IOutputResponse>({
            data: undefined,
            apiStatus: 'init',
            error: undefined,
        })
    }

    private runCode = (payload: IRunRequest) => {
        const httpConfig = {
            method: NetworkConstants.METHOD_POST,
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(payload)
        }
        this.obs?.apiStatus?.set?.('pending')
        fetch(Endpoints.runCode, httpConfig)
            .then((response) => response.json())
            .then((result) => {
                beginBatch()
            if(result.message === 'success'){
                this.obs.data?.set?.(result?.result)
                this.obs.apiStatus?.set?.('success')
            }
            else{
                this.obs.apiStatus?.set?.('error')
                this.obs.error?.set?.(Strings.something_went_wrong)
            }
            endBatch()
        })
        .catch(() => {
            beginBatch()
            this.obs.apiStatus?.set?.('error')
            this.obs.error?.set?.(Strings.something_went_wrong)
            endBatch()
        })
    }

    actions = {
        runCode: this.runCode
    }
}

export function createEditorModel(){
    return new EditorModel()
}