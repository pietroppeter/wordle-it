import std / [times, os, sequtils]

let
  startDate = dateTime(2022, mJan, 3)
  parole = lines("parole.txt").toSeq

when isMainModule:
  var
    i: int
    d: DateTime
  for word in commandLineParams():
    i = parole.find(word)
    if i < 0:
      echo word, " not found"
    else:
      d = startDate + i.days
      echo word, " n°", i, " on date ", d.format("yyyy-MM-dd")