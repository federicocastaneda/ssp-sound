$(document).ready(function(){
        ion.sound({
            sounds: [
                {name: "beer_can_opening"},
                {name: "bell_ring"}
            ],
            path: "http://federicocastaneda.github.io/ssp-sound/sounds/",
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
