import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

//
const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "German",
        value: "de"
    },
]

const Translate = () => {
    const [languages, setLanguages] = useState(options[0]);
    const [text, setText] = useState("");
    return (
        <div>
            <div className="col">
                <label for="text">Enter Text</label>
                <input className="form-control" id="text" name="text" onChange={(e) => setText(e.target.value)} />
            </div>
            <Dropdown
                label="Select Language"
                options={options}
                selected={languages}
                onSelectedChange={setLanguages}
            />
            <div className="col">
                <h3>Output</h3>
                <Convert language={languages} text={text} />
            </div> 
        </div>

    )
}

export default Translate;