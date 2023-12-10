let games = [
	{ id: "1", title: "Zelda, Tears of the Kingdom", platform: ["Switch"] },
	{ id: "2", title: "Final Fantasy 7 Remake", platform: ["PS5", "Xbox"] },
	{ id: "3", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
	{ id: "4", title: "Mario Kart", platform: ["Switch"] },
	{ id: "5", title: "Pokemon Scarlet", platform: ["PS5", "Xbox", "PC"] },
];

let authors = [
	{ id: "1", name: "mario", verified: true },
	{ id: "2", name: "yoshi", verified: false },
	{ id: "3", name: "peach", verified: true },
];

let reviews = [
	{
		id: "1",
		rating: 9,
		content: "This remake is awesome!!",
		author_id: "1",
		game_id: "2",
	},
	{
		id: "2",
		rating: 10,
		content: "I got tears playing this",
		author_id: "2",
		game_id: "1",
	},
	{
		id: "3",
		rating: 7,
		content: "The elden ring is insane!",
		author_id: "3",
		game_id: "3",
	},
	{
		id: "4",
		rating: 5,
		content: "Mario commenting on mario kart",
		author_id: "1",
		game_id: "4",
	},
	{
		id: "5",
		rating: 8,
		content: "Gotta catch em all!!",
		author_id: "2",
		game_id: "5",
	},
	{
		id: "6",
		rating: 7,
		content: "This is the mother of all remakes!",
		author_id: "3",
		game_id: "2",
	},
	{
		id: "7",
		rating: 10,
		content: "Peeee kaaaa chuuuuuuuuuuuuuuuuuuuu",
		author_id: "3",
		game_id: "5",
	},
];

export default { games, authors, reviews };
