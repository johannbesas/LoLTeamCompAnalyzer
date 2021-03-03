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

    createBase(container, player, 'S');
    createBase(container, player, 'A');
    createBase(container, player, 'B');
    createBase(container, player, 'C');
}
function createRow(tier) {
    var tierRow = document.createElement("div");
    var tierBlock = document.createElement("div");
    tierBlock.setAttribute('class', 'label-holder');
    switch (tier) {
        case "S":
            tierBlock.setAttribute('style', 'background-color: #FF7F7F');
            tierBlock.innerHTML = "S";
            break;
        case "A":
            tierBlock.setAttribute('style', 'background-color: #FFBF7F');
            tierBlock.innerHTML = "A";
            break;
        case "B":
            tierBlock.setAttribute('style', 'background-color: #FFDF7F');
            tierBlock.innerHTML = "B";
            break;
        case "C":
            tierBlock.setAttribute('style', 'background-color: #FFFF7F');
            tierBlock.innerHTML = "C";
            break;
        default:
            break;
    }
    tierRow.setAttribute('class', 'tier-row');
    tierRow.appendChild(tierBlock);
    return tierRow;
}

function createCharIcon(character) {
    var charIcon = document.createElement("img");
    charIcon.setAttribute('class', 'character');
    charIcon.setAttribute("src", "images/champPortraits/" + character + "Square.png");
    return charIcon;
}

function addChars(player, tier, tierRow) {
    for (i = 0; i < player[tier].length; i++) {
        var charIcon = createCharIcon(player[tier][i]);
        tierRow.appendChild(charIcon);
    }
}

function createBase(container, player, tier) {
    var tierRow = createRow(tier);
    container.appendChild(tierRow);
    characterRow = addChars(player, tier, tierRow)
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