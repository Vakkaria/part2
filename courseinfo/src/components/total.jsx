const Total = ({exercises}) => {
    const initialValue = 0

    return (
        <strong>
            Total of {exercises.reduce((accumulator, currentValue) =>
                accumulator + currentValue, initialValue)} exercises
        </strong>
    )
}

export default Total