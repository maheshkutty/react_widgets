import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Serach = () => {
    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);

    //console.log(result);

    useEffect(() => {
        async function search(){
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params:{
                    action: "query",
                    list:"search",
                    origin:"*",
                    format:"json",
                    srsearch:term
                }
            })
            setResults(data.query.search);
        }
        const timeoutID = setTimeout(() => {
            if(term)
                search();
        }, 500)

        return () => {
            clearTimeout(timeoutID);
        }
    }, [term]); // replicate lifecycle method of class based component

    const wikiData = results.map(result => {
        return (
            <div className="card" key={result.pageid}>
                <div className="card-body">
                    <a className="btn btn-primary" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                     <h5 className="card-title">
                        {result.title}      
                     </h5>
                     <p dangerouslySetInnerHTML={{__html: result.snippet}}></p>
                </div>
            </div>
        )
    });

    return (
        <div className="col">
            <label for="term">Search</label>
            <input className="form-control" id="term" placeholder="term" onChange = {(e) => setTerm(e.target.value)} />

            {wikiData}
        </div>
    )
}

export default Serach;