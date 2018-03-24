<!DOCTYPE html>
<html>
<body>
  <div class="dataCol">
    <div id="navbarUp">
    <?php
      include "header.php";
      ?>
    </div>
      <?php
  if (isset($_POST["submit-search"])) {
    $search = mysqli_real_escape_string($conn, $_POST["search"]);

    $sql = "SELECT * FROM collab_schema.game_search2 WHERE game_title LIKE '%$search%' OR game_details LIKE '%$search%'";
    $result = mysqli_query($conn, $sql);
    $queryResults = mysqli_num_rows($result);
  }
  if ($queryResults == 1) {
    echo "<script>swal('There is " . $queryResults . " result!', '', 'success')</script>";
  } else {
    echo "<script>swal('There are " . $queryResults . " results!', '', 'success')</script>";
  }
  if ($queryResults > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
      echo "<div class='dataCol'>
      <h3>" . $row["game_title"] . "</h3>
      <a href='" . $row["idgame_search"] . "' target='_blank'><img class='searchImg' src='" . $row["game_icon"] . "'/></a>
      <p>" . $row["game_details"] . "</p>
      </div>";
    }
  } else {
    echo "<script>swal('No results found', '', 'error');setInterval(function() {window.location.href = 'collab.php'}, 2000)</script>";
  }
     ?>
  </div>
</body>
</html>
