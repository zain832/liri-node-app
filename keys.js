//Requiring packages for Twitter/Spotify/OMDB/FS

var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = request("fs");

//User parameters made to a process

var parameters = process.argv[2];

//User Input for Parameters

var input = "";
if (process.argv.length > 3) {
	input = process.argv[3];
	for (i = 4; i < process.argv.length; i++) {
		input += "" + process.argv[i];
	}
}

// Switch statements to run parameters

switch(parameters) {
	case "my-tweets":
		myTweets();
		break;
	case "spotify-this-song":
		spotifyThisSong();
		break;
	case "movie-this":
		movieThis();
		break;
	case "do-what-it-says":
		doWhatItSays();
		break;
}

// function to pull tweets from twitter API

function pullTweets() {

	var twitterKeys = require("./keys.js").twitterKeys;

	var consumer_key = twitterKeys.consumer_key;
	var consumer_secret = twitterKeys.consumer_secret;
	var access_token_key = twitterKeys.access_token_key;
	var access_token_secret = twitterKeys.access_token_secret;

	var client = new twitter ({
		consumer_key: consumer_key,
		consumer_secret: consumer_secret,
		access_token_key: access_token_key,
		access_token_secret: access_token_secret
	});

// Consoles out 20 recent tweets from (zain832)
	client.get("search/tweets", {q: "zain832", count: 20}, function(err, tweets, response) {
		var tweets = "";
		for (var i = 0; i < tweets.length; i++) {
			tweets += "\n" + tweets.text + "\n";
		}
		console.log(tweets);
	})

}