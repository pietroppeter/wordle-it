# search words close (one letter difference) to a given word (in both dictionaries)
import std / [os, sequtils]
assert paramCount() == 1, "you need to provide exactly one parameter"
let word = paramStr(1)
assert len(word) == 5, "the parameter must be a 5 letter word"
let
  small = lines("small5.txt").toSeq
  big = lines("big5.txt").toSeq

type
  SearchResult = tuple[contained: bool, neighbours: seq[string]]

func search(word: string, dictionary: seq[string]): SearchResult =
  assert len(word) == 5
  for w in dictionary:
    assert len(w) == 5
    var count = 0
    for i in 0 .. 4:
      if w[i] == word[i]:
        inc count
    if count == 5:
      result.contained = true
    elif count == 4:
      result.neighbours.add w

var 
  result: SearchResult

result = search(word, small)
if result.contained:
  echo word, " in 📕"  
echo "neighbours in 📕: ", result.neighbours

result = search(word, big)
if result.contained:
  echo word, " in 📚"  
echo "neighbours in 📚: ", result.neighbours