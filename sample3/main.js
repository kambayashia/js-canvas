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

var _rects = {
    normal : { x:0, y:0, width:100, height:100, rotate:45 },
    lineRect : { x:0, y:100, width:100, height:100, rotate:30 },
    circle : { x:0, y:200, size:50, rotate:45 },
    hex : { x:100, y:0, size:60, rotate:0 }
}

$(document).ready( eventOnReady );

function eventOnReady(){
    initApp();

    setInterval( update, Number(1000/60) );
}

function initApp(){
    renderer = new Renderer( "main-window" );
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

    _rects.normal.rotate = parseInt((_rects.normal.rotate + 1) % 360);
    var current = _rects.normal;
    renderer.pushState();
    renderer.setColor( 0, 0, 0, 1 );
    renderer.translate( current.width / 2, current.height / 2 );
    renderer.rotate( current.rotate );
    renderer.fillRect( current.x + -current.width * .5,  current.y + -current.height *.5, current.width, current.height );
    renderer.popState();

    _rects.lineRect.rotate = parseInt((_rects.lineRect.rotate + 1) % 360);
    current = _rects.lineRect;
    renderer.pushState();
    renderer.setLineColor( 255, 0, 0, 1 );
    renderer.translate( current.x + current.width / 2, current.y + current.height / 2 );
    renderer.rotate( current.rotate );
    renderer.rectLine( -current.width * .5, -current.height *.5, current.width, current.height );
    renderer.popState();

    current = _rects.circle;
    renderer.pushState();
    renderer.setColor( 0, 255, 0, 1 );
    renderer.translate( current.x + current.size, current.y + current.size );
    renderer.fillCircle( 0, 0, current.size );
    renderer.setColor( 255, 0, 0, 1 );
    renderer.fillCircle( 0, 0, 2 );
    renderer.fillCircle( current.size, 0, 2 );
    renderer.popState();

    _rects.hex.rotate = parseInt((_rects.lineRect.rotate + 1) % 360);
    current = _rects.hex;
    renderer.pushState();
    renderer.setColor( 0, 0, 255, 1 );
    renderer.translate( current.x + current.size / 2, current.y + current.size / 2 );
    renderer.rotate( current.rotate );
    renderer.fillHex( 0, 0, current.size );
    renderer.popState();
}