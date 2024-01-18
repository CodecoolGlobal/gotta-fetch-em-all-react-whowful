function DisplayLocation ({location, onGoBack}) {
    const locationName = location.split('-').map(name => name[0].toUpperCase() + name.slice(1)).join(' ');
    const handleClick = () => {
        onGoBack();
    }
    return (
        <div>
            <h1 className="text">{locationName}</h1>
        </div>
    )
}

export default DisplayLocation;