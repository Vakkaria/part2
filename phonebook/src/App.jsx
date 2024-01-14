import {useState, useEffect} from 'react'
import DisplayPersons from "./components/DisplayPersons.jsx"
import FilterForm from "./components/FilterForm.jsx"
import AddForm from "./components/AddForm.jsx"
import personsServices from './services/persons.js'
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [findings, setFindings] = useState('')

    useEffect(() => {
        personsServices
            .getAll()
            .then(initialResult => setPersons(initialResult))
    }, [])

    const deletePerson = (event, name, id) => {
        event.preventDefault()

        if (confirm(`Delete ${name}`)) {
            personsServices
                .deleteData(id)
                .then(() => setPersons(persons.filter(p => p.id !== id)))
        }
    }

    const addPerson = event => {
        event.preventDefault()

        if (persons.map(person => person.name).includes(newName)) {

            const name = persons.find(p => p.name === newName)
            const changedPerson = {...name, phone: newPhone}

            if (confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
                personsServices
                    .update(name.id, changedPerson)
                    .then(returnedData => {
                        setPersons(persons.map(p => p.id !== name.id ? p : returnedData))
                    })
            }

            setNewPhone('')
            setNewName('')

            return
        }

        const personObject = {
            name: newName,
            phone: newPhone
        }

        personsServices
            .create(personObject)
            .then(newValue => {
                setPersons(persons.concat(newValue))
                setNewPhone('')
                setNewName('')
            })
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
                                key={person.id} deletePerson={deletePerson}/>
            )}
        </div>
    )
}

export default App