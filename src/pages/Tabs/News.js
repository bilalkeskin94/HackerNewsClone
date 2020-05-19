import React from "react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";
import { IonPage, IonContent } from "@ionic/react";

const News = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SmallHeader title="Newsy" />
      </IonContent>
      <IonContent fullscreen>
        <LargeHeader title="Newsy" />
      </IonContent>
    </IonPage>
  );
};

export default News;
