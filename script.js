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
        const clickedClubCard = element;
        if (clickedClubCard){
        const clickedClubName = clickedClubCard.querySelector("h2").textContent;

            // Find the selected club by its name
            const selectedClub = clubData.find(
                (club) => club.name === clickedClubName
            );
            if(selectedClub) {

            // Display details of the selected club
            displayClubDetails(selectedClub);

            }


        }
        
        
    }


// Display football club details
function displayClubDetails(club) {
    // Write your code here for task2
        // Create a club details HTML using template strings
        const clubDetailsHTML = 
        `
        <button onclick="window.location.reload();"> Back</button>
            <h2>${club.name}</h2>
            <img src="${club.image}" >
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <p><b>Stadium: </b>${club.stadium}</p>
            
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:20%;">View Players</button>
            <p><b>Description: </b>${club.description}</p>

            
        `;

    // Set the club details HTML in the clubDetailsContainer
    clubDetailsContainer.innerHTML = clubDetailsHTML;
}

// Function to view club players
function viewClubPlayers(clubName) {
    // Find the selected club by its name
    const selectedClub = clubData.find(club => club.name === clubName);
    
    // Write your code here for task3
    // Generate HTML for the list of players and display it
    
    // Iterate over selectedClub object's players property
    

    // Create a string joining the information of all the players of the selected Club 

    

    // Display the information by setting the HTML in the clubDetailsContainer
    const playersList = `
    <div class = playerinfo>
    <button onclick="window.location.reload();"> Back</button>
    <h2>${clubName}</h2>

    <P><b> Name:</b> ${selectedClub["players"][0]["name"]}</P>
    <P><b> Position:</b> ${selectedClub["players"][0]["position"]}</P>
    <P><b> Goals:</b> ${selectedClub["players"][0]["goals"]}</P>
    <P><b> Assists:</b> ${selectedClub["players"][0]["assists"]}</P>
    </div>

    <div class = playerinfo>
    <P><b> Name:</b> ${selectedClub["players"][1]["name"]}</P>
    <P><b> Position:</b> ${selectedClub["players"][1]["position"]}</P>
    <P><b> Goals:</b> ${selectedClub["players"][1]["goals"]}</P>
    <P><b> Assists:</b> ${selectedClub["players"][1]["assists"]}</P>
    </div>
    
    
    <P><b> Name:</b> ${selectedClub["players"][2]["name"]}</P>
    <P><b> Position:</b> ${selectedClub["players"][2]["position"]}</P>
    <P><b> Goals:</b> ${selectedClub["players"][2]["goals"]}</P>
    <P><b> Assists:</b> ${selectedClub["players"][2]["assists"]}</P>
    </div>`

    clubDetailsContainer.innerHTML = playersList;

};

    
    // Handle search input and filter clubs
    function handleSearchInput() {
    // Write your code here for task4
    
    
    // Get the search term and convert it to lowercase for case-insensitive search
    const searchTerm = searchInput.value.toLowerCase();
    const filterClubs = clubData.filter((club) => {

        // Create a string containing club details for searching
        const clubString = `${club.name} ${club.league} ${club.city} ${club.stadium} ${club["players"][0]["name"]}
        ${club["players"][1]["name"]} ${club["players"][2]["name"]}`.toLowerCase();
        
        // Check if the search term is found in the club data string
        return clubString.includes(searchTerm);

      });

        // Display the filtered clubs
        displayClubs(filterClubs);
    }
    

    
    
    
    
        
    
    