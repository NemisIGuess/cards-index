import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Units from './Components/Units/Units';
import Spells from './Components/Spells/Spells';
import Lands from './Components/Lands/Lands';
import Rules from './Components/Rules/Rules';
import Navigation from './Components/Navigation/Navigation';
import firebase from 'firebase/app';
import 'firebase/auth';

const App = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRESTORE_APIKEY,
    authDomain: process.env.REACT_APP_FIRESTORE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIRESTORE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIRESTORE_APPID,
  };

  const provider = firebase.initializeApp(firebaseConfig);

  const signIn = () => {
    const userLogIn = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(userLogIn);
  };

  const signOut = () => {
    provider.auth().signOut();
    console.log(provider.auth().currentUser);
  };

  return (
    <div className="container">
      <Navigation signIn={signIn} signOut={signOut} />
      <Switch>
        <Route path="/units" exact component={Units} />
        <Route path="/spells" exact component={Spells} />
        <Route path="/lands" exact component={Lands} />
        <Route path="/rules" exact component={Rules} />
      </Switch>
    </div>
  );
};

export default App;
