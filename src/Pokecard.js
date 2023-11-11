import "./Pokecard.css";
import React, { Component } from "react";
const imageAPI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imageSrc = `${imageAPI}${id}.png`;
    return (
      <div className="Pokecard">
        <div className="Pokecard-header">
          <h4 className="Pokecard-header-text">{name}</h4>
        </div>
        <div className="Pokecard-body">
          <img src={imageSrc} className="Pokecard-body-image" />
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
