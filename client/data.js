const data = {
	show_start_page: true,
	show_create_game_page: false,
	show_create_players_page: false,
	show_grid_page: false,
	show_add_scores_page: false,
	show_winner_page: false,
	show_select_game_page: false,
	game_input: '',
	players_input: '',
	rounds_input: '',
	unlimited_check_box: false,
	highest_score: false,
	players: [],
	player_objects: [],
	scores: [],
	this_row_of_scores: [],
	valid: {
		game: true,
		players: true,
		rounds: true
	},
	game_is_valid: true,
	invalid_message: '',
	winner: '',
	second_place: '',
	third_place: '',
	my_games: {}
}

export default data