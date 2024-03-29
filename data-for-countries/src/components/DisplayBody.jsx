import DisplayCountry from './DisplayCountry.jsx'
import DisplayCountries from './DisplayCountries.jsx'

const DisplayBody = ({outputData}) => {
    return (
        <>
            {outputData.length === 1
                ? (
                    <div>
                        {outputData.map(country => (
                            <DisplayCountry country={country} key={country.cca3}/>
                        ))}
                    </div>
                ) : outputData.length <= 10 ? (
                    <div>
                        {outputData.map(country => (
                            <DisplayCountries country={country} key={country.cca3}/>
                        ))}
                    </div>
                ) : (
                    <p>Too many matches</p>
                )}
        </>
    )
}

export default DisplayBody