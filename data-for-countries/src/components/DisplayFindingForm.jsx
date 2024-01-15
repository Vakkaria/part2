const DisplayFindingForm = ({newCountry, handleNewCountry}) => {
    return (
        <form>
            find countries:
            <input
                value={newCountry}
                onChange={handleNewCountry}
            />
        </form>
    )
}

export default DisplayFindingForm