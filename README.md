# Par🇮🇹le

https://pietroppeter.github.io/wordle-it/

Una versione italiana (non ufficiale) di [WORDLE](https://powerlanguage.co.uk/wordle/). Se l'autore di Wordle non approva, lo tiro giù: https://twitter.com/pietroppeter/status/1477993203425030144?s=20

Dizionari presi da https://github.com/napolux/paroleitaliane e https://github.com/sigmasaur/AnagramSolver

# English

An italian version of https://powerlanguage.co.uk/wordle/. Waiting from official approval (if not approved this will be taken down): https://twitter.com/pietroppeter/status/1477993203425030144?s=20

Current status is beta: it should mostly work, usage might find issues.

Italian words taken from https://github.com/napolux/paroleitaliane and https://github.com/sigmasaur/AnagramSolver

Apart from English translation, the actual work was to replace two list of words in the original javascript. The hint for this came to me from: https://bert.org/2021/11/24/the-best-starting-word-in-wordle/

Run `nim r itLines` and replace two lines in wordle-it.js to regenerate.

Analytics publicly available at: https://plausible.io/pietroppeter.github.io%2Fwordle-it

To reset state (also works for original wordle), type in console of your browser: `window.localStorage.clear()`
