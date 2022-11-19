import "./index.scss"

import { useEffect, useState } from "react"

import { Footer } from "../global-components/Footer"
import { SubTopicCard } from "./sub-topic-card"
import { TopNavigation } from "../global-components/top-navigation"
import { courses } from "../data/courses"
import { useParams } from "react-router-dom"
import { HowToReach } from "./how-to-reach"
import { WhyCodelabs } from "../global-components/WhyCodelabs"

const inScreenNavigation = [
    {
        displayText: 'How will you reach to your dream Job?',
        to: '#howtoreach'
    },
    {
        displayText: 'Why CodeLabs?',
        to:'#whycodelabs'
    },
    {
        displayText: 'Program Syllabus' ,
        to:'#syllabus'
    }
]

export const CourseDetailsScreen = () => {
    const {courseId} = useParams()
    const [course, setCourse] = useState<any>()

    useEffect(() => {
        courses.map((courseItem) => {
            if(courseItem.courseId == courseId){
                setCourse(courseItem)
            }
        })
    } , [])

    if(!course){
        return <h1>No Courses found!</h1>
    }

    return (
        <div className="course-details-root-container">
            <TopNavigation />
            <div className="main-container">
                <div className="navigation">
                    <h3>Quick Access</h3>
                    <div>
                    {
                        inScreenNavigation.map((link, key) => {
                            return (
                                <div key={key}>
                                    <a href={link.to}>{link.displayText}</a>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="topic-container">
                    {
                        course?.reachElements && 
                        <div className="topic-item" id="howtoreach"> 
                            <HowToReach reachElements={course.reachElements} /> 
                        </div>
                    }
                    <div className="topic-item" id="whycodelabs"> <WhyCodelabs /> </div>
                    <div className="topic-item" id="syllabus">
                        <div className="header">
                            <div className="header-title">
                                <div className="card">{ course.shortCard }</div>
                                <h2>{course.course_name}</h2>
                            </div>
                            <div className="header-description">
                                <p>{course.description}</p>
                            </div>
                        </div>
                        <div className="syllabus">
                            {
                                course?.subtopics?.map?.((subtopic: any, key: any) => {
                                    return (
                                        <SubTopicCard key={key} subtopic={subtopic}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}