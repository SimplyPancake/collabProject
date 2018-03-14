var gameList = ["Minecraft", "Splatoon", "Roblox", "Fortnite", "Portal", "Overwatch"];
var gameDesc = [];
gameDesc["Minecraft"] = "Minecraft is a sandbox video game created and designed by Swedish game designer Markus 'Notch' Persson, and later fully developed and published by Mojang. The creative and building aspects of Minecraft allow players to build with a variety of different cubes in a 3D procedurally generated world. Other activities in the game include exploration, resource gathering, crafting, and combat.";
gameDesc["Roblox"] = "Roblox is the world's largest social platform for play. Every month, over 60 million active players imagine, build, and play together within immersive 3D worlds.";
gameDesc["Splatoon"] = "Splatoon is a third-person shooter video game developed and published by Nintendo for the Wii U, which was released worldwide in May 2015. The game centers around characters known as Inklings—beings that can transform between humanoid and squid forms, and hide or swim through colored ink sprayed on surfaces using gun, bucket, or brush-based weaponry. Splatoon features several game modes, including 4-on-4 online multiplayer, and a single player campaign.";
gameDesc["Fortnite"] = "Fortnite is a co-op sandbox survival game developed by Epic Games and People Can Fly, with Epic Games also publishing the game. The game was released as a paid early access title for Microsoft Windows, macOS, PlayStation 4 and Xbox One on July 25, 2017, with a full free-to-play release expected in 2018.";
gameDesc["Portal"] = "Portal is a puzzle-platform video game developed and published by Valve Corporation. It was released in a bundle package called The Orange Box for Microsoft Windows, Xbox 360 and PlayStation 3 in 2007. The game has since been ported to other systems, including OS X, Linux, and Android."
gameDesc["Overwatch"] = "Overwatch is a team-based multiplayer online first-person shooter video game developed and published by Blizzard Entertainment. It was released in May 2016 for Windows, PlayStation 4, and Xbox One. Overwatch assigns players into two teams of six, with each player selecting from a roster of over 20 characters, known in-game as "heroes", each with a unique style of play, whose roles are divided into four general categories: Offense, Defense, Tank, and Support."
var gameIcon = []
gameIcon["Minecraft"] = "media/MinecraftJpg.jpg";
gameIcon["Roblox"] = "media/RobloxPng.png";
gameIcon["Splatoon"] = "media/SplatoonPng.png";
gameIcon["Fortnite"] = "media/fortniteJpg.jpg";
gameIcon["Portal"] = "media/portalJpg.jpg"
gameIcon["Overwatch"] = "media/overwatchJpg.jpg"

//Proudly edited by Pancake

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

    //Checking if gamesearch is in the gameList
    var isInList = gameList.indexOf(gameSearch)
    if (isInList !== -1) {
    //If isInList does not equal -1, the game searched is in the list
    swal({
      closeOnClickOutside: false,
      closeOnEsc: false,
      title: gameSearch,
      text: gameDesc[gameSearch],
      icon: gameIcon[gameSearch]
    })
    }
//-------------------------------------------------------------
    else if (!gameSearch) {
     swal.stopLoading();
 }
    else {
      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: "Error 404",
        text: "Sorry, we couldn't get what you asked for! Remember, this site is CAPS SENSITIVE!",
        icon: "error"
      })
    }
  })
}
