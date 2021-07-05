let monsters = [
	{name: 'monster1'},
	{name: 'monster2'},
	{name: 'monster3'},
	{name: 'monster4'},
	{name: 'monster5'},
	{name: 'monster6'},
	{name: 'monster7'},
	{name: 'monster8'},
	{name: 'monster9'},
	{name: 'monster10'},
	{name: 'monster11'},
	{name: 'sock'}
];
let foundMounster = 0;

function randomGame(array)
 {
	array.sort(() => Math.random() - 0.5);
    console.log(array);
 }

function setupGame () 
{
	found = 0;
	randomGame(monsters);
}

function gameOver()
 {
	location.href = "/views/gameOver.html";
 }
	
function gameWinner()
 {
	location.href = "/views/gameWinner.html";
 }
	
function doorOpener (event) 
 {
	let btn = event.target.closest('[data-monster]');
	let monster = monsters[btn.getAttribute('data-monster')];
	
	if (monster.name === 'sock') 
		{
			gameOver();
			return;
		}
	
	foundMounster++;
	
	if (foundMounster === (monsters.length - 1)) 
		{
			gameWinner();
			return;
		}
	
	let img = document.createElement('img');
	img.src = `/svg/${monster.name}.svg`;
	btn.replaceWith(img);
	
 }
	 
function clickHandler (event) 
 {
	doorOpener(event);
 }
    setupGame();
	document.addEventListener('click', clickHandler);
	
	