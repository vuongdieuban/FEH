import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form'


class Heroes extends Component {
    state = {
        heroes: [],
        hero_loaded: [],
        search: '',
    }

    // Get Heroes(summary - name and img) immediately when the page loaded
    getListHeroes = async () => {
        const api_call = await fetch(`http://127.0.0.1:8000/`)
        const data = await api_call.json();
        let heroes = data.map((hero) => {
            return hero
        })
        this.setState({
            heroes: heroes
        })
        console.log(this.state.heroes)
    }


    // Search from the list on ListView
    searchListHeroes = async (e) => {
        e.preventDefault();
        const heroName = e.target.elements.heroesName.value
        const api_call = await fetch(`http://127.0.0.1:8000/?q=${heroName}`);
        const data = await api_call.json();
        let heroes = data.map((hero) => {
            return hero
        })
        this.setState({
            heroes: heroes
        })
        console.log(this.state.heroes)

    }

    componentDidMount() {
        this.getListHeroes()
    }

    render() {
        return (
            <div>
                <Form getHeroes={this.searchListHeroes} />
                <div className='container'>
                    <div className='row'>
                        {this.state.heroes && this.state.heroes.map((hero) => {
                            return (
                                <div className='col-md-3' key={hero.id} style={{ marginTop: '2rem' }}>
                                    <div className='heroes__box'>
                                        <img className='heroes__box-img'
                                            src={hero.image}
                                            alt={hero.name} />
                                    </div>
                                    <div className='heroes__text'>
                                        <h5 className='heroes__title'>
                                            <Link to={{
                                                pathname: `/${hero.name}`,
                                            }}>{hero.name}</Link>
                                        </h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Heroes