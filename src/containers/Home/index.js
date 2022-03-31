import React, { useEffect } from "react";
import { connect } from "react-redux";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { getPokemons } from "../../api/getPokemons";
import { setPokemon } from "../../actions";

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemon: (value) => dispatch(setPokemon(value)),
});

function Home({ list, setPokemon }) {
  useEffect(() => {
    getPokemons().then((res) => {
      setPokemon(res.results);
    });
  });

  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
