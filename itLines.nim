import sequtils, strutils, strformat, random

var puzzle_list: seq[string]
puzzle_list = lines("small5.txt").toSeq

var word_list = lines("big5.txt").toSeq

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

writeFile("itLines.js"): &"""
  var Aa = [{shuffled_as_list}],
      La = [{words_as_list}],
"""
