import "./Pokecard.css";
import React, { Component } from "react";

const padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

const imageAPI =
  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imageSrc = `${imageAPI}${padToThree(id)}.png`;
    return (
      <div className="Pokecard">
        <div className="Pokecard-header">
          <h3 className="Pokecard-header-text">{name}</h3>
        </div>
        <div className="Pokecard-body">
          <div className="Pokecard-body-image">
            <img src={imageSrc} />
          </div>
        </div>
        <div className="Pokecard-footer">
          <p>Type : {type}</p>
          <p>EXP : {base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
