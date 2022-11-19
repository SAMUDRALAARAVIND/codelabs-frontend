import React from "react";
import "./index.scss"

// const reachElements =  [
//     {
//         title: 'Application & Shortlisting',
//         description: 'Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2022, 2021 & 2020 passouts)'
//     },
//     {
//         title: 'Attend Free Webinar',
//         description: 'Go through the free classes and learn the important concepts while understanding how the program unfolds.'
//     },
//     {
//         title: 'Batch Commencement',
//         description: 'Embark on your journey of success once you receive the offer letter for successful enrolment.'
//     },
//     {
//         title: '5-6 Months Program',
//         description: 'You have now signed up for a learning-filled journey of 5-6 months that ends with you being placed in your dream company.'
//     },
//     {
//         title: 'Guaranteed Placement',
//         description: 'The program comes with interview opportunities and a placement guarantee of 6-24 LPA.'
//     }
// ]

interface ReachCardProps {
    index: number | string ;
    title: string ;
    description: string;
}

const ReachCard = ({index, title, description}: ReachCardProps) => {
    return (
        <div className="reach-card-container">
            <div className="reach-card-left">{title}</div>
            <div className="reach-card-right">{description}</div>
        </div>
    )
}

interface ReachElement {
    title: string;
    description: string;
}
interface HowToReachProps {
    reachElements: Array<ReachElement>;
}

export const HowToReach = ({reachElements}: HowToReachProps ) => {

    if(!reachElements || reachElements?.length === 0){
        return <></>
    }
    return <div>
        <h2 style={{textAlign: 'center'}}>How will you reach to your dream Job?</h2>
        <div className="reach-cards-container">
            {
                reachElements?.map?.((cardElement, key ) => {
                    return (<ReachCard 
                                key={key}
                                index={key+1}
                                description={cardElement.description}
                                title={cardElement.title}
                            />)
                })
            }
        </div>
    </div>
}