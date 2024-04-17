
// Load JSON data
const associations = [
    {
        "name": "Worldwide",
        "continent": "Worldwide"
    },
    {
        "name": "Beyond War",
        "continent": "Worldwide"
    },
    {
        "name": "Christian Peacemaker Teams",
        "continent": "Worldwide"
    },
    {
        "name": "Dartmouth Conferences",
        "continent": "Worldwide"
    },
    {
        "name": "Hands Off the People of Iran",
        "continent": "Worldwide"
    },
    {
        "name": "Institute for Economics & Peace",
        "continent": "Worldwide"
    },
    {
        "name": "International Campaign Against Aggression on Iraq",
        "continent": "Worldwide"
    },
    {
        "name": "International Campaign to Abolish Nuclear Weapons",
        "continent": "Worldwide"
    },
    {
        "name": "International Campaign to Ban Landmines",
        "continent": "Worldwide"
    },
    {
        "name": "International Coalition to Ban Uranium Weapons",
        "continent": "Worldwide"
    },
    {
        "name": "International Fellowship of Reconciliation",
        "continent": "Worldwide"
    },
    {
        "name": "International Peace Bureau",
        "continent": "Worldwide"
    },
    {
        "name": "International Physicians for the Prevention of Nuclear War",
        "continent": "Worldwide"
    },
    {
        "name": "Mondpaca Esperantista Movado",
        "continent": "Worldwide"
    },
    {
        "name": "Nobel Women's Initiative",
        "continent": "Worldwide"
    },
    {
        "name": "Nonviolent Peaceforce",
        "continent": "Worldwide"
    },
    {
        "name": "Peace One Day",
        "continent": "Worldwide"
    },
    {
        "name": "Peace Brigades International",
        "continent": "Worldwide"
    },
    {
        "name": "Pugwash Conferences on Science and World Affairs",
        "continent": "Worldwide"
    },
    {
        "name": "Service Civil International",
        "continent": "Worldwide"
    },
    {
        "name": "Students for Justice in Palestine",
        "continent": "Worldwide"
    },
    {
        "name": "The Non-Violence Project",
        "continent": "Worldwide"
    },
    {
        "name": "War Resisters' International",
        "continent": "Worldwide"
    },
    {
        "name": "World Constitution and Parliament Association",
        "continent": "Worldwide"
    },
    {
        "name": "World Constitution Coordinating Committee",
        "continent": "Worldwide"
    },
    {
        "name": "World Beyond War",
        "continent": "Worldwide"
    },
    {
        "name": "World Peace Council",
        "continent": "Worldwide"
    },
    {
        "name": "Women's International League for Peace and Freedom",
        "continent": "Worldwide"
    },
    {
        "name": "World Congress of Intellectuals for Peace",
        "continent": "Worldwide"
    },
    {
        "name": "Anti-War Coalition",
        "continent": "Africa"
    },
    {
        "name": "Committee on South African War Resistance",
        "continent": "Africa"
    },
    {
        "name": "End Conscription Campaign",
        "continent": "Africa"
    },
    {
        "name": "Koeberg Alert",
        "continent": "Africa"
    },
    {
        "name": "Beheiren",
        "continent": "Asia",
        "country": "Japan"
    },
    {
        "name": "Peace Now",
        "continent": "Asia",
        "country": "Israel"
    },
    {
        "name": "National Council for Peace",
        "continent": "Asia",
        "country": "Iran"
    },
    {
        "name": "Czech National Social Party",
        "continent": "Europe",
        "country": "Czech Republic"
    },
    {
        "name": "Dansk Fredsforening",
        "continent": "Europe",
        "country": "Denmark"
    },
    {
        "name": "Danske Kvinders Fredskæde",
        "continent": "Europe",
        "country": "Denmark"
    },
    {
        "name": "German Peace Society",
        "continent": "Europe",
        "country": "Germany"
    },
    {
        "name": "Norwegian Peace Association",
        "continent": "Europe",
        "country": "Norway"
    },
    {
        "name": "Società per la pace e la giustizia internazionale",
        "continent": "Europe",
        "country": "Italy"
    },
    {
        "name": "Soviet Peace Committee",
        "continent": "Europe",
        "country": "Russia"
    },
    {
        "name": "Swedish Peace and Arbitration Society",
        "continent": "Europe",
        "country": "Sweden"
    },
    {
        "name": "Movement for a Non-violent Alternative",
        "continent": "Europe",
        "country": "France"
    },
    {
        "name": "Peace Through Law Association",
        "continent": "Europe",
        "country": "France"
    },
    {
        "name": "Union pacifiste de France",
        "continent": "Europe",
        "country": "France"
    },
    {
        "name": "Groupe d'action et de résistance à la militarisation",
        "continent": "Europe",
        "country": "France"
    },
    {
        "name": "Mouvement pour le désarmement, la paix et la liberté",
        "continent": "Europe",
        "country": "France"
    },
    {
        "name": "Campaign for Nuclear Disarmament",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "Committee of 100",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "Direct Action Committee",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "International Voluntary Service",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "Military Families Against the War",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "No-Conscription Fellowship",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "Peace Pledge Union",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "Peace Society",
        "continent": "Europe",
        "country": "United Kingdom"
    },
    {
        "name": "America First Committee",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "American League Against War and Fascism",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "American Peace Mobilization",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "American Peace Society",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Anti-War Committee",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Campus Antiwar Network",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "New York Peace Society",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Peace Action",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Peace Alliance",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Peace and Freedom Party",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "People's Coalition for Peace and Justice",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "People's Council of America for Democracy and Peace",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Port Militarization Resistance",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "September Eleventh Families for Peaceful Tomorrows",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "United for Peace and Justice",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Veterans for Peace",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Vietnam Day Committee",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Vietnam Veterans Against the War",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "War Resisters League",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "Win Without War",
        "continent": "North America",
        "country": "United States"
    },
    {
        "name": "American Deserters Committee",
        "continent": "North America",
        "country": "Canada"
    },
    {
        "name": "Canadian Peace Alliance",
        "continent": "North America",
        "country": "Canada"
    },
    {
        "name": "Canadian Peace Congress",
        "continent": "North America",
        "country": "Canada"
    },
    {
        "name": "War Resisters Support Campaign",
        "continent": "North America",
        "country": "Canada"
    },
    {
        "name": "Global Peace and Justice Auckland",
        "continent": "Oceania",
        "country": "New Zealand"
    },
    {
        "name": "Peace Action Wellington",
        "continent": "Oceania",
        "country": "New Zealand"
    },
    {
        "name": "Stop the War Coalition",
        "continent": "Oceania",
        "country": "Australia"
    }
];

const nameInput = document.getElementById("nameInput");
const continentSelect = document.getElementById("continentSelect");
const resultsList = document.getElementById("results");

// Populate continent select options
const continents = [...new Set(associations.map(assoc => assoc.continent))];
continents.forEach(continent => {
    const option = document.createElement("option");
    option.text = continent;
    option.value = continent;
    continentSelect.add(option);
});

// Event listener for submit button
document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    filterByContinentAndName();
});

// Function to filter associations by name input
function filterByName() {
    const nameFilter = nameInput.value.toLowerCase().trim();
    const filteredAssociations = associations.filter(assoc => assoc.name.toLowerCase().includes(nameFilter));
    return filteredAssociations;
}

// Function to filter associations by continent select
function filterByContinent() {
    const continentFilter = continentSelect.value;
    const filteredAssociations = associations.filter(assoc => {
        const continentMatches = !continentFilter || assoc.continent === continentFilter;
        return continentMatches;
    });
    return filteredAssociations;
}

// Function to filter associations by name input and continent select
function filterByContinentAndName() {
    const nameFilter = nameInput.value.toLowerCase().trim();
    const continentFilter = continentSelect.value;
    
    const filteredByName = filterByName();
    const filteredByContinent = filterByContinent();

    const filteredAssociations = filteredByName.filter(assoc => {
        return filteredByContinent.some(filteredAssoc => filteredAssoc.name === assoc.name);
    });

    displayResults(filteredAssociations);
}

// Function to display filtered associations
function displayResults(associations) {
    resultsList.innerHTML = "";
    if (associations.length > 0) {
        resultsList.style.display = "block";
        associations.forEach(assoc => {
            const listItem = document.createElement("li");
            listItem.textContent = assoc.name;
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.style.display = "none";
    }
}

