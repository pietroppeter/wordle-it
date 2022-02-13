import sequtils, strutils, strformat, random

var
  puzzle_list*: seq[string]
  word_list: seq[string]
puzzle_list = lines("small5.txt").toSeq
echo "words in puzzle list: ", puzzle_list.len

const removeFromWordList = @["dorie", "borii"]
var
  countTotal = 0
  countKept = 0
for word in lines("big5.txt"):
  inc countTotal
  if word notIn removeFromWordList:
    word_list.add word
    inc countKept

echo "total words in word list: ", countTotal
echo "  words kept in word list: ", countKept

randomize(195)
shuffle(puzzle_list)

let
  words_as_list = word_list.filterIt(it notin puzzle_list).mapIt(&"\"{it}\"").join(", ")
  shuffled_as_list = puzzle_list.mapIt(&"\"{it}\"").join(", ")

# check where is placed yesterday's word
when defined(findOncia):
  var i = 0
  for word in puzzle_list:
    if word == "oncia":
      echo i
    inc i

when isMainModule:
  when false:
    writeFile("itLines.js"): &"""
  var Aa = [{shuffled_as_list}],
      La = [{words_as_list}],
"""

  writeFile("parole_old.txt", puzzle_list.join("\n"))