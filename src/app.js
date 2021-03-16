/**
 * @file Main Doodle Bark Web application file.
 * @copyright The Shapeless Team 2021
 * 
 * @author Glitch Bork <glitchbork.dev@gmail.com>
 */

/////////////////////
// #region // INIT //

    // Modules
    const express   = require('express'), // Express
          firebase  = require('firebase'); // Firebase


    // Express
    const app = express();


    // Firebase
    firebase.initializeApp({
        apiKey:            process.env.FIREBASE_API_KEY,
        authDomain:        process.env.FIREBASE_AUTH_DOMAIN,
        projectId:         "doodle-bark",
        storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: "289028901714",
        appId:             "1:289028901714:web:2ad20cd2f2f1beaa0c088b"
    });

    const auth      = firebase.auth(),
          firestore = firebase.firestore();

// #endregion INIT //
/////////////////////



/////////////////////////
// #region // FIREBASE //



// #endregion FIREBASE //
/////////////////////////