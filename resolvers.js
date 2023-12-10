import db from "./_db.js";

export const resolvers = {
	// For entry points
	Query: {
		games() {
			return db.games;
		},
		authors() {
			return db.authors;
		},
		reviews() {
			return db.reviews;
		},
		game(parent, args) {
			return db.games.find((game) => game.id === args.id);
		},
		author(parent, args) {
			return db.authors.find((author) => author.id === args.id);
		},
		review(parent, args) {
			return db.reviews.find((review) => review.id === args.id);
		},
	},

	//  For nesting
	Game: {
		reviews(parent) {
			return db.reviews.filter((review) => review.game_id === parent.id);
		},
	},

	Author: {
		reviews(parent) {
			return db.reviews.filter((review) => review.author_id === parent.id);
		},
	},

	Review: {
		game(parent) {
			return db.games.find((game) => game.id === parent.game_id);
		},
		author(parent) {
			return db.authors.find((author) => author.id === parent.author_id);
		},
	},

	// Mutations
	Mutation: {
		deleteGame(_, args) {
			db.games = db.games.filter((game) => game.id !== args.id);
			return db.games;
		},

		addGame(_, args) {
			const newGame = {
				...args.gameData,
				id: Math.floor(Math.random() * 10000),
			};
			db.games.push(newGame);
			return newGame;
		},

		updateGame(_, args) {
			db.games = db.games.map((game) => {
				if (game.id === args.id) {
					return { ...game, ...args.editData };
				}
				return game;
			});
			return db.games.find((game) => game.id === args.id);
		},

		deleteAuthor(_, args) {
			db.authors = db.authors.filter((author) => author.id !== args.id);
			return db.authors;
		},

		addAuthor(_, args) {
			const newAuthor = {
				...args.authorData,
				id: Math.floor(Math.random() * 10000),
			};
			db.authors.push(newAuthor);
			return newAuthor;
		},

		updateAuthor(_, args) {
			db.authors = db.authors.map((author) => {
				if (author.id === args.id) {
					return { ...author, ...args.editData };
				}
				return author;
			});
			return db.authors.find((author) => author.id === args.id);
		},

		deleteReview(_, args) {
			db.reviews = db.reviews.filter((review) => review.id !== args.id);
			return db.reviews;
		},

		addReview(_, args) {
			const newReview = {
				...args.reviewData,
				id: Math.floor(Math.random() * 10000),
			};
			db.reviews.push(newReview);
			return newReview;
		},

		updateReview(_, args) {
			db.reviews = db.reviews.map((review) => {
				if (review.id === args.id) {
					return { ...review, ...args.editData };
				}
				return review;
			});
			return db.reviews.find((review) => review.id === args.id);
		},
	},
};
