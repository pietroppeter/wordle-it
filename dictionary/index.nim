import nimib

# todo: set Italian language in Nimib
nbInit
nbText: """ # Dizionario di Par🇮🇹le

Il dizionario di Par🇮🇹le (o Parle) è basato su due dizionari disponibili pubblicamente.

- un dizionario "piccolo" di circa 60_000 parole (`60_000_parole.txt`)
  preso da [napolux/paroleitaliane](https://github.com/napolux/paroleitaliane)
- un dizionario "grande" di più di 4 milioni di parole (`dictionary.txt`)
  preso da [sigmasaur/AnagramSolver](https://github.com/sigmasaur/AnagramSolver)

Questo documento viene usato per generare i dizionari finali usati da Parle
e documentare il processo di generazione.

Il processo è cambiato nel tempo:
  - il dizionario piccolo è in uso dal 3 gennaio 2022 (giorno di nascita di Parle)
  - il dizionario grande è in uso dal 4 gennaio 2022
  - a partire dal 12 febbraio la numerazione delle parole è fatta a partire dal 3 gennaio
    (precedentemente la numerazione era fatta a partire dal 1 febbraio 2021,
    data scelta un po' per caso ed un po' per sbaglio)
  - a partire dal 14 febbraio le parole da indovinare sono "curate", ovvero è stato fatto un processo di selezione
    (precedentemente erano selezionate in modo casuale a partire dal dizionario piccolo)

I due dizionari sono usati per generare i dizionari usati dal gioco, ovvero:
  - `soluzioni.txt`: dizionario che contiene in ordine alfabetico tutte le parole di 5 lettere che sono
    usate come parole da indovinare
  - `tentativi.txt`: dizionario che contiene in ordine alfabetico tutte le parole di 5 lettere che possono
    essere usate come tentativi (contiene le parole in `soluzioni.txt`)
  - `parole.txt`: dizionario che contiene l'ordine esatto delle parole da indovinare a partire dalla prima
    data del gioco

Il processo di generazione prevede i seguenti passi:

1. estrarre le parole di 5 lettere dai dizionari piccolo e grande, limitandosi
   alle parole che finiscono in vocale (il dizionario piccolo contiene radici di lemmi come `ripar` o simili).
   Il risultato (in ordine alfabetico) è salvato in `poche5.txt` e `tante5.txt`.
   Estrarre dai dizionari le parole di 5 lettere che finiscono in consonante e salvarle in `consonanti5.txt`
2. il dizionario `soluzioni.txt` è costruito manualmente a partire dai dizionari fin qui generati.
   Il processo di selezione delle possibili soluzioni è descritto in un documento a parte.
   contestualmente sono creati manualmente due dizionari `aggiunte.txt` e `rimosse.txt` che serviranno
   per generare il dizionario `tentativi.txt`.
3. un dizionario `fisse.txt` è generato a partire dalla soluzioni già usate nel gioco per fissare le
   parole usate a partire dal primo 3 gennaio fino ad una data di modifica della lista di parole da indovinare.
   In particolare il dizionario `fisse.txt` è contenuto in `soluzioni.txt` ed è generato a partire dal
   dizionario generato nel prossimo passo.
4. Il dizionario `parole.txt` è generato a partire dalle parole `fisse.txt` e dalle parole in `soluzioni.txt`
   con una generazione casuale
5. Infine viene generato il file `itLines.js` con le linee di codice da usare nel codice affinché usi
   le liste di `parole.txt` e `tentativi.txt` generate fino a qui.

Il resto del documento (in inglese) contiene il codice che implementa il processo e può contenere qualche lieve spoiler.

"""
nbSave