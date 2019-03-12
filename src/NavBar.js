import React from 'react';

const Navbar = (props) => {
    // const active = (event) => {
    //     const findElem = document.getElementById('1')
    //     const findElem2 = document.getElementById('2')

    //     if (event.target.id === findElem.id) {
    //         findElem.classList.toggle('nav-link active')
    //         findElem2.classList.toggle('nav-link')

    //     }
    //     else {
    //         findElem.classList.toggle('nav-link')
    //         findElem2.classList.toggle('nav-link active')
    //     }
    // }
    return (
        <ul className="nav nav-pills">
            <a id="1" className="nav-link" href="/#/users">users</a>
            <a id="2" className="nav-link" href="/#/things">things</a>
        </ul>
    )
}

export default Navbar;
