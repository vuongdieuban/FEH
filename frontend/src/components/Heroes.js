import React, { Component } from 'react';
import Form from './Form'


class Heroes extends Component {
    state = {
        hero_detail: [],
        hero_summary: [],
        hero_loaded: [],
        search: '',
    }

    // Get Heroes (full detail) when fill in search form
    getDetailHeroes = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://127.0.0.1:8000/`);
        const data = await api_call.json();
        this.setState({ hero_detail: data })
        return (
            console.log(this.state.hero_detail)
        );
    }

    // Get Heroes(summary - name and img) immediately when the page loaded
    getListHeroes = async () => {
        const api_call = await fetch(`http://127.0.0.1:8000/summary/`)
        const data = await api_call.json();
        let hero_summary = data.map((hero) => {
            return hero
        })
        this.setState({
            hero_summary: hero_summary
        })
        console.log(this.state.hero_summary)
    }


    searchListHeroes = async (e) => {
        e.preventDefault();
        const heroName = e.target.elements.heroesName.value
        const api_call = await fetch(`http://127.0.0.1:8000/?q=${heroName}`);
        const data = await api_call.json();
        let hero_summary = data.map((hero) => {
            return hero
        })
        this.setState({
            hero_summary: hero_summary
        })
        console.log(this.state.hero_summary)

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
                        {this.state.hero_summary && this.state.hero_summary.map((hero) => {
                            return (
                                <div className='col-md-3' key={hero.id} style={{ marginTop: '2rem' }}>
                                    <div className='heroes__box'>
                                        <img className='heroes__box-img'
                                            src={hero.image}
                                            alt={hero.name} />
                                    </div>
                                    <div className='heroes__text'>
                                        <h5 className='heroes__title'>
                                            {hero.name}
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