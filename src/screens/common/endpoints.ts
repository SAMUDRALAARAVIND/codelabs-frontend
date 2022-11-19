const ENV = {
    baseUrl: 'https://codelabs-apis.herokuapp.com'
}

export const Endpoints = {
    courseList: `${ENV.baseUrl}/course-list`,
    courseById: (courseId: any) => `${ENV.baseUrl}/courses/course_item/${courseId}`,
    coursesList: `${ENV.baseUrl}/courses/list_of_courses`
}