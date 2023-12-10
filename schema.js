export const typeDefs = `#graphql
    type Game {
        id: ID! # This ! make this property as required i.e it cannot be null
        title: String!
        platform: [String!]! # Here we have an ! outside the array to specify that the array cannot be null, we have an ! inside the array to show that the array cannot contain null objects
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        author_id: ID!
        game_id: ID!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    # The query type is something that every graphQL schema that we make needs to have, its not optional.
    # Its job is to define entry points to the graph and specify the return types of those entry points.
    # For ex if we want the user to be able to query the review data that we have and get back a list of reviews then we need to specify that inside this Query type.
    # If we write reviews:[Review], we are telling graphQL that we are expecting the return type of this entry point reviews to be a list of Review type.
    # If we only have reviews: [Review] in our query type, we are essentially saying that we only want to expose that only single entry point to the graph, 
    # meaning that a user would only be able to enter the graph at this point and then they would free to navigate around that graph to eventually get related data
    # but they wouldn't be able to jump in at any other point whether that would be a single review instead of a list of reviews or an author or a game
    # because we have not specified those entry points right here.
    # So this query type is our way of gatekeeping entry onto the graph and deciding where a user can jump into it initially.
    type Query {
        reviews: [Review]
        review(id: ID!): Review

        games: [Game]
        game(id: ID!): Game

        authors: [Author]
        author(id: ID!): Author
    }

    # Defining allowed mutations. Defines how users can mutate any data.
    type Mutation {
        deleteGame(id: ID!): [Game!]
        addGame(gameData: AddGameData!): Game!
        updateGame(id: ID!, editData: EditGameData!): Game!

        deleteAuthor(id: ID!): [Author!]
        addAuthor(authorData: AddAuthorData!): Author!
        updateAuthor(id: ID!, editData: EditAuthorData!): Author!

        deleteReview(id: ID!): [Review!]
        addReview(reviewData: AddReviewData!): Review!
        updateReview(id: ID!, editData: EditReviewData!): Review!
    }

    # input type allows us to group together several arguments into one type and then it can be used as a single argument elsewhere.
    input AddGameData {
        title: String!
        platform: [String!]!
    }

    input EditGameData {
        title: String
        platform: [String!]
    }

    input AddAuthorData {
        name: String!
        verified: Boolean!
    }

    input EditAuthorData {
        name: String
        verified: Boolean
    }

    input AddReviewData {
        rating: Int!
        content: String!
        author_id: ID!
        game_id: ID!
    }

    input EditReviewData {
        rating: Int
        content: String
    }
`;
