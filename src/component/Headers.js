import React from 'react';
import Link from './Link'; 

const Headers = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Widgets</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Accordion
                            </Link>        
                        </li>
                        <li className="nav-item">
                            <Link href="/search" className="nav-link">
                                Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dropdown" className="nav-link">
                                Dropdown
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/translate" className="nav-link">
                                Translate
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <div className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">

        //         </div>
        //     </div>
        // </div>
    )
}

export default Headers;