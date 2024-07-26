const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const playerContainer = document.querySelector('.player-container');




const fetchPlayers = async (query)=>{
  playerContainer.innerHTML = "<h2>Fetching Players details...</h2>";
  const data = await fetch(`https://api.cricapi.com/v1/players?apikey=a29cfe7c-3f03-4a97-a13f-b56c136044b2&offset=0&search=${query}`);
  const response = await data.json();

  console.log(response);
  
  playerContainer.innerHTML = "";

  // console.log(response);
  response.data.forEach(data => {
   const playerDiv = document.createElement('div');
   playerDiv.classList.add('players');
   playerDiv.innerHTML=`
    <h2>${data.name}</h2>
    <p>${data.country}</p>
   `;
   
   playerContainer.appendChild(playerDiv);
  });
  
}


searchBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchPlayers(searchInput);
  // console.log("Button clicked");
});
