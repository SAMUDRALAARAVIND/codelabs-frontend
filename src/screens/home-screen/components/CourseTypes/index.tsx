import "./index.scss"
const courseTypesList = [
    {
        url:"/images/home/upskill.png" ,
        title: "MASTER A PROGRAMMING LANGUAGE",
        color: "#F77F76"
    },
    {
        title:'BUILD DEVELOPMENT PROJECTS',
        color: "#00A5EC",
        url: '/images/home/development.png'
    },
    {   
        title:'MASTER DATA STRUCTURES & ALGORITHMS',
        url: '/images/home/doubt_support.png',
        color: '#F285A0'
    },
    {
        title:'GET INTERVIEW READY',
        url:'/images/home/placements.png',
        color:"#FF904D"
    }
]

export const CourseTypes = () => {
    return (
        <div className="course-types-root-container">
            {
                courseTypesList.map((courseType, key) => {
                    return (
                        <div className="card">
                            <img src={courseType.url} />
                            <b style={{color: courseType.color}}>{courseType.title}</b>
                        </div>
                    )
                })
            }
        </div>
    )
}