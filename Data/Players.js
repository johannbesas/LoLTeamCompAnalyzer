function listChars(container, player) {
 
    var iconBlock = document.createElement("div");
    iconBlock.setAttribute('class', 'tierHeader');
    container.append(iconBlock); 
    
    switch (player.name) {
        case "Jonathan":
            var img = document.createElement("img");
            img.setAttribute("src", "images/positions/Top_icon.png");
            iconBlock.append(img);
            break;
        case "Jamie":
            var img = document.createElement("img");
            img.setAttribute("src", "images/positions/Jungle_icon.png");
            iconBlock.append(img);
            break;
        case "Johann":
            var img = document.createElement("img");
            img.setAttribute("src", "images/positions/Middle_icon.png");
            iconBlock.append(img);
            break;
        case "Leigh":
            var img = document.createElement("img");
            img.setAttribute("src", "images/positions/Bottom_icon.png");
            iconBlock.append(img);
            break;
        case "Adam":
            var img = document.createElement("img");
            img.setAttribute("src", "images/positions/Support_icon.png");
            iconBlock.append(img);
            break;
    }


    var nameBlock = document.createElement("h2");
    nameBlock.setAttribute('class', 'nameBlock');
    iconBlock.appendChild(nameBlock);
    nameBlock.innerHTML = player.name;

    var sTierRow = document.createElement("div");
    sTierBlock = document.createElement("div");
    sTierBlock.setAttribute('id', 'sTier');
    sTierBlock.innerHTML = 'S';
    sTierBlock.setAttribute('class', 'label-holder');
    sTierBlock.setAttribute('style', 'background-color: #FF7F7F;');
    sTierRow.setAttribute('class', 'tier-row');
    sTierRow.appendChild(sTierBlock);
    container.appendChild(sTierRow);

    player['S'].forEach(character => {
        var charIcon = document.createElement("img");
        charIcon.setAttribute('class', 'character');
        charIcon.setAttribute("src", "images/champPortraits/" + character + "Square.png");
        sTierRow.appendChild(charIcon);
    });

    var aTierRow = document.createElement("div");
    aTierBlock = document.createElement("div");
    aTierBlock.innerHTML = 'A';
    aTierBlock.setAttribute('class', 'label-holder');
    aTierBlock.setAttribute('style', 'background-color: #FFBF7F;');
    aTierRow.setAttribute('class', 'tier-row');
    aTierRow.appendChild(aTierBlock);
    container.appendChild(aTierRow);

    player['A'].forEach(character => {
        var charIcon = document.createElement("img");
        charIcon.setAttribute('class', 'character');
        charIcon.setAttribute("src", "images/champPortraits/" + character + "Square.png");
        aTierRow.appendChild(charIcon);
    });

    var bTierRow = document.createElement("div");
    bTierBlock = document.createElement("div");
    bTierBlock.innerHTML = 'B';
    bTierBlock.setAttribute('class', 'label-holder');
    bTierBlock.setAttribute('style', 'background-color: #FFDF7F;');
    bTierRow.setAttribute('class', 'tier-row');
    bTierRow.appendChild(bTierBlock);
    container.appendChild(bTierRow);

    player['B'].forEach(character => {
        var charIcon = document.createElement("img");
        charIcon.setAttribute('class', 'character');
        charIcon.setAttribute("src", "images/champPortraits/" + character + "Square.png");
        bTierRow.appendChild(charIcon);
    });

    var cTierRow = document.createElement("div");
    cTierBlock = document.createElement("div");
    cTierBlock.innerHTML = 'C';
    cTierBlock.setAttribute('class', 'label-holder');
    cTierBlock.setAttribute('style', 'background-color: #FFFF7F;');
    cTierRow.setAttribute('class', 'tier-row');
    cTierRow.appendChild(cTierBlock);
    container.appendChild(cTierRow);

    player['C'].forEach(character => {
        var charIcon = document.createElement("img");
        charIcon.setAttribute('class', 'character');
        charIcon.setAttribute("src", "images/champPortraits/" + character + "Square.png");
        cTierRow.appendChild(charIcon);
    });


    //dTierBlock.setAttribute('style', 'background-color: #FFFF7F;');
}

function initPlayers() {
    var container = document.getElementById("players");
    Players.forEach(player =>
        listChars(container, player));
}

Players = [
    {
        "name": "Jonathan",
        "S": ['Urgot'],
        "A": ['Gangplank', 'Sion'],
        "B": ['Pantheon', 'Riven'],
        "C": ['Ornn', 'Mordekaiser']
    },
    {
        "name": "Jamie",
        "S": ['Jarvan_IV', 'Amumu',],
        "A": ['Skarner', 'Udyr', 'Malphite'],
        "B": ['Olaf', 'Gragas', 'Graves'],
        "C": ['Rammus', 'ChoGath', 'KhaZix', 'Kayn']
    },
    {
        "name": "Johann",
        "S": ['Azir'],
        "A": ['Viego', 'Corki', 'Viktor'],
        "B": ['Yone', 'Yasuo', 'Galio', 'Ekko', 'Rumble'],
        "C": ['Kayle', 'Ryze', 'Cassiopeia']
    },
    {
        "name": "Leigh",
        "S": ['KaiSa', 'Jhin'],
        "A": ['Samira', 'Caitlyn', 'Ezreal'],
        "B": ['Tristana', 'Xayah', 'Vayne', 'Jinx',],
        "C": ['Senna', 'Ashe']
    },
    {
        "name": "Adam",
        "S": ['Seraphine'],
        "A": ['Yuumi', 'Rakan', 'Sona'],
        "B": ['Lulu', 'Karma', 'Soraka'],
        "C": ['Rell']
    }
]