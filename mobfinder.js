$(document).ready(function() {
    let mobs = 
    [
      {
        "name": "Recruit",
        "size": "M",
        "tags": ["female", "dwarf", "humanoid", "halfling", "shield"],
        "qty": 6,
        "box": "People",
        "img": "recruit"
      },
      {
        "name": "Guru",
        "size": "M",
        "tags": ["female", "dwarf", "halfling", "spellcaster"],
        "qty": 1,
        "box": "People",
        "img": "guru"
      },
      {
        "name": "Fatal Axe",
        "size": "M",
        "tags": ["female", "dwarf", "halfling", "axe", "melee"],
        "qty": 1,
        "box": "People",
        "img": "fatal-axe"
      },
      {
        "name": "Deep Marshal",
        "size": "M",
        "tags": ["female", "dwarf", "halfling", "hammer", "melee"],
        "qty": 1,
        "box": "People",
        "img": "deep-marshal"
      },
      {
        "name": "Expert Blacksmith",
        "size": "M",
        "tags": ["female", "dwarf", "halfling", "NPC"],
        "qty": 1,
        "box": "People",
        "img": "expert-blacksmith"
      },
      {
        "name": "Merisiel, Rogue",
        "size": "M",
        "tags": ["female", "elf", "rogue", "NPC", "PC", "melee", "dagger"],
        "qty": 1,
        "box": "People"
      },
      {
        "name": "Kyra, Cleric",
        "size": "M",
        "tags": ["female", "elf", "human", "cleric", "NPC", "PC", "melee", "sword", "spellcaster"],
        "qty": 1,
        "box": "People"
      },
      {
        "name": "Acolyte",
        "size": "M",
        "tags": ["female", "elf", "NPC", "melee", "dagger"],
        "qty": 1,
        "box": "People"
      },
      {
        "name": "Heretic",
        "size": "M",
        "tags": ["female", "male", "elf", "spellcaster", "NPC", "melee", "staff"],
        "qty": 1,
        "box": "People"
      },
      {
        "name": "Master Universalist",
        "size": "M",
        "tags": ["female", "elf", "spellcaster", "NPC"],
        "qty": 1,
        "box": "People"
      },
      {
        "name": "Fey Enchantress",
        "size": "M",
        "tags": ["female", "elf", "spellcaster", "NPC", "wand", "sword"],
        "qty": 1,
        "box": "People"
      },
      {
        "name": "Seoni, Sorcerer",
        "size": "M",
        "tags": ["female", "elf", "spellcaster", "sword", "staff", "NPC", "PC"],
        "qty": 1,
        "box": "People"
      },
      {
        "name": "Amiri, Barbarian",
        "size": "M",
        "tags": ["female", "elf", "NPC", "PC", "melee", "sword"],
        "qty": 1,
        "box": "People"
      }
    ]

    //mobs = JSON.parse(mobs);

    var mobTable = $('#mobTable');

    $('#search').keyup(function() {
      var searchField = $(this).val();

      var regex = new RegExp(searchField, "i");
      var output = '<tr>';
      var count = 1;

      $.each(mobs, function(key, val) {

        var tagSearch = val.tags.toString();

        if ((val.name.search(regex) != -1) || (tagSearch.search(regex) != -1)) {
          output += '<td>' + val.name + '</td>';
          output += '<td>' + val.tags.join(', ') + '</td>';
          output += '<td>' + val.size + '</td>';
          output += '<td>' + val.qty + '</td>';
          output += '<td>' + val.box + '</td>';
          output += '<td><img src="img/' + val.img + '.png"></td>';
          output += '</tr>';
          count++;
        }
      });

      $(mobTable).find('tbody').html(output);
    })
});
