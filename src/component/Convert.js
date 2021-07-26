import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState("");
    const [deBouncedText, setDeBouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDeBouncedText(text)
        }, 1000); //change the decBounced text after 1 second as user change input

        return () => {
            clearTimeout(timerId); // if user immedieldly change text without stop for a second clear previous timeout again set timeout to second
        }
    }, [text])

    useEffect(() => {
        const doTransaltion = async () => {
            const { data } = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: deBouncedText,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }
        doTransaltion();
    }, [language, deBouncedText])

    return <div>
            {translated}
        </div>
}

export default Convert;