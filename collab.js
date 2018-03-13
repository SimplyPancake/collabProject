function langArabic() {

}

function langChinese() {

}

function langDutch() {
  document.getElementById("video-games").innerHTML = "Videospellen";
  document.getElementById("home").innerHTML = "Hoofdpagina"
}

function langEnglish() {

}

function langHindi() {

}

function langJapanese() {

}

function langUrdu() {

}

function search() {
  swal({
    text: "Search for a game eg. Minecraft",
    closeOnClickOutside: false,
    closeOnEsc: false,
    content: {
      element: "input",
      attributes: {
        placeholder: "Search!"
      }
    },
    buttons: ["Dismiss", true],
  }).then((gameSearch) => {
    if ((gameSearch == "Minecraft") || (gameSearch == "minecraft")) { //Added the ability to search in lowercase
      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: "Minecraft",
        text: "Here's a Documentation on Minecraft",
        icon: "MinecraftJpg.jpg"
      })
    } else if ((gameSearch == "Roblox") || (gameSearch == "roblox")) { //Added the ability to search in lowercase
      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: "Roblox",
        icon: "RobloxPng.png"
      })
    } else if (gameSearch == "") {
      swal("Input = Nothing", "You have to type something!!", "warning", {
        buttons: ["Dismiss", true]
      }).then((inputNothing) => {
        if (inputNothing) {
          swal({
            text: "Search for a game eg. Minecraft",
            closeOnClickOutside: false,
            closeOnEsc: false,
            content: {
              element: "input",
              attributes: {
                placeholder: "Search!"
              }
            },
            buttons: ["Dismiss", true],
          }).then((gameSearch) => {
            if ((gameSearch == "Minecraft") || (gameSearch == "minecraft")) {
              swal({
                closeOnClickOutside: false,
                closeOnEsc: false,
                title: "Minecraft",
                text: "Here's a Documentation on Minecraft",
                icon: "MinecraftJpg.jpg"
              })
            } else if ((gameSearch == "Roblox") || (gameSearch == "roblox")) {
              swal({
                closeOnClickOutside: false,
                closeOnEsc: false,
                title: "Roblox",
                icon: "RobloxPng.png"
              })
            } else if (gameSearch == "Splatoon") {
              swal({
                title: "Splatoon",
                icon
              })
            } else if (gameSearch == "") {
              swal("Input=Nothing, AGAIN", "You have to type something!!", "warning", {
                buttons: ["Dismiss", true]
              })
            } else {
              swal({
                closeOnClickOutside: false,
                closeOnEsc: false,
                title: "Error 404",
                text: "Sorry, we couldn't get what you asked for!",
                icon: "error"
              })
            }
          })
        }
      })
    } else {
      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: "Error 404",
        text: "Sorry, we couldn't get what you asked for!",
        icon: "error"
      })
    }
  })
}