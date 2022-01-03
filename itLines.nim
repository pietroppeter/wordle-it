import sequtils, strutils, strformat, random

var
  words: seq[string] 

for line in "60_000_parole.txt".lines:
  if line.len == 5 and '\'' notIn line:
    words.add line

echo len words
let words_as_list = words.mapIt(&"\"{it}\"").join(", ")

randomize(42)
shuffle(words)
let shuffled_as_list = words.mapIt(&"\"{it}\"").join(", ")

writeFile("itLines.js"): &"""
  var Aa = [{shuffled_as_list}],
      La = [{words_as_list}],
"""
  