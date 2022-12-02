import "./problem.scss"

export const ProblemStatement = ({problem} : any) => {
    return (
        <div className="problem-container">
            <div className="problem-header">
                <h3>{problem?.title}</h3>
                <div>
                    <b>{problem?.level}</b>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: problem?.statement}}/>
        </div>
    )
}

