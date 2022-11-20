import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import { CourseDetailsScreen } from './screens/course-details';
import { CoursesScreen } from './screens/courses-screen';
import { DemoLectures } from './screens/global-components/demo-lectures';
import { HomeScreen } from "./screens/home-screen";
import { Problem } from './screens/Problem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path='/course-details/:courseId'  element={<CourseDetailsScreen />} />
        <Route path='/demo' element={<DemoLectures />} />
        <Route path="/problem" element={<Problem />} />
      </Routes>
    </Router>
  );
}

export default App;
