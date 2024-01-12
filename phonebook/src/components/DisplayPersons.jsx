import Person from './Person.jsx'

const DisplayPersons = ({person, findings}) => {
    if (person.name.toLowerCase().includes(findings.toLowerCase())) {
        return (
            <Person name={person.name} phone={person.phone}/>
        )
    }
}

export default DisplayPersons