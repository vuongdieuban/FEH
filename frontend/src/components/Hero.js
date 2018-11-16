import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
    state = {
        activeHero: [],
    }

    // Get info of individual hero
    getHero = async () => {
        //get parameter:name in the url  from Router path=':/name', 'name' is set by Heroes.Js Link passed in 
        const heroName = this.props.match.params.name;
        const api_call = await fetch(`http://127.0.0.1:8000/?q=${heroName}`);
        const data = await api_call.json();
        let hero = data.map((hero) => {
            return hero
        })
        this.setState({
            activeHero: hero[0]
        })
    }


    // Helper function to display stats bar
    dispHeroStats = () => {
        const disp = [];
        const hero = this.state.activeHero;
        const heroStats = {
            HP: hero.stats.hp,
            ATTK: hero.stats.attack,
            SPD: hero.stats.speed,
            DEF: hero.stats.defense,
            RES: hero.stats.resistance,
        };
        const maxStat = 65;
        for (let i = 0; i < 5; i++) {
            const statPercent = Object.values(heroStats)[i] / maxStat * 100;
            disp.push(
                <div>
                    <span id='active-hero__stats-text'>{Object.keys(heroStats)[i]} : {Object.values(heroStats)[i]}</span>
                    <span className={`${Object.keys(heroStats)[i]}`} id='active-hero__stats-bar' style={{ width: `${statPercent}%` }} ></span>
                </div>
            )
        }
        return disp;
    }

    componentDidMount() {
        this.getHero();
    }

    render() {
        const activeHero = this.state.activeHero
        console.log(activeHero)
        return (
            <div className='container'>
                {activeHero.length !== 0 &&
                    <div>
                        <div className='row'>
                            <div className='col-lg-12   '>
                                <div className='active-hero'>
                                    <div className="active-hero__img-container">
                                        <img className='active-hero__img' src={activeHero.image} alt={activeHero.name} />
                                        <img className='active-hero__movement' src={`https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-02/Icon_Move_${activeHero.type.movement}.png`}
                                            atl={`${activeHero.type.movement}`} />
                                        <img className='active-hero__weapon' src={`https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-05/Icon_Class_${activeHero.type.weapon}.png`}
                                            atl={`${activeHero.type.weapon}`} />
                                    </div>
                                    <h3 className='active-hero__title'> {activeHero.name}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h3 className='active-hero__stats-header'>Stats:</h3>
                                <div className='active-hero__stats-container'>
                                    <div className='active-hero__stats-detail'>
                                        {this.dispHeroStats()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Hero;