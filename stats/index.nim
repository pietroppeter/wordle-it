import nimib

nbInit
nbRawHtml: """
<script src="https://unpkg.com/clipboard@2/dist/clipboard.min.js"></script>
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
        code(lang="json"):
          text getStats().kstring
    button(class="btn", `data-clipboard-text` = getStats().kstring):
      text "Copy stats"
    tdiv:
      label:
        text "new stats"
      textarea(id = statsNewId, placeholder = "")
    button:
      text "Set stats"
      proc onClick() =
        setStats($getVNodeById(statsNewId).getInputText)
  
nbSave