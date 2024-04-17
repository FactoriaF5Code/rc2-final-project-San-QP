import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../../pages/Inicio/Inicio";
import { Login } from "../../pages/Login/Login";
import { Panel } from "../../pages/Panel/Panel";
import { MiHuerto } from "../../pages/MiHuerto/MiHuerto";
import { MisSemillas } from "../../pages/MisSemillas/MisSemillas";
import { SeedsProvider } from "../context/SeedsContext";
import { Comunidad } from "../../pages/Comunidad/Comunidad";
import { UnderConstruction } from "../../pages/UnderConstruction/UnderConstruction";
import { AdvertPage } from "../../pages/AdvertPage/AdvertPage";
import { AdvertsProvider } from "../context/AdvertsContext";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="login" element={<Login />} />
        <Route path="panel" element={<Panel />} />
        <Route path="mi-huerto" element={<MiHuerto />} />
        <Route
          path="mi-huerto/mis-semillas"
          element={
            <SeedsProvider>
              <MisSemillas />
            </SeedsProvider>
          }
        />
        <Route
          path="comunidad"
          element={
            <AdvertsProvider>
              <Comunidad />
            </AdvertsProvider>
          }
        />
        <Route
          path="comunidad/advert/:advertId"
          element={
            <AdvertsProvider>
              <AdvertPage />
            </AdvertsProvider>
          }
        />
        <Route path="wait-for-it" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
};
