import React, { useEffect, useState } from "react";

const Choices = ({ }) => {
    const [choices, setChoices] = useState({ 1: '' })

    const handleSetChoice = (e, key) => {
        setChoices(old => {
            return {
                ...old, [key]: e.target.value
            }
        })
    }
    const addChoice = (key) => {
        setChoices(old => {
            return {
                ...old, [key]: ''
            }
        })
    }

    useEffect(() => {
        console.log(choices);
    }, [choices])
    return (
        <div className="choices-container">
            {
                Object.keys(choices).map((key, index) => (
                    <div>
                        <input
                            placeholder={`Choice ${key}`}
                            type="text"
                            defaultValue={choices[key]}
                            onChange={(e) => { handleSetChoice(e, key) }}
                            onFocus={index === Object.keys(choices).length - 1 ? () => { addChoice(parseInt(key) + 1) } : null}
                        />
                    </div>
                ))
            }
        </div>
    );


}
export default Choices;