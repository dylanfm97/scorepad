import data from './data.js'

const app = new Vue({
	el: "#app",
	data,
	watch: {
		unlimited_check_box() {
			rounds_input.disabled = this.unlimited_check_box
		}
	},
	computed: {
		totals() {
			var totals = []
				this.player_objects.forEach( player => {
					console.log(player)
					var this_total = 0
					for(var i = 0; i < player.score.length; i++){
						this_total += Number(player.score[i])
					}
					totals.push(this_total)
			})
			return totals
		}
	},
	methods: {
		isValid(){
			this.valid = {
				game: Boolean(this.game_input),
				players: Boolean(Number(this.players_input)),
				rounds: Boolean(Number(this.rounds_input)) || this.unlimited_check_box
			}
			for(const key in this.valid){
				if(!this.valid[key]){
					//template literal	
					//const refString = key + "_ref"
					//const ref=this.$refs[refString]
					//ref.setSelectionRange(0, ref.length)
					//setTimeout(() => {
						//select doesn't work in safari
						//so we should really use setSelectionRange buuut...

						//ref.select()
				//	}, 1)
					if(key == 'game')
						this.invalid_message = "please enter a game name"
					else if(key == 'players')
						this.invalid_message = "please enter a number for players"
					else if(key == "rounds")
						this.invalid_message = "please enter a number for rounds"

					this.game_is_valid = false
					return false
				}
			}
			return true
		},
		validate_player_names(){

		},
		validate_scores(){
			for(var i in this.this_row_of_scores){
				if(!Boolean(Number(this.this_row_of_scores[i]))){
					if(this.this_row_of_scores[i] != 0)
						return false
				}
			}
			return true
		},
		new_game_onclick(){
			this.show_start_page = !this.show_start_page
			this.show_create_game_page = !this.show_create_game_page
		},

		create_game_onclick(){
			if(this.isValid()){
				this.show_create_game_page = false
				this.show_create_players_page = true
				for(var i = 0; i < Number(this.players_input); i++){
					this.this_row_of_scores.push(0)
				}
				this.this_row_of_scores
			} else{
				console.log("awwwwww try again homey")
				console.log(this.valid)
			}

		},
		start_game_onclick(){
			this.show_create_players_page = false
			this.show_grid_page = true	
			for(const i in this.players){
				var player = {
					name: this.players[i],
					score: []				
				}
				this.player_objects.push(player)
			}

		},
		add_scores_onclick(){
			if(!this.show_add_scores_page)
				//before I type in the scores
			{
				this.show_add_scores_page = true;
				
				for(p in this.players){
					this.this_row_of_scores[p] = ''
				}				
			}
			else{
				//after I type in the scores
				if(this.validate_scores()){
					var i = 0
					this.scores.push(0);
		
					for(var p in this.player_objects){
						this.player_objects[p].score.push(0);
						this.player_objects[p]
							.score[this.player_objects[p]
								.score.length - 1] = this.this_row_of_scores[i]
						i ++
					}
					this.show_add_scores_page = false;
				} else{
					console.log("awww sweaty I'm sorry :((((")
				}
			}
		}

	}
	
})






