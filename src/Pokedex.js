import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    const { pokemons, exp, isWinner } = this.props;
    let title;
    if (isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Loosing Hand</h1>;
    }

    return (
      <div className="Pokedex">
        {title}
        <h4>Total Exp: {exp}</h4>
        <div className="Pokedex-body">
          {pokemons.map((pokemon) => {
            return (
              <Pokecard
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                base_experience={pokemon.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
