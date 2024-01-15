import {useState} from 'react'
import DisplayCountry from './DisplayCountry.jsx'

const DisplayCountries = ({country}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [text, setText] = useState('Show')

    const handleClickEvent = () => {
        setShowInfo(!showInfo)
        showInfo ? setText('Show') : setText('Hide')
    }

    return (
        <div>
            {country.name.common}
            <button onClick={handleClickEvent}>{text}</button>
            {showInfo
                ? <DisplayCountry country={country}/>
                : null
            }
        </div>
    )
}

export default DisplayCountries