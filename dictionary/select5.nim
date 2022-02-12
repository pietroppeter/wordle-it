import sequtils, strutils

var
  word_list: seq[string] 
  puzzle_list: seq[string]

const
  alphabet = toSeq("abcdefghijklmnopqrstuvwxyz")
  endings = toSeq("aeio")

# word list is taken from bigger file (dictionary.txt)
var add: bool
for line in "dictionary.txt".lines:
  add = true
  if line.len == 5 and '\'' notIn line:
    for c in line:
      if c notin alphabet:
        add = false
        break
    if line[4] notin endings:
      add = false
    if add:
      word_list.add line

# puzzle list is taken from smaller file (more reasonable words)
for line in "60_000_parole.txt".lines:
  add = true
  if line.len == 5 and '\'' notIn line:
    for c in line:
      if c notin alphabet:
        add = false
        break
    if line[4] notin endings:
      add = false
    if add:
      puzzle_list.add line

writeFile("big5.txt"): word_list.join("\n")
writeFile("small5.txt"): puzzle_list.join("\n")

echo len word_list
echo puzzle_list.len

# check where is placed yesterday's word
when defined(findOncia):
  var i = 0
  for word in puzzle_list:
    if word == "oncia":
      echo i
    inc i
  
# 7910
# 2510