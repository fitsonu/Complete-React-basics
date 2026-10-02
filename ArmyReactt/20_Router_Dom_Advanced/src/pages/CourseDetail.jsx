import {useParams} from 'react-router-dom'
function CourseDetail(){
    // it give whatever we write on the right after slash
    const paramter=useParams()
    console.log(paramter);
    console.log(paramter.CourseId);
    return(
        
        <div>
            <h1> {paramter.CourseId} Courses Detail page</h1>
        </div>
    )
}
export default CourseDetail