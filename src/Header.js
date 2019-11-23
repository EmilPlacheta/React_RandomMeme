import React from "react"

function Header() {

const headerImgStyle = {
    display: 'flex',
    justifyContent: 'center',
}

    return (
        <header style={headerImgStyle} >
            <img
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
                height='100px'
            />
        </header>
    )
}

export default Header
