import { observer } from "@legendapp/state/react";
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { Editor } from "./components/Editor/Editor";
import { ProblemStatement } from "./components/ProblemStatement/ProblemStatement";
import { createProblemModel } from "./problem-model"
import "./index.scss"
import { TopNavigation } from "../global-components/top-navigation";

export const Problem = observer(() => {
    const {problem_id} = useParams()
    const problemModel$ = useRef(createProblemModel()).current

    useEffect(() => {
        problemModel$.actions.fetchProblemById({problem_id: String(problem_id)})
    }, [])

    if(problemModel$?.obs?.apiStatus?.get?.() === 'pending'){
        return <h1>Loading...</h1>
    }

    return (
        <section style={{backgroundColor: '#191919'}}>
            <TopNavigation />
            <div className="problem-root-container">
                <div className="problem-statement">
                    {/* @ts-ignore */}
                    <ProblemStatement problem={problemModel$.obs.data?.get?.()}/>
                </div>
                <div className="editor">
                    <Editor />
                </div>
            </div>
        </section>
    )
});