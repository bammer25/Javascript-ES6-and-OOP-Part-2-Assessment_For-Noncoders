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
        let clubCard =clubData.find(obj => obj.name === clubName);
        
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
    footballClubs.forEach(club => {
        club.players.forEach(player => {
            console.log(player.name); 
        });
    });
}
    

    
    // Write your code here for task3
    // Generate HTML for the list of players and display it
    function generateClubPlayerList(club) {
        const listOfPlayers = `
        <ul>
                <li>
                <strong>Name:</strong> ${club.name}<br>
                    <strong>Name:</strong> ${player.name}<br>
                    <strong>Position:</strong> ${player.position}<br>
                    <strong>Number:</strong> ${player.number}<br>
                    <strong>Goals:</strong> ${player.goals}<br>
                    <strong>Assists:</strong> ${player.assists}
                </li>
        </ul>

        `;

        console.log(listOfPlayers);
        
    }
    
    // Function to generate and display HTML for all selected clubs
    function displaySelectedClubsPlayers() {
        // footballClubs.forEach(club => {
        //     const clubPlayerListHTML = generateClubPlayerList(club);
        //     document.body.innerHTML += clubPlayerListHTML;
        // });
    }
    
    // Call the function to display HTML for all selected clubs
    displaySelectedClubsPlayers();
    

    


    // Iterate over selectedClub object's players property
    function iterateOverPlayers(selectedClub) {
        const players = selectedClub.players;
        players.forEach(player => {
            console.log(player.name); 
        });
    }
    
    const selectedClub = footballClubs[0];
    
    iterateOverPlayers(selectedClub);

    
    
    // Create a string joining the information of all the players of the selected Club 
    function concatenatePlayerInformation(club) {
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

    const playerInformationString = concatenatePlayerInformation(selectedClub);


    console.log(playerInformationString);

    
    
    // Display the information by setting the HTML in the clubDetailsContainer
    function createPlayerInfoElements(player) {
        const playerInfoContainer = document.createElement('div');
        playerInfoContainer.classList.add('player-info');
    
        const playerName = document.createElement('h3');
        playerName.textContent = `Name: ${player.name}`;
    
        const playerPosition = document.createElement('p');
        playerPosition.textContent = `Position: ${player.position}`;
    
        const playerNumber = document.createElement('p');
        playerNumber.textContent = `Number: ${player.number}`;
    
        const playerGoals = document.createElement('p');
        playerGoals.textContent = `Goals: ${player.goals}`;
    
        const playerAssists = document.createElement('p');
        playerAssists.textContent = `Assists: ${player.assists}`;
    
        playerInfoContainer.appendChild(playerName);
        playerInfoContainer.appendChild(playerPosition);
        playerInfoContainer.appendChild(playerNumber);
        playerInfoContainer.appendChild(playerGoals);
        playerInfoContainer.appendChild(playerAssists);
    
        return playerInfoContainer;
    }

    function displayPlayerInformation(club) {
        const clubDetailsContainer = document.getElementById('clubDetailsContainer');
        clubDetailsContainer.innerHTML = '';
    
        club.players.forEach(player => {
            const playerInfo = createPlayerInfoElements(player);
            clubDetailsContainer.appendChild(playerInfo);
        });
    }
    


// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4

    // Get the search term and convert it to lowercase for case-insensitive search
    
    // Create a string containing club details for searching
    
    // Check if the search term is found in the club data string
        
    // Display the filtered clubs
    
}