import React from "react";
import { Content, InternalLinks, Paragraphs, Titles } from "../_components/Styles";

const Bio = () => {
  return (
    <Content>
      <Titles>Walter Gandini</Titles>
      <Paragraphs>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem perspiciatis dolores error alias quasi facilis atque, deserunt architecto eius, nesciunt ex inventore quis sapiente similique possimus nihil? Vel, reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem perspiciatis dolores error alias quasi facilis atque, deserunt architecto eius, nesciunt ex inventore quis sapiente similique possimus nihil? Vel, reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem perspiciatis dolores error alias quasi facilis atque, deserunt architecto eius, nesciunt ex inventore quis sapiente similique possimus nihil? Vel, reiciendis.</Paragraphs>
      <InternalLinks to="/bionavigation">Ver Mas</InternalLinks>
    </Content>
  );
};

export default Bio;
