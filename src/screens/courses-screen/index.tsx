import { CourseCard } from "./CourseCard"
import { Footer } from "../global-components/Footer"
import { TopNavigation } from "../global-components/top-navigation"
import { courses } from "../data/courses"
export const CoursesScreen = () => {

    return (
        <div>
            <TopNavigation currentScreen="COURSES"/>
            <div style={{
                display:'flex',
                flexFlow: 'row wrap',
                gap: '20px',
                backgroundColor:'#FEF1F2',
                justifyContent:'center',
            }}>
                {
                    courses.map((course, key) => {
                        return (
                            <CourseCard key={key} course={course}/>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}