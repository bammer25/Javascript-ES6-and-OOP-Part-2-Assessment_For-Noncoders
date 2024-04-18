// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs; 
displayClubs(footballClubs);


// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Write your code here for task1
        // Get the name of the clicked club
        let clubName = element.getElementsByTagName("h2")[0].innerHTML;
        console.log(clubName);
        
        // Find the selected club by its name
        let clubCard = clubData.find(obj => obj.name === clubName);
        console.log(clubCard);
              
        // Display details of the selected club
        displayClubDetails(clubCard);
    }


// Display football club details
function displayClubDetails(club) {
    // Write your code here for task2
        // Create a club details HTML using template strings
        const clubDetailsHTML = `
        <div>
            <h2>${club.name}</h2><br>
            <img src="${club.image}" alt="${club.name} Image" 
            <p><b>League: </b>${club.league}</p><br>
            <p><b>City: </b>${club.city}</p><br>
            <button onclick="viewClubPlayers('${club.name}'); ">View Players</button>
        </div>
    
        `;
        console.log(clubDetailsHTML);

    // Set the club details HTML in the clubDetailsContainer
    clubDetailsContainer.innerHTML = clubDetailsHTML;
}

// Function to view club players
function viewClubPlayers(clubName) {
    // Find the selected club by its name
    const selectedClub = clubData.find(club => club.name === clubName);
    
    // Write your code here for task3
    // Generate HTML for the list of players and display it
    function generateClubPlayerList(club) {
        const listOfPlayers = `
        <ul>
                <li>
                    // <strong>Name:</strong> ${club.name}<br>
                    <strong>Name:</strong> ${club.name}<br>
                    <strong>Position:</strong> ${club.position}<br>
                    <strong>Number:</strong> ${club.number}<br>
                    <strong>Goals:</strong> ${club.goals}<br>
                    <strong>Assists:</strong> ${club.assists}
                </li>
        </ul>

        `;
        console.log(listOfPlayers);
        
    }
    // Iterate over selectedClub object's players property
    function iteratePlayers(selectedClub) {
        const players = selectedClub.players;
        players.forEach(player => {
            console.log(player.name); 
        });
    }
    
    iteratePlayers(selectedClub);

    // Create a string joining the information of all the players of the selected Club 
    function playerInformation(club) {
        let playerInfoString = '';
        club.players.forEach(player => {
            playerInfoString += `
    Name: ${player.name}
    Position: ${player.position}
    Number: ${player.number}
    Goals: ${player.goals}
    Assists: ${player.assists}
    
    `;
        });
        return playerInfoString;
    }
    const playerInformationString = playerInformation(selectedClub);

    console.log(playerInformationString);

    // Display the information by setting the HTML in the clubDetailsContainer
    function playerElement (player) {
        let html = '';
        player.forEach(item => {
            html += `
                <div> ${item}</div>
            `;
        });

        document.getElementById(clubDetailsContainer).innerHTML = html;
    }
}

// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4
    const searchBar = document.getElementById("search");
    
    }
    
    // Get the search term and convert it to lowercase for case-insensitive search
    // const sreachTerm = target.value.toLowerCase();
    // Create a string containing club details for searching
    
    // Check if the search term is found in the club data string
        
    // Display the filtered clubs