/**
 * @file        Main Doodle Bark Web application file.
 * @copyright   The Shapeless Team 2021
 * @license     MIT
 * 
 * @author      Glitch Bork <glitchbork.dev@gmail.com>
 */



/////////////////////
// #region // INIT //

    // Modules
    const express   = require('express'), // Express
          firebase  = require('firebase'); // Firebase


    // Express
    const app = express();


    // Firebase
    firebase.initializeApp(require('./firebase.json'));

    const auth      = firebase.auth(),
          firestore = firebase.firestore();

// #endregion INIT //
/////////////////////



/////////////////////////
// #region // FIREBASE //



// #endregion FIREBASE //
/////////////////////////