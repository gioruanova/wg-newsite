import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../_pages/Home";
import Bio from "../_pages/Bio";
import Musica from "../_pages/Musica";
import Tatuaje from "../_pages/Tatuaje";
import PlasticaYMas from "../_pages/PlasticaYMas";
import Pintura from "../_pages/Pintura";
import Eshop from "../_pages/Eshop";
import Contacto from "../_pages/Contacto";

import BioNavigation from "../_pages/_pagesNavigation/BioNavigation";
import MusicaNavigation from "../_pages/_pagesNavigation/MusicaNavigation";
import PinturaNavigation from "../_pages/_pagesNavigation/PinturaNavigation";
import TatuajeNavigation from "../_pages/_pagesNavigation/TatuajeNavigation";
import PlasticaYMasNavigation from "../_pages/_pagesNavigation/PlasticaYMasNavigation";
import ContactNavigation from "../_pages/_pagesNavigation/ContactNavigation";
import EshopNavegacion from "../_pages/_pagesNavigation/EshopNavegacion";

export default function RoutesData() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="bio" element={<Bio />} />
      <Route path="musica" element={<Musica />} />
      <Route path="tatuaje" element={<Tatuaje />} />
      <Route path="pintura" element={<Pintura />} />
      <Route path="plasticaymas" element={<PlasticaYMas />} />
      <Route path="eshop" element={<Eshop />} />

      <Route path="contacto" element={<Contacto />} />

      <Route path="bionavigation" element={<BioNavigation />} />
      <Route path="musicanavigation" element={<MusicaNavigation />} />
      <Route path="tatuajenavigation" element={<TatuajeNavigation />} />
      <Route path="pinturanavigation" element={<PinturaNavigation />} />
      <Route
        path="plasticaymasnavigation"
        element={<PlasticaYMasNavigation />}
      />
      <Route path="eshopnavegacion" element={<EshopNavegacion />} />
      <Route path="contactnavigation" element={<ContactNavigation />} />
    </Routes>
  );
}
