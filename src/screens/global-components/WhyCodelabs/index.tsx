import "./index.scss"

const cardsList = [
    {
        url: '/images/course-details/live_learning.svg',
        title:'Live Learning',
        description: 'Master Mern Stack in Live Classes taken by Experts'
    },
    {
        url: '/images/course-details/free_webinar.svg',
        title:'Attend Free Webinars',
        description: 'Grab the importance of Web Development in Free Webinars by Experts'
    },
    {
        url: '/images/course-details/learn_by_doing.svg',
        title:'Learn by Doing',
        description: 'Gain in depth experience by building real world projects'
    },
    {
        url: '/images/course-details/resume_building.svg',
        title:'Resume Building',
        description: 'Get a resume that companies would shortlist'
    },
    {
        url: '/images/course-details/mock_interviews.svg',
        title:'Mock Interviews',
        description: 'Interview practice with industry veterans with real-time feedbacks'
    },
    {
        url: '/images/course-details/interview_opportunities.svg',
        title:'Interview Opportunities',
        description: 'Get developer interview opportunities after course completion'
    },
]   

interface CardProps{
    title: string;
    description: string;
    url: string;
}
const Card = ({url , title, description}: CardProps) => {
    return (
        <div className="card-container">
            <img src={url} className="image"/> 
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
}
export const WhyCodelabs = () => {
    return (
        <div className="why-codelabs-root-container">
            <h2 style={{textAlign: 'center'}}>Why CodeLabs ?</h2>
            <div className="cards-container">
                {
                    cardsList.map((item, key) => {
                        return (
                            <Card 
                                key={key}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}