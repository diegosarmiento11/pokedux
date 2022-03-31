import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokemonList = () => {
  const pokemons = Array(20).fill("hola");

  return (
    <Grid className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard></PokemonCard>
      ))}
    </Grid>
  );
};

export default PokemonList;
