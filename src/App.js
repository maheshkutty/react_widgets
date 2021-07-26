import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';
import Translate from './component/Translate';
import Routes from './component/Routes';
import Headers from './component/Headers';

const options = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Blue",
        value: "blue"
    },
    {
        label: "Green",
        value: "green"
    }
]

const items = [
    {
        "title": "What are your weaknesses?",
        "content": '"What are your weaknesses" is one of the most popular questions interviewers ask. It is also the most dreaded question of all. Handle it by minimizing your weakness and emphasizing your strengths. Stay away from personal qualities and concentrate on professional traits: "I am always working on improving my communication skills to be a more effective presenter. I recently joined Toastmasters, which I find very helpful.'
    },
    {
        "title": "Why should we hire you?",
        "content": '"Why should we hire you?" by summarizing your experiences: "With five years\' experience working in the financial industry and my proven record of saving the company money, I could make a big difference in your company. I\'m confident I would be a great addition to your team."'
    },
    {
        "title": "What are your goals?",
        "content": 'When you\'re asked, "What are your goals?" sometimes it\'s best to talk about short-term and intermediate goals rather than locking yourself into the distant future. For example, "My immediate goal is to get a job in a growth-oriented company. My long-term goal will depend on where the company goes. I hope to eventually grow into a position of responsibility."'
    }
]

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return <div className="container">
        <Headers />
        <Routes path="/">
            <Accordion items={items} />
        </Routes>
        <Routes path="/search">
            <Search />
        </Routes>
        <Routes path="/dropdown">
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
        </Routes>
        <Routes path="/translate">
            <Translate />  
        </Routes>
        {/* <Accordion items={items} /> */}
        {/* <Search /> */}
        {/* <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> */}
    </div>
}

export default App;