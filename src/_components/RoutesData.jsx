import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../_pages/Home";
import Bio from "../_pages/Bio";
import Eshop from "../_pages/Eshop";
import Contacto from "../_pages/Contacto";

import BioNavigation from "../_pages/_pagesNavigation/BioNavigation";
import MusicaNavigation from "../_pages/_pagesNavigation/MusicaNavigation";
import ArtNavigation from "../_pages/_pagesNavigation/ArtNavigation";

import ContactNavigation from "../_pages/_pagesNavigation/ContactNavigation";
import EshopNavegacion from "../_pages/_pagesNavigation/EshopNavegacion";

export default function RoutesData() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="bio" element={<Bio />} />

      <Route path="eshop" element={<Eshop />} />

      <Route path="contacto" element={<Contacto />} />

      <Route path="biographysite" element={<BioNavigation />} />
      <Route path="musicsite" element={<MusicaNavigation />} />
      <Route path="artsite" element={<ArtNavigation />} />

      <Route path="eshopsite" element={<EshopNavegacion />} />
      <Route path="contactsite" element={<ContactNavigation />} />
    </Routes>
  );
}
