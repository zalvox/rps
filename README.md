# Rock Paper Scissors game

## Acceptance Criteria

Posso giocare Umano vs Computer?
Posso giocare Computer vs Computer?
Posso giocare una nuova partita conclusa quella precedente?

## User Story Back - Technical Constraints

Non è necessaria una GUI appariscente (può essere semplice ma non esclusivamente CLI)
Non dovrebbero essere necessarie librerie o moduli esterni se non per i test
Usa le pratiche riconosciute nell’industry dello sviluppo software
Considera di scrivere codice estendibile. Se lo farai dovrebbe essere relativamente semplice estendere il gioco alla variante Rock, paper, scissors, lizard and Spock
Questo è un Minimum Viable Product: eleganza e semplicità battono una ricca lista di feature

## Intro

Every match is composed of three rounds.
You can choose if you want to play the match in "human vs computer" mode or "computer vs computer".
Everytime the game mode is changed the status of the match is reset to the initial state.

If you want to extends the game, you need to update `lib/constants.js` that contains the available choices,
`lib/calculateRoundResult.js` that contains the rules to determine who win the round and add the image for the new choice in `assets` in `png` format.
Be sure to name the image file with the same name that you use in the available choices (e.g. `"lizard"` choice -> `lizard.png`).

## Getting started

Install dependencies by running `npm i`.
Then, run `npm run dev` to spin up the dev server. It is necessary to avoid CORS problem.
Then go to http://localhost:3000

## Test

To run e2e test you need to spin up the dev server then run `npm run test:e2e`.
Instad, if you want to run unit test run `npm run test:unit`.
