import Course from "@/types/Course"

export default async function get_course(id:string):Promise<Course> {
    // Currently uses mockapi
    return ((await fetch(`http://localhost:3000/mockapi/courses/${id}.json`))).json() as unknown as Course
}
