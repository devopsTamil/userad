import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Self hosted, Friends AD</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Friend</button>
            </div>
        </header>
    )
}

export default Header