const Person = ({person, deletePerson}) => {
    return(
    <div>
        {person.name} {person.phone}
        <button onClick={(event) => deletePerson(event, person.name, person.id)}>Delete</button>
    </div>
    )}

export default Person