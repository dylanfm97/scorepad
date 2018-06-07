var new_game_button = document.querySelector("#new_game");

var start_page_div = document.querySelector("#start_page");
var form_div = document.querySelector("#form_div");

var create_game_button = document.querySelector("#create_game");

var low_radio_button = document.querySelector("#low_radio");
var actual_low_radio_button = document.querySelector("#lowest");
var high_radio_button = document.querySelector("#high_radio");
var actual_high_radio_button = document.querySelector("#highest");

//----game variables----//
var game_type = "high";
var game_name = "";
var players = 2;
var rounds = 0; //0 means unlimited, which is the default value

new_game_button.onclick = function(){
	start_page_div.style.display = "none";
	form_div.style.display = "block";
}

create_game_button.onclick = function(){
	form_div.style.display = "none";
}

low_radio_button.onclick = function() {
	actual_low_radio_button.checked = true;
}
high_radio_button.onclick = function() {
	actual_high_radio_button.checked = true;
}