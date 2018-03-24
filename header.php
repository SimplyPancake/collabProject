<!DOCTYPE html>
<html>
<?php
include "dbh.php";
?>
<head>
  <title>Video-game Lookup</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="media/VideoGameIco.ico" />
  <link rel="stylesheet" href="collabs.css" />
  <link rel="stylesheet" href="all.css" />
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
  <script src="https://unpkg.com/popper.js/dist/umd/popper.min.js"></script>
  <script src="https://unpkg.com/tooltip.js/dist/umd/tooltip.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<!-- Ads for our servur -->
  <script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-7450623974730348",
            enable_page_level_ads: true
       });
  </script>

</head>

<body>
  <nav id="navbar" class="navbar navbar-fixed-top w3-teal">
  <!-- Ads for server in the body -->
  <script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-7450623974730348",
            enable_page_level_ads: true
       });
  </script>

  <nav class="navbar navbar-fixed-top w3-teal" id="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"><p id="video-games">Video Games</p></a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="#home" id="home">Home<i class="fa fa-home"></i></a></li>
        <li class="dropdown navbar-right">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Language
        <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li onclick="langArabic()"><a id="arabicLang" href="#">Arabic</a></li>
            <li onclick="langChinese()"><a id="chineseLang" href="#">Chinese</a></li>
            <li onclick="langDutch()"><a id="dutchLang" href="#">Dutch</a></li>
            <li onclick="langEnglish()"><a id="englishLang" href="#">English</a></li>
            <li onclick="langHindi()"><a id="hindiLang" href="#">Hindi</a></li>
            <li onclick="langJapanese()"><a id="japaneseLang" href="#">Japanese</a></li>
            <li onclick="langUrdu()"><a id="urduLang" href="#">Urdu</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-right" role="search" action="search.php" method="POST">
        <div class="form-group">
        <input class="form-control" type="text" name="search" />
        <button class="btn btn-default" type="submit" name="submit-search"><i class="glyphicon glyphicon-search"></i></button>
      </div>
      </form>
    </div>
  </nav>
  </div>
  </div>
  <script src="all.js"></script>
</body>

</html>
