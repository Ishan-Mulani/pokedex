import React, { Component } from "react";
import "./Pokecard.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div>
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
    );
  }
}

export default Pokedex;
