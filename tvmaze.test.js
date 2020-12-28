describe('test searchShows func', function () {
	it('should return a jQuery object', async function () {
		let result = await searchShows('friends');
		let expected = {
			id: 431,
			image: 'http://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg',
			name: 'Friends',
			summary:
				'<p>Six young (20-something) people from New York City (Manhattan), on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.</p><p>This average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.</p>'
		};

		expect(result[0]).toEqual(expected);
	});

	it('should return a jQuery object', async function () {
		let result = await searchShows('lasdjaslkjdalskdjl');
		let expected = [];

		expect(result).toEqual(expected);
	});
});
