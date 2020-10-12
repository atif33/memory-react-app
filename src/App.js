import React, {Component} from 'react'
import './App.css'
import GuessCount from "./GuessCount";
import Card from "./Card";
import Atif from "./Atif";
import shuffle from 'lodash.shuffle'
import HallOfFame, {FAKE_HOF} from "./HalOfFame";


const SIDE = 6;
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿';
class App extends Component {

    cards = this.generateCards();
    handleCardClicked(card) {
        console.log('Card clicked ');
    }

    generateCards() {
        const result = [];
        const size = SIDE * SIDE;
        const candidates = shuffle(SYMBOLS);
        while (result.length < size) {
            const card = candidates.pop();
            result.push(card, card)
        }
        return shuffle(result)
    }

    render() {
        const won = new Date().getSeconds() % 2 === 0;
        return (<div className="memory">
                <GuessCount guesses={0}/>
                {this.cards.map((card, index) => (
                    <Card card={card} feedback="visible" key={index} onClick={this.handleCardClicked} />
                ))}
                <Atif count={3}/>
                {won && <HallOfFame entries={FAKE_HOF} />}
            </div>
        )
    }
}

export default App
