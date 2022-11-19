import { ApiData } from "../global-components/models";
import { Endpoints } from "../common/endpoints";
import { NetworkConstants } from "../common/network-constants";
import { observable } from "@legendapp/state";
import { request } from "../common/network-calls-api";

export const coursesModel = observable<ApiData>({
    apiStatus: 'init',
    data: undefined,
    error: undefined
})

export async function fetchCoursesList() {
    console.log("Requesting > Courses List")
    const httpConfig = {
        url: Endpoints.coursesList,
        method:NetworkConstants.METHOD_GET
    }
    try{
        let response = await request(httpConfig)
        console.log(response) 
    }
    catch(e){

    }
}