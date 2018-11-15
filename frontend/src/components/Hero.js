import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
    state = {
        activeHero: [],
    }

    getHero = async () => {
        //get parameter:name in the url  from Router path=':/name', 'name' is set by Heroes.Js Link passed in 
        const heroName = this.props.match.params.name
        const api_call = await fetch(`http://127.0.0.1:8000/?q=${heroName}`)
        const data = await api_call.json();
        let hero = data.map((hero) => {
            return hero
        })
        this.setState({
            activeHero: hero[0]
        })
    }

    componentDidMount() {
        this.getHero()
    }

    render() {
        const activeHero = this.state.activeHero
        console.log(activeHero)
        return (
            <div className='container'>
                {activeHero.length !== 0 &&
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='active-hero'>
                                <img className='active-hero__img' src={activeHero.image} alt={activeHero.name} />
                                <h3 className='active-hero__title'> {activeHero.name}</h3>
                                <ul >
                                    <li>Movement: {activeHero.types.movement}</li>
                                    <li>Weapon: {activeHero.types.weapon}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <h3 className='active-hero__title'>Stats:</h3>
                            <ul >
                                <li>Hp: {activeHero.stats.hp}</li>
                                <li>Attack: {activeHero.stats.attack}</li>
                                <li>Speed: {activeHero.stats.speed}</li>
                                <li>Defense: {activeHero.stats.defense}</li>
                                <li>Resistance: {activeHero.stats.resistance}</li>
                            </ul>

                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Hero;