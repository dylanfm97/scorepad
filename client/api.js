//api

const add_game = (game_id, game) => {

	return new Promise((resolve, reject) => {
		

		let parsed_game = JSON.stringify(game)
		localStorage.setItem(game_id, parsed_game)

	})
}

const get_game = (game_id) => {

	return new Promise((resolve, reject) => {

		const game = localStorage.getItem(game_id)
		if(game === null){
			resolve([])
		}
		else{
			resolve(JSON.parse(game))
		}

	})

}

const get_games = () => {
	return new Promise((resolve, reject) => {

		var my_games = {}

		for(var game in localStorage){
			if(localStorage.hasOwnProperty(game)){
				let this_game = localStorage.getItem(game)
				if(game)
					my_games[game] = this_game
				
			}
		}
		resolve(my_games)
		
	})
}

export default{
	add_game,
	get_game,
	get_games	
}