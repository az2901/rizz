import {useState} from 'react'
function Form(props) {
    const [name, setName] = useState("");
    const [major, setMajor] = useState("");
    function handleC() {
        props.handleC(name, major);
    }
    function handleName(e) {
        setName(e.target.value);
    }
    return (
        <div>
            Name?
            <input type="text" value={name} onChange={handleName} />
            Major?
            <input type="text" value={major} onChange={function(e) {
                setMajor(e.target.value)
            }} />
            <button onClick={handleC}>
                Calculate
            </button>
        </div>
    )
}

export default Form;