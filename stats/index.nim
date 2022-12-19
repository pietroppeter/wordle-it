import nimib

nbInit
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
    p:
      text "current stats"
    pre:
      text getStats().kstring
    label:
      text "new stats"
    textarea(id = statsNewId, placeholder = "")
    button:
      text "Set stats"
      proc onClick() =
        setStats($getVNodeById(statsNewId).getInputText)
  
nbSave