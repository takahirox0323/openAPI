import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Chakra } from "./pages/Chakra";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Material } from "./pages/Material";
import { BluePrint } from "./pages/BluePrint";
import { ReactBootstrap } from "./pages/ReactBootstrap";
import { Tailwind } from "./pages/Tailwind";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/material" component={Material} />
        <Route exact path="/reactBootstrap" component={ReactBootstrap} />
        <Route exact path="/chakra" component={Chakra} />
        <Route exact path="/bluePrint" component={BluePrint} />
        <Route exact path="/tailwind" component={Tailwind} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
