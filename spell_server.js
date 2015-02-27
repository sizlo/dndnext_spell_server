function getSpellUrl(spellName)
{
  // Replace any "/"s with the url code equivalent "%2F"
  return spellName.replace("/", "%2F");
}

function go_to_spell() {
  spellUrl = getSpellUrl($("#spell_name_txt").val());
	location.href = 'http://localhost:8080/' + spellUrl + '/';
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
      spellUrl = getSpellUrl(spellNames[i]);
      linkLocation = "http://localhost:8080/" + spellUrl + "/"
      spellLink = '<a href="' + linkLocation + '">' + spellNames[i] + '</a>'
      matchesContainer.innerHTML += spellLink + "<br>";
    }
  }
}

$("#spell_name_txt").keyup(function(event) {
  populateMatches();
});