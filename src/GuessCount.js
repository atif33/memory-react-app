import React from 'react'
import PropType from 'prop-types'

import './GuessCount.css'

const GuessCount = ({guesses}) => <div className="guesses">{guesses}</div>;
GuessCount.propTypes = {
    guesses: PropType.number.isRequired
};

GuessCount.propTypes = {
    guesses: PropType.number.isRequired
};

export default GuessCount
