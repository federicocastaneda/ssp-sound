$(document).ready(function(){
var soundpath = window.location.origin+window.location.pathname + '/sounds/';
        ion.sound({
            sounds: [
                {name: "beer_can_opening"},
                {name: "bell_ring"}
            ],
            path: (soundpath),
            preload: true,
            volume: 1.0
        });

        $("#b01").on("click", function(){
            ion.sound.play("beer_can_opening");
        });
        $("#b02").on("click", function(){
            ion.sound.play("bell_ring");
        });

    });
