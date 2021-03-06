import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import News from "./pages/Tabs/News";
import Profile from "./pages/Tabs/Profile";
import Search from "./pages/Tabs/Search";
import Submit from "./pages/Tabs/Submit";
import Trending from "./pages/Tabs/Trending";

import {
  newspaperOutline,
  searchOutline,
  personCircleOutline,
  createOutline,
  trendingUpOutline,
} from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs color="primary">
        <IonRouterOutlet>
          <Route
            path="/"
            component={() => <Redirect to="/news" />}
            exact={true}
          />
          <Route path="/news" component={News} />
          <Route path="/trending" component={Trending} />
          <Route path="/submit" component={Submit} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route component={() => <Redirect to="/news" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="danger">
          <IonTabButton tab="news" href="/news">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
          <IonTabButton tab="trending" href="/trending">
            <IonIcon icon={trendingUpOutline} />
            <IonLabel>Trending</IonLabel>
          </IonTabButton>
          <IonTabButton tab="submit" href="/submit">
            <IonIcon icon={createOutline} />
            <IonLabel>Submit</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
