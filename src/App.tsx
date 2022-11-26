import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import { CourseDetailsScreen } from './screens/course-details';
import { CoursesScreen } from './screens/courses-screen';
import { DemoLectures } from './screens/global-components/demo-lectures';
import { HomeScreen } from "./screens/home-screen";
import { Test } from './dummy/Test';
import { Problem } from './screens/Problem';
import { ProblemsList } from './screens/Problems';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path='/course-details/:courseId'  element={<CourseDetailsScreen />} />
        <Route path='/demo' element={<DemoLectures />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/problem/:problem_id" element={<Problem />} />
        <Route path="/problems" element={<ProblemsList />} />
      </Routes>
    </Router>
  );
}

export default App;
