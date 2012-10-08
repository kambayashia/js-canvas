/**
 * Created with JetBrains WebStorm.
 * User: kambayashia
 * Date: 2012/10/07
 * Time: 18:25
 * To change this template use File | Settings | File Templates.
 */

var _window_size_x = 640;
var _window_size_y = 480;
var renderer;

var visible_next_image = false;
var current_image;
var next_image;

jQuery.event.props.push('dataTransfer');
$(document).ready( eventOnReady );

function eventOnReady(){
    initApp();
}

function initApp(){
    renderer = new Renderer( "main-window" );

    $('#main-window').bind({
        dragover : function( event ){
            event.preventDefault();
        },
        drop : function( event ){
            if( event.dataTransfer.items.length ){
                var item = event.dataTransfer.items[0];
                if ((item.kind == 'file') && (item.type.match('^image/'))) {
                    next_image = new Image();
                    next_image.onload = function(){
                        visible_next_image = true;
                    }
                    next_image.src = window.webkitURL.createObjectURL( item.getAsFile() );
                }
            }

            event.preventDefault();
        }
    })

    current_image = new Image();
    current_image.addEventListener(
        'load',
        imageOnLoad,
        false
    );    current_image.src = "../resources/image/image1.png";
}

function imageOnLoad( event ){
    setInterval( update, parseInt(1000/60) );
}

function update(){
    var start_time = getCurrentTime();
    //for( var i = 0; i < 4000000; i++ ){ var j = 10 + i;}

    drawScreen();
    var end_time = getCurrentTime();
    var lapsed_time = end_time - start_time;

    $('#fps').html( 'fps:' + (lapsed_time ? parseInt( 1000 / lapsed_time ) : 1000) );
}

function drawScreen(){
    renderer.clear( 0, 0, _window_size_x, _window_size_y );

    renderer.drawImage( current_image, 0, 0, current_image.width, current_image.height );
    renderer.drawImage( current_image, current_image.width, 0, 20, 20 );
    renderer.drawImage( current_image, current_image.width+20, 0, current_image.width*2, current_image.height*2 );

    if( visible_next_image ){
        renderer.drawImage( next_image, 200, 0, next_image.width, next_image.height );
    }
}