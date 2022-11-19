import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import { BlogScreen } from './screens/blog-screen';
import { CourseDetailsScreen } from './screens/course-details';
import { CoursesScreen } from './screens/courses-screen';
import { DemoLectures } from './screens/global-components/demo-lectures';
import { HomeScreen } from "./screens/home-screen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path='/course-details/:courseId'  element={<CourseDetailsScreen />} />
        <Route path='/demo' element={<DemoLectures />} />
        <Route path='/blog' element={<BlogScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
