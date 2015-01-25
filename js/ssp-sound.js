$(document).ready(function(){
        ion.sound({
            sounds: [
                {name: "car"},
                {name: "laughing"}
            ],
            path: "http://federicocastaneda.github.io/ssp-sound/sounds/",
            preload: true,
            volume: 1.0
        });

        $("#b01").on("click", function(){
            ion.sound.play("car");
        });
        $("#b02").on("click", function(){
            ion.sound.play("laughing");
        });

    });
