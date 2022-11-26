import { beginBatch, endBatch, observable } from "@legendapp/state";
import Strings from "../common/Strings";
import { Endpoints } from "../network/endpoints";
import { NetworkConstants } from "../network/network-constants";
import { ApiStatus } from "../Problems/problems-model";

interface ProblemResponse {
    problem_id: number;
    statement: string;
    title: string;
    tags: string;
    level: string;
}

interface IProblemModel {
    data?: ProblemResponse;
    apiStatus: ApiStatus;
    error?: string;
}

interface IProblemRequest {
    problem_id: string;
}

class ProblemModel {
    obs;
    constructor(){
        this.obs = observable<IProblemModel>({
            data: undefined,
            apiStatus:'init',
            error: undefined,
        })
    }

    private fetchProblemById = async ({problem_id}: IProblemRequest) => {
        let url = Endpoints.problemById(problem_id)
        let method = NetworkConstants.METHOD_POST
        this.obs.apiStatus?.set?.('pending')

        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        }).then(response => response.json())
        .then((result) => {
            beginBatch()
            if(result.message === 'success'){
                this.obs.data?.set?.(result?.result?.[0])
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
        fetchProblemById:this.fetchProblemById
    }
}

export function createProblemModel(){
    return new ProblemModel()
}