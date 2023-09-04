import React from "react";
import { connect } from "react-redux";

import Joke from "./Joke";

// const JokeList = props => {
//     const { jokes } = props;
const JokeList = props => {
    const { jokes } = props;
    console.log("Jokes:", jokes);
    
    return (
        <div id='jokeList'>
            {jokes.map((joke, index) => (
                <Joke key={index} joke={joke} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes
    }
}

export default connect(mapStateToProps)(JokeList);
