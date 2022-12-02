import { beginBatch, endBatch, observable } from "@legendapp/state";
import Strings from "../common/Strings";
import { Endpoints } from "../network/endpoints";
import { NetworkConstants } from "../network/network-constants";

export interface IProblemItem{
    problem_id: number;
    title: string;
    level: string;
    tags: string;
}

export type ApiStatus = 'init' | 'success' | 'error' | 'pending'

export interface IProblemsListModel {
    data: Array<IProblemItem> | undefined;
    apiStatus: ApiStatus;
    error?: string | undefined;
}

export class ProblemsListModel {
    obs;
    constructor(){
        this.obs = observable<IProblemsListModel>({
            data: undefined,
            apiStatus: 'init',
            error: undefined
        })
    }

    private fetchProblemsList = async () => {
        let url = Endpoints.problemsList;
        let method = NetworkConstants.METHOD_GET;
        this.obs?.apiStatus?.set?.('pending')
        fetch(url, {
            method,
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((result) => {
            beginBatch()
            if(result.message === 'success'){
                this.obs.data?.set?.(result.result);
                this.obs.apiStatus?.set?.('success');
            }
            else{
                this.obs?.apiStatus?.set?.('error');
                this.obs?.error?.set?.(Strings.something_went_wrong)
            }
            endBatch()
        })
    }

    actions = {
        fetchProblemsList:this.fetchProblemsList
    }
}

export function createProblemsListModel(){
    return new ProblemsListModel()
}