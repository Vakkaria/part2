import Part from './part.jsx'
import Total from './total.jsx'

const Content = ({parts}) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
            <Total exercises={parts.map((part) => part.exercises)} />
        </>
    )
}

export default Content