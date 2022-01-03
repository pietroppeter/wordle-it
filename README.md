# Wordle🇮🇹

https://pietroppeter.github.io/wordle-it/wordle.html

An italian version of https://powerlanguage.co.uk/wordle/. Waiting from official approval (if not approved this will be taken down): https://twitter.com/pietroppeter/status/1477993203425030144?s=20

Basically it just replaces two list of words in original javascript. The hint for this came to me from: https://bert.org/2021/11/24/the-best-starting-word-in-wordle/

Current status is minimal changes to have this work with Italian words, many improvements can be surely made (including further translation, better word selection/sources, ...).

Italian words taken from https://github.com/napolux/paroleitaliane and https://github.com/sigmasaur/AnagramSolver

Run `nim r itLines` and replace two lines in wordle-it.js to regenerate.

Analytics publicly available at: https://plausible.io/pietroppeter.github.io%2Fwordle-it

To reset state (also works for original wordle), type in console of your browser: `window.localStorage.clear()`
