import React from 'react'

const Form = (props) => {
    return (
        <div className="container">
            <form>
                <input className='form__input' type='text' name='heroesName' onChange={props.filterHeroes} value={props.value} />
                <button className='form__button'>Search</button>
            </form>
        </div>
    );
}

export default Form