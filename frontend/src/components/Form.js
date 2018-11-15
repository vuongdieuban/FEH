import React from 'react'

const Form = (props) => {
    return (
        <div className="container">
            <form onSubmit={props.getHeroes}>
                <input className='form__input' type='text' name='heroesName' />
                <button className='form__button'>Search</button>
            </form>
        </div>
    );
}

export default Form