import Header from './header.jsx'
import Content from './content.jsx'

const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course