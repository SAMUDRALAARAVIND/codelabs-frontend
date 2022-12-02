import "./problem-statement.scss"

export const ProblemStatement = ({problem} : any) => {
    const problemId = problem?.problem_id
    const title = problem?.title 
    const level = problem?.level
    const tags = problem?.tags
    let statement = problem?.statement 
    statement = statement?.replaceAll?.('className', 'class') ;

    return (
        <div className="problem-statement-root-container">
            <div className="header">
                <div className="title">
                    <h3>{`${problemId}.${title}`}</h3>
                    {/* @ts-ignore */}
                    <b style={styles[level]}>{level}</b>
                </div>
                <div className="badge">{tags}</div>
            </div>
            {/* @ts-ignore */}
            <div dangerouslySetInnerHTML={{__html: statement}}/>
        </div>
    )
}

const styles = {
    "Easy": {
        color: 'green'
    },
    'Medium':{
        color:'orange'
    },
    'Hard':{
        color:'red'
    }
}