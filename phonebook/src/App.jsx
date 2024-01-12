import {useState} from 'react'
import DisplayPersons from "./components/DisplayPersons.jsx"
import FilterForm from "./components/FilterForm.jsx"
import AddForm from "./components/AddForm.jsx"

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '040-123456', id: 1},
        {name: 'Ada Lovelace', phone: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', phone: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [findings, setFindings] = useState('')

    const addPerson = event => {
        event.preventDefault()

        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const nameObject = {
            name: newName,
            phone: newPhone,
            id: persons.length + 1
        }

        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewPhone('')
    }

    const handleNameChange = event => setNewName(event.target.value)
    const handlePhoneChange = event => setNewPhone(event.target.value)
    const handleFindingChange = event => setFindings(event.target.value)

    return (
        <div>
            <h2>Phonebook</h2>
            <FilterForm findings={findings} handleFindingChange={handleFindingChange}/>
            <h3>add a new</h3>
            <AddForm addPerson={addPerson} newPhone={newPhone} newName={newName}
                     handlePhoneChange={handlePhoneChange} handleNameChange={handleNameChange}/>
            <h3>Numbers</h3>
            {persons.map(person =>
                <DisplayPersons findings={findings} person={person}
                                key={person.id}/>
            )}
        </div>
    )
}

export default App