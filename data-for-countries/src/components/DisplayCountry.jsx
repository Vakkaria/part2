const DisplayCountry = ({country}) => {

    const langs = Object.keys(country.languages)

    return (
        <>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {langs.map(lang => <li key={lang}>{country.languages[lang]}</li>)}
            </ul>
            <div className='flag'>{country.flag}</div>
        </>
    )
}

export default DisplayCountry