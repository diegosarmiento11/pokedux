import React from "react";
import { Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";

const PokemonCard = () => {
  return (
    <Grid.Column mobile={16} talet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR}>
          <Image centered src="" alt="pokemon-front"></Image>
          <p className="Pokemon-title">Ditto</p>
          <Label color={MAIN_COLOR}>Normal</Label>
        </Icon>
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
