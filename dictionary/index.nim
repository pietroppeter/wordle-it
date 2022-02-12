import nimib, std / [strformat, sequtils, strutils, sugar, setutils]

# todo: set Italian language in Nimib
nbInit

# filenames block is moved to a later point in the document
nbCode:
  const
    filenameSmallSource = "60_000_parole.txt"
    filenameBigSource = "dictionary.txt"
    filenameCurated = "curated.txt"
    filenameWordList = "word_list.txt"
    filenameParole = "parole.txt"
    filenameSmall5 = "small5.txt"
    filenameBig5 = "big5.txt"
    filenameHotel = "hotels.txt"
    filenameAddToWordList = "word_list_add.txt"
    filenameRemoveFromWordList = "word_list_remove.txt"
    filenameFixed = "fixed.txt"
    filenameItLines = "itLines.js"

let blockFilename = nb.blocks.pop

nbText: &""" # Dizionario di Par🇮🇹le

Il dizionario di Par🇮🇹le (o Parle) è basato su due dizionari disponibili pubblicamente.

- un dizionario "piccolo" di circa 60_000 parole (`{filenameSmallSource}`)
  preso da [napolux/paroleitaliane](https://github.com/napolux/paroleitaliane)
- un dizionario "grande" di più di 4 milioni di parole (`{filenameBigSource}`)
  preso da [sigmasaur/AnagramSolver](https://github.com/sigmasaur/AnagramSolver)

Questo documento spiega ed implementa il processo di generazione dei dizionari usati da Parle.

I due dizionari sorgente sono usati per generare i dizionari usati dal gioco, ovvero:
  - `{filenameCurated}`: dizionario che contiene in ordine alfabetico tutte le parole di 5 lettere che sono
    usate come parole da indovinare
  - `{filenameWordList}`: dizionario che contiene in ordine alfabetico tutte le parole di 5 lettere che possono
    essere usate come tentativi (contiene anche le parole in `{filenameCurated}`)
  - `{filenameParole}`: dizionario che contiene l'ordine esatto delle parole da indovinare a partire dalla prima
    data del gioco (contiene tutte e sole le parole di `{filenameCurated}` in ordine sparso)

Il processo di generazione prevede i seguenti passi:

1. estrarre le parole di 5 lettere dai dizionari piccolo e grande, limitandosi
   alle parole che finiscono in vocale (il dizionario piccolo contiene radici di lemmi come _ripar_ o simili).
   Il risultato (in ordine alfabetico) è salvato in `{filenameSmall5}` e `{filenameBig5}`.
   Estrarre dai dizionari le parole di 5 lettere che finiscono in consonante (e.g. hotel, ...)
   e salvarle in `{filenameHotel}`
2. il dizionario `curated.txt` è costruito manualmente a partire dai dizionari fin qui generati.
   Il processo di selezione delle possibili soluzioni è descritto in un documento a parte.
   contestualmente sono creati manualmente due dizionari `{filenameAddToWordList}`
   e `{filenameRemoveFromWordList}` che serviranno
   per generare il dizionario `{filenameWordList}`.
3. un dizionario `{filenameFixed}` è generato a partire dalla soluzioni già usate nel gioco per fissare le
   parole usate a partire dal primo 3 gennaio fino ad una data di modifica della lista di parole da indovinare.
   In particolare il dizionario `{filenameFixed}` è contenuto in `{filenameCurated}` ed è generato a partire dal
   dizionario generato nel prossimo passo.
4. Il dizionario `{filenameParole}` è generato a partire dalle parole `{filenameFixed}`
   e dalle parole in `{filenameCurated}` con una generazione casuale
5. Infine viene generato il file `{filenameItLines}` con le linee di codice da usare nel codice affinché usi
   le liste di `{filenameParole}` e `{filenameWordList}` generate fino a qui.

**Nota**: il gioco non usa parole accentate. Parole accentate (con accento finale rimosso)
compaiono in `{filenameWordList}` ma non in `{filenameParole}`.

## Storia del processo di generazione del dizionario

Il processo è cambiato nel tempo:
  - il dizionario piccolo è in uso dal 3 gennaio 2022 (giorno di nascita di Parle)
  - il dizionario grande è in uso dal 4 gennaio 2022
  - a partire dal 12 febbraio la numerazione delle parole è fatta a partire dal 3 gennaio
    (precedentemente la numerazione era fatta a partire dal 1 febbraio 2021,
    data scelta un po' per caso ed un po' per sbaglio)
  - a partire dal 14 febbraio le parole da indovinare sono "curate", ovvero è stato fatto un processo di selezione
    (precedentemente erano selezionate in modo casuale a partire dal dizionario piccolo)

Il resto del documento (in inglese) contiene il codice che implementa il processo e può contenere qualche lieve spoiler.

## 0. Filenames

All filenames used
"""
nb.blocks.add blockFilename
nbText: """
## 1. Extract 5 letter words from source dictionaries
"""
nbCode:
  type FilterFileStats = tuple[sourceLines, destLines: int]

  proc filterFile(source, dest: string, condition: string -> bool): FilterFileStats =
    ## filter lines in source file according to condition and write valid lines in destination
    ## outputs line count of source and destination file    
    var outLines : seq[string]
    for line in source.lines:
      inc result.sourceLines
      if condition(line):
        inc result.destLines
        outLines.add line
    writeFile(dest): outLines.join("\n")

# first time I am using toSet from std / setutils (did not know that module existed)
nbCode:
  const
    alphabet = toSet("abcdefghijklmnopqrstuvwxyz")
    vowels = toSet("aeio")
    consonants = alphabet - vowels

  func buona(word: string): bool =
    len(word) == 5 and toSet(word) <= alphabet and word[^1] in vowels

  func hotel(word: string): bool =
    len(word) == 5 and toSet(word) <= alphabet and word[^1] in consonants

  echo filterFile(filenameSmallSource, filenameSmall5, buona)
  echo filterFile(filenameBigSource, filenameBig5, buona)

  echo filterFile(filenameBigSource, filenameHotel, hotel)

nbText: """# Nim(ib) notes

These notes may be of interest to you only if you know what Nim and Nimib are
(language and library used to generate this document).

* imports are not shown (see Show Source below)
* const filenames used in initial paragraph but shown later
"""
nbSave