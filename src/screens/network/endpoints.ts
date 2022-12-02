const ENV = {
    // baseUrl: 'https://codelabs-editor.herokuapp.com'
    baseUrl: 'http://localhost:8080'
}

export const Endpoints = {
    courseList: `${ENV.baseUrl}/course-list`,
    courseById: (courseId: any) => `${ENV.baseUrl}/courses/course_item/${courseId}`,
    coursesList: `${ENV.baseUrl}/courses/list_of_courses`,
    problemById: (problem_id:string) => `${ENV.baseUrl}/problems/${problem_id}`,
    problemsList: `${ENV.baseUrl}/problems/all`,
    runCode: `${ENV.baseUrl}/problems/run`,
}