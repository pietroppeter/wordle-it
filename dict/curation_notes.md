Il 14 Febbraio ci sarà la parola "dinne" che vorrei evitare. quindi tocca finalmente "curare" il dizionario.

* curated.txt contiene le parole che possono essere usate come soluzione
* inizia come una copia di small.txt (che è la fonte originale di parola da usare come soluzione)
* posso aggiungere altre parole da big.txt
* il punto in cui sono arrivato è indicato da '---' in curated.txt
* mantengo forme verbali, aggettivi, plurali ma tengo solo una parola per campo semantico 
* aggiungo una lista di parole da rimuovere e che non si possono usare come indizi (tendenzialmente parole che sono in big.txt)
* aggiungerò un file past.txt che sarà usato per tenere la storia (dal 3 gennaio) fissa (e qualche giorno nel futuro
* ricordarsi di aggiungere parole che finiscono in consonante (e.g hotel)
* la data di riferimento di partenza cambierà è partira in modo che la prima parola il 3 gennaio sia "Oncia". Aggiungerò n° alla condivisione per rendere esplicito il cambio
* parole dialettali no
* poche e selezionate parole straniere
* parole accentate cosa fare lascio? (e.g. caffe, citta). non tra le curate (tranne una) ma lascio nel dizionario.
* messi anche termini scientifici
* nomi di animali anche esotici (eg. okapi)
* qualche nome geografico (curdo, egizi, masai)

cose da fare:
- [ ] controllare siano in ordine e senza doppioni
- [ ] aggiungere parole che finiscono per consonanti (hotel, nobel, oscar, ...)
- [ ] funzione distanza
- [ ] mettere constraint su distanza tra parole successive (e.g. dist > 2 per parole successive, niente parole con dist = 1 nell'arco di due settimane)?? not sure. let's see stats about that first...
- [ ] quante "stanghe" ci sono? dove una stanga è un insieme di parole in cui solo una lettera cambia (sempre la stessa) e l'insieme ha cardinalità almeno 5. 
- [ ] per le stanghe vale la pena verificare anche altre parole presenti nel dizionario esteso ed eliminare quelle inesistenti
- [ ] confronto con dizionario di parolette
- [ ] parole fisse (quelle passate + 2-3 nel futuro), da aggiornare subito prima del rilascio
- [ ] confronto con parole fisse (verificare che ci siano)
- [ ] statistiche sulle lettere (e sulle distanze)


altri file:
- removed.txt rimuove parole dalla word list
- add.txt aggiunge parole alla word list
- la word list totale è: curated + big5 - removed + add
- le parole soluzioni sono tutte e sole quelle di curated
- fixed.txt sono le prime parole da usare e devono essere presenti in curated