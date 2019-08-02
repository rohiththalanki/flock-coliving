/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAvA08aPEpMuA08iEd9Xnt4-jhJW8eZFWw',
    authDomain: 'flock-production.firebaseapp.com',
    databaseURL: 'https://flock-production.firebaseio.com',
    projectId: 'flock-production',
    storageBucket: 'flock-production.appspot.com',
    messagingSenderId: '920490074207',
    appId: '1:920490074207:web:992a3369a1a98e1e',
  },
};
