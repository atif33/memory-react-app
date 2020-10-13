import PropTypes from 'prop-types'
import React, {Component} from 'react'

import './HighScoreInput.css'
import {saveHOFEntry} from "./HalOfFame";


class HighScoreInput extends Component {
    state = {winner: ''};

    handleWinnerUpdat = (event) => {
        this.setState({winner: event.target.value.toUpperCase()});
    };

    // Arrow fx for binding
    persistWinner = (event) => {
        event.preventDefault();
        const newEntry = {guesses: this.props.guesses, player: this.state.winner};
        saveHOFEntry(newEntry, this.props.onStored);
    };


    render() {
        return (
            <form className="highScoreInput" onSubmit={this.valid}>
                <p>
                    <label>
                        Bravo ! Entre ton prénom :
                        <input type="text" autoComplete="given-name" placeholder="your name"
                               onChange={this.handleWinnerUpdat}

                               value={this.state.winner}/>

                    </label>
                    <button type="submit">J’ai gagné !</button>
                </p>
            </form>
        )
    }
}

HighScoreInput.propTypes = {
    guesses: PropTypes.number.isRequired,
    onStored: PropTypes.func.isRequired,
};

export default HighScoreInput
