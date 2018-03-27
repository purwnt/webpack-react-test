import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import RetailHome from "./RetailHome";
import RetailBusinessWireless from "./RetailBusinessWireless";
import RegRetailBusinessFiber from "./RegRetailBusinessFiber";

/*
import CorporateWireless from "./CorporateWireless";
import CorporateFiber from "./CorporateFiber";
import VideoConference from "./VideoConference";
import Hospitality from "./Hospitality";
import SharedHosting from "./SharedHosting";
import VPS from "./VPS";
import DedicatedServer from "./DedicatedServer";
import ColocationServer from "./ColocationServer";
import Support from "./Support";
import Contact from "./Contact";
import About from "./About";
*/

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/retail-home" component={RetailHome} />
      <Route exact path="/broadband-wireless" component={RetailBusinessWireless} />
      <Route exact path="/retail-business-fiber/registration" component={RegRetailBusinessFiber} />
    </Switch>
  </BrowserRouter>
);


      /*
      <Route exact path="/broadband-fiber-optic" component={RetailBusinessFiber} />
      <Route exact path="/corporate-wireless" component={CorporateWireless} />
      <Route exact path="/corporate-fiber-optic" component={CorporateFiber} />
      <Route exact path="/corporate-video-conference" component={VideoConference} />
      <Route exact path="/corporate-hospitality" component={Hospitality} />
      <Route exact path="/shared-hosting" component={SharedHosting} />
      <Route exact path="/vps" component={VPS} />
      <Route exact path="/dedicated-server" component={DedicatedServer} />
      <Route exact path="/colocation-server" component={ColocationServer} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      */