import itLines, std / [times, os]

let
  fixedWord = "farne"
  fixedDate = dateTime(2022, mFeb, 1)

let fixedIndex = puzzleList.find(fixedWord)

when isMainModule:
  var
    i: int
    d: DateTime
  for word in commandLineParams():
    i = puzzleList.find(word)
    if i < 0:
      echo word, " not found"
    else:
      d = fixedDate + (i - fixedIndex).days
      echo word, " ", (i - fixedIndex), " days after ", fixedWord, " on ", d