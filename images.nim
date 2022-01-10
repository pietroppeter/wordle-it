import nimib

nbInit
nb.darkMode
nbText: """## Generating images for PAR🇮🇹LE

### Logo

this is the first image I have to reproduce: the `W` logo (size 144x144)
"""
nbImage("images/wordle_logo_144x144.png")
nbText: """
* by style inspection, font is _Clear Sans_
* download font from first google result: [fontsquirrel](https://www.fontsquirrel.com/fonts/clear-sans)
* use [pixie](https://github.com/treeform/pixie)
"""
nbCode:
  import pixie

  let
    # color codes from wordle's style
    green = parseHex("6aaa64")
    yellow = parseHex("c9b458")
    darkGray = parseHex("939598")
    white = color(1, 1, 1, 1)
    black = parseHex("212121")
  let typeface = readTypeface("fonts/ClearSans-Bold.ttf")

  proc newFont(typeface: Typeface, size: float32, color: Color): Font =
    result = newFont(typeface)
    result.size = size
    result.paint.color = color

  proc imageLetter(c: char, size: int): Image =
    let sizeFont: float32 = 11*size.float32 / 12 

    let image = newImage(size, size)
    image.fill(green)

    var font = newFont(typeface, sizeFont, white)

    image.fillText(font, $c, bounds = vec2(size.float32, sizeFont), hAlign = haCenter, vAlign = vaMiddle)
    return image
  
  imageLetter('W', 144).writeFile("images/wordle_logo_reproduced.png")
nbText: """and the output looks fine:"""
nbImage("images/wordle_logo_reproduced.png")
nbText: "now I generate the `P` variant for all sizes required by [manifest.json](manifest.json)"
nbCode:
  import strformat
  let sizes = [32, 48, 72, 96, 144, 168, 192, 512] # 32, 192 used for favicon
  var filenames: seq[string]
  for size in sizes:
    let filename = &"images/parle_logo_{size}x{size}.png"
    imageLetter('P', size).writeFile(filename)
    filenames.add filename
for filename in filenames:
  nbImage(filename)

nbText: """### Open Graph Image
Now I need to reproduce (and then translate) the [open graph](https://ogp.me) image (1200x630)
"""
# https://www.dailywordle.com/images/wordle_og_1200x630.png
nbImage("images/wordle_og_1200x630.png")
nbCode:
  let image = newImage(1200, 630)
nbText: &"""
Inspecting the image, I can recover size of squares, gaps, and margins
making sure that:
  * horizontally they sum up to 1200
  * and without borders they sum up to 1080;
  * vertically they sum up to 630
"""
nbCode:
  let
    squareSide = 166.float32
    gap = 16.8.float32
    horizontalMargin = 60.float32
    topMargin = 192.float32
    bottomMargin = 272.float32
    vertGap = 2*gap
  echo 6*squareSide + 5*gap + 2*horizontalMargin
  echo 6*squareSide + 5*gap
  echo topMargin + squareSide + bottomMargin
nbCode:
  var sizeFont = 10.5*squareSide / 12
  var font = newFont(typeface, sizeFont, white)

  proc addSquare(image: Image, i: int, c: char, color: Color) =
    let ctx = newContext(image)
    ctx.fillStyle = color

    let
      pos = vec2(horizontalMargin + float32(i)*squareSide + float32(i)*gap, topMargin)
      wh = vec2(squareSide, squareSide)

    ctx.fillRect(rect(pos, wh))
    image.fillText(font, $c, transform = translate(pos), bounds = vec2(squareSide, sizeFont), hAlign = haCenter, vAlign = vaMiddle)

  image.fill(white)
  for i in 0 .. 5:
    let word = "WORDLE"
    image.addSquare(i, word[i], green)

  sizeFont = squareSide / 3
  font = newFont(typeface, sizeFont, black)
  let text = "A DAILY WORD GAME"
  image.fillText(font, text, transform = translate(vec2(horizontalMargin, topMargin + squareSide + vertGap)), bounds = vec2(1080, sizeFont), hAlign = haCenter, vAlign = vaMiddle)

  image.writeFile("images/wordle_og_image_reproduced.png")
nbImage("images/wordle_og_image_reproduced.png")

nbText: """
It is evident this is not the correct font but result is good enough

Now let's translate:
"""
nbImage("images/flag_italy.png")
nbCode:
  let image2 = newImage(1200, 630)

  sizeFont = 10.5*squareSide / 12
  font = newFont(typeface, sizeFont, white)

  image2.fill(white)
  for i in 0 .. 5:
    let word = "PAR_LE"
    let squareColor = block:
      if i == 0:
        green
      elif i in [2, 5]:
        yellow
      else:
        darkGray
    if word[i] != '_':
      image2.addSquare(i, word[i], squareColor)

  sizeFont = squareSide / 3
  font = newFont(typeface, sizeFont, black)
  let text2 = "UN GIOCO DI PAROLE AL GIORNO"
  image2.fillText(font, text2, transform = translate(vec2(horizontalMargin, topMargin + squareSide + vertGap)), bounds = vec2(1080, sizeFont), hAlign = haCenter, vAlign = vaMiddle)

  let flag = readImage("images/flag_italy.png")

  image2.draw(flag, translate(vec2(horizontalMargin + 3*squareSide + 3*gap, topMargin)))
  image2.writeFile("images/parle_og_1200x630.png")
nbImage("images/parle_og_1200x630.png")

nbSave
