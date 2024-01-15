import {useState} from 'react'
import countriesServices from './services/countries.js'
import DisplayBody from './components/DisplayBody.jsx'
import DisplayFindingForm from './components/DisplayFindingForm.jsx'

const App = () => {
    const [newCountry, setNewCountry] = useState('')
    const [outputData, setOutputData] = useState([])

    const handleNewCountry = event => {
        setNewCountry(event.target.value)

        countriesServices
            .getCountries()
            .then(data => {
                setOutputData(data.filter(d =>
                    d.name.common.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    d.name.official.toLowerCase().includes(event.target.value.toLowerCase())
                ))
            })
    }

    return (
        <>
            <DisplayFindingForm newCountry={newCountry}
                                handleNewCountry={handleNewCountry}/>
            <DisplayBody outputData={outputData}/>
        </>
    )
}

export default App