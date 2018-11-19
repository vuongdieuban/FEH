import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form'


class Heroes extends Component {
    state = {
        heroes: [],
        search: '',
    }


    // Get Heroes(summary - name and img) immediately when the page loaded
    getListHeroes = async () => {
        //const api_call = await fetch(`http://127.0.0.1:8000/`);
        const api_call = await fetch('http://feh.banvuong.com/');
        const data = await api_call.json();
        let heroes = data.map((hero) => {
            return hero
        })
        this.setState({
            heroes: heroes
        })
        console.log(this.state.heroes);
    }


    // Filter Search from List View
    filterListHeroes(e) {
        const current_string = e.target.value.substr(0, 20);
        this.setState({
            search: current_string
        })

    }

    componentDidMount() {
        const json = localStorage.getItem('heroes');    //get the previous state before update
        const heroes = JSON.parse(json);
        //handle beginning case (empty local storage)where there are no heroes yet, get all heroes
        if (heroes == null) {
            this.getListHeroes();
        }
        else { this.setState({ heroes: heroes }) } //load the previous state
    }

    componentDidUpdate = () => {
        const heroes = JSON.stringify(this.state.heroes);
        localStorage.setItem('heroes', heroes); //save the state immediately after update(reload the page)
    }

    render() {
        let filteredHeroes = this.state.heroes.filter(
            (hero) => {
                return (
                    hero.name.toLowerCase().slice(0, this.state.search.length) === this.state.search.toLowerCase()
                );
            }
        );
        return (
            <div>
                < Form filterHeroes={this.filterListHeroes.bind(this)} value={this.state.search} />
                <div className='container'>
                    <div className='row'>
                        {filteredHeroes && filteredHeroes.map((hero) => {
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
            </div >
        );
    }
}

export default Heroes