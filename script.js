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
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    
        `;

        console.log(clubDetailsHTML);
    
    // Set the club details HTML in the clubDetailsContainer
    clubDetailsContainer.innerHTML = clubDetailsHTML;
    
}

// Function to view club players
function viewClubPlayers(clubName) {
    // Find the selected club by its name
    let clubPlayer = document.getElementById("club-list");

    console.log(clubName);

    
    // Write your code here for task3
    // Generate HTML for the list of players and display it
    let teamPlaters = document.getElementById(players);
    

    // Iterate over selectedClub object's players property

    // Create a string joining the information of all the players of the selected Club 

    // Display the information by setting the HTML in the clubDetailsContainer
    
}

// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4

    // Get the search term and convert it to lowercase for case-insensitive search
    
    // Create a string containing club details for searching
    
    // Check if the search term is found in the club data string
        
    // Display the filtered clubs
    
}