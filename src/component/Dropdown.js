import React, { useState, useEffect, useRef } from 'react'


const Dropdown = ({ options, selected, onSelectedChange,label }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {   
        const bodyClick = (event)=>{
            //console.log("click")
            if(ref.current.contains(event.target))
                return;
            setOpen(false);
        }
        document.body.addEventListener("click", bodyClick, {capture:true})
        return () => {
            document.body.removeEventListener("click", bodyClick, {capture:true})
        }
    }, []);


    const renderOptions = options.map(option => {
        if (option === selected)
            return null;
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label for="color">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;