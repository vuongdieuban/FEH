import React, { Component } from 'react';
import Form from './Form'


class Heroes extends Component {
    state = {
        hero_detail: [],
        hero_summary: [],
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


    componentDidMount() {
        this.getListHeroes()
    }

    render() {
        return (
            <div>
                <Form getHeroes={this.getHeroes} />
                <div className='container'>
                    <div className='row'>
                        {this.state.hero_summary && this.state.hero_summary.map((hero) => {
                            return (
                                <div className='col-md-4' key={hero.id}>
                                    <div className='recipes__box'>
                                        <img className='recipes__box-img'
                                            src={hero.image}
                                            alt={hero.name} />
                                    </div>
                                    <div className='recipes__text'>
                                        <h5 className='recipes__title'>
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

// Hero Name: {hero.name} <br />
// <img src={hero.image}
//     alt={hero.name} />