function DisplayLocation (props) {
    const {location, goBack} = props;
    const locationName = location.split('-').map(name => name[0].toUpperCase() + name.slice(1)).join(' ');
    console.log(locationName);
    return (
        <div>
            <h1>{locationName}</h1>
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default DisplayLocation;