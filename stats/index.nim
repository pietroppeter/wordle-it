import nimib

nbInit
nbRawHtml: """
<style>
pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
</style>
"""
nbKaraxCode:
  import karax / localstorage

  var stats = "test"

  proc getStats(): string =
    try:
      $getItem("statistics")
    except:
      ""

  proc setStats(statsNew: string) =
    setItem("statistics".cstring, statsNew.cstring)

  let statsNewId = "statsNew"

  karaxHtml:
    tdiv:
      label:
        text "current stats"
      pre:
        code(lang="json", id = "currentStats"):
          text getStats().kstring
    button:
      text "Copy stats"
      proc onClick() =
        {.emit: """
    var copyText = document.getElementById("currentStats").innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard: \"" + copyText +"\"");
    });
""".}
    tdiv:
      label:
        text "new stats"
      textarea(id = statsNewId, placeholder = "")
    button:
      text "Set stats"
      proc onClick() =
        setStats($getVNodeById(statsNewId).getInputText)
nbSave
# to copy to clipboard in nim js the only reference found (old) tells to emit:
# https://gradha.github.io/articles/2019/03/from-python-windows-console-to-nim-karax-webapp.html
#
# code to emit taken from: https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/