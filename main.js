var canvas = new fabric.Canvas('myCanvas');
player_x= 10;
player_y= 10;

block_width= 30;
block_height= 30;

player_img="";
block_img= "";

function update_player(){
    fabric.Image.fromURL("player.png" , function(img){
        player_img= img;

        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);

        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);

    })
}

function make_blocks(get_image){
    fabric.Image.fromURL(get_image , function(add){
        block_img= img;

        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);

        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    })
}