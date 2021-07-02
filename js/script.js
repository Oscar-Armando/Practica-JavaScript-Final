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
    console.log(array)
}
    randomGame(monsters)