$(document).ready(function(){

        var audiosources = ["Rustling Leaves", "Stream Flowing", "Normal Conversation", "Laughter", "Car", "Truck", "Jet"];

        $("#audio-labels-slider")
            .slider({ min: 0, max: audiosources.length-1, value: 3 })
            .slider("pips", {
                rest: "label",
                labels: audiosources
            })
            .slider("float", {
                labels: ['27', '40', '50', '60', '70', '84', '103'],  
                suffix: " dB"
            });

        ion.sound({
            sounds: [
	            {name: "leaves"},
	            {name: "stream"},
	            {name: "conversation"},
	            {name: "laughing"},
	            {name: "car"},
                {name: "truck"},
                {name: "jet"}
            ],
            path: "http://federicocastaneda.github.io/ssp-sound/sounds/",
            preload: true,
            volume: 1.0
        });


        $(".ui-slider-pip-0").on("click", function(){
	        ion.sound.stop();
            ion.sound.play("leaves");
        });
        $(".ui-slider-pip-1").on("click", function(){
	        ion.sound.stop();
            ion.sound.play("stream");
        });
        $(".ui-slider-pip-2").on("click", function(){
	        ion.sound.stop();
            ion.sound.play("conversation");
        });
        $(".ui-slider-pip-3").on("click", function(){
	        ion.sound.stop();
            ion.sound.play("laughing");
        });        
        $(".ui-slider-pip-4").on("click", function(){
	        ion.sound.stop();
            ion.sound.play("car");
        });
        $(".ui-slider-pip-5").on("click", function(){
	        ion.sound.stop();
            ion.sound.play("truck");
        });
        $(".ui-slider-pip-6").on("click", function(){
	        ion.sound.stop();
            ion.sound.play("jet");
        });
        
        
        
        
        
        $("#b00").on("click", function(e){
	        ion.sound.stop();
            ion.sound.play("leaves");
            e.preventDefault();
        });
        $("#b01").on("click", function(e){
	        ion.sound.stop();
            ion.sound.play("stream");
            e.preventDefault();
        });        
        $("#b02").on("click", function(e){
	        ion.sound.stop();
            ion.sound.play("conversation");
            e.preventDefault();
        });        
        $("#b03").on("click", function(e){
	        ion.sound.stop();
            ion.sound.play("laughing");
            e.preventDefault();
        });
        $("#b04").on("click", function(e){
	        ion.sound.stop();
            ion.sound.play("car");
        });  
        $("#b05").on("click", function(e){
	        ion.sound.stop();
            ion.sound.play("truck");
            e.preventDefault();
        });
        $("#b06").on("click", function(e){
	        ion.sound.stop();
            ion.sound.play("jet");
            e.preventDefault();
        });  





    });
