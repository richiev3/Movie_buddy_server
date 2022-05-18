const {MovieWatching, MovieWatched, User} = require('../models');  // Import database models

// Seed database
const seedDB = async () => {

	const dummy_movie = await MovieWatched.create({
		movie_id: 453395,
		movie_name: "Doctor Strange in the Multiverse of Madness",
		overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary"
	});
	
	const dummy_movie3 = await MovieWatched.create({
		movie_id: 453395,
		movie_name: "Doctor Strange in the Multiverse of Madness",
		overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary"
	});
	
	const dummy_movie2 = await MovieWatched.create({
		movie_id: 675353,
		movie_name: "Sonic the Hedgehog 2",
		overview: "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands."
	});
	const dummy_movie_wathching_1 = await MovieWatching.create({
		movie_id: 675353,
		movie_name: "Sonic the Hedgehog 2",
		overview: "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands."
	});
    // Create a new student for a campus
	const dummy_user = await User.create({
		username: "Joe",
		email: "joesmith@gmail.com",
		password: "password123",

	});
	// Create a new student for a campus
	const dummy_user2 = await User.create({
		username: "Mary",
		email: "maryjohnson@gmail.com",
	});
	await dummy_movie2.setUser(dummy_user);
	await dummy_movie.setUser(dummy_user);
	await dummy_movie_wathching_1.setUser(dummy_user);
	await dummy_movie2.setUser(dummy_user2);
	await dummy_movie3.setUser(dummy_user2);

}
module.exports = seedDB;