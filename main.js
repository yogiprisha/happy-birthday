var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

	
	
 function p_update(){
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        player_o=Img;
        player_o.scaleToWidth(700);
        player_o.scaleToHeight(510);

        player_o.set({
            top:0,
            left:0,
        });
        canvas.add(player_o);
    });
}

function play(){
x.play();	
}
