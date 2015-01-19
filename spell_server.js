function go_to_spell() {
	location.href = 'http://localhost:8080/' + $("#spell_name_txt").val() + '/';
}
$("#get_spell_btn").click(function() {
	go_to_spell();
});
$("#spell_name_txt").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        go_to_spell();
    }
});

spellNames = document.getElementById("names").innerHTML.split(";");

function populateMatches() {
  // Clear the contents
  matchesContainer = document.getElementById("matches");
  matchesContainer.innerHTML = "";

  searchTerm = $("#spell_name_txt").val();

  // Bail out if we have an empty or null string
  if (!searchTerm || searchTerm.length == 0) {
    return;
  }

  lowerSearchTerm = searchTerm.toLowerCase();
  for (i = 0; i < spellNames.length; i++) {
    lowerName = spellNames[i].toLowerCase();
    if (lowerName.indexOf(lowerSearchTerm) != -1) {
      linkLocation = "http://localhost:8080/" + spellNames[i] + "/"
      spellLink = '<a href="' + linkLocation + '">' + spellNames[i] + '</a>'
      matchesContainer.innerHTML += spellLink + "<br>";
    }
  }
}

$("#spell_name_txt").keyup(function(event) {
  populateMatches();
});