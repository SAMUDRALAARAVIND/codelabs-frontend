import { CompaniesList } from "./components/CompaniesList"
import { CourseTypes } from "./components/CourseTypes"
import { CoursesImagesAnimation } from "./components/CourseImages"
import { Footer } from "../global-components/Footer"
import { HighLighter } from "./components/HighLighter"
import { TopNavigation } from "../global-components/top-navigation"

export const HomeScreen = () => {
    return (
        <div>
            <TopNavigation />
            <HighLighter />
            <CourseTypes />
            <CoursesImagesAnimation />
            <CompaniesList />
            <Footer />
        </div>
    )
}

const styles = {
    btn: {
        backgroundColor: 'blue',
        color:'white'
    }
}