import data from './data.js'

const app = new Vue({
	el: "#app",
	data,
	watch: {
		unlimited_check_box() {
			rounds_input.disabled = this.unlimited_check_box
		}
	},
	methods: {
		new_game_onclick(){
			this.show_start_page = !this.show_start_page
			this.show_create_game_page = !this.show_create_game_page
		},

		create_game_onclick(){
			this.show_create_game_page = false
			this.show_create_players_page = true
		},
		start_game_onclick(){
			this.show_create_players_page = false
			this.show_grid_page = true	
			for(const i in this.players){
				var player = {
					name: this.players[i],
					score: [0,12,54]				
				}
				this.player_objects.push(player)
			}

		},
		add_scores_onclick(){
			if(!this.show_add_scores_page)
			{
				this.show_add_scores_page = true;
				for(var player in this.player_objects){
					//console.log("hi")
					console.log(player);
					this.player_objects[player].score.push(0);
					
				}

				this.scores.push(0);
			}
			else{
				this.show_add_scores_page = false;
			}
		}

	}
	
})






