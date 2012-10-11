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

var click_x = null;
var click_y = null;
var lifetime = 0;
var max_lifetime = 100;
jQuery.event.props.push('dataTransfer');
$(document).ready( eventOnReady );

function eventOnReady(){
    initApp();

    setInterval( update, parseInt(1000/60) );
}

function initApp(){
    renderer = new Renderer( "main-window" );

    $('#main-window').bind({
        'click' : function( event ){
            _debugger.log( "clicked " + event.toString() );
            /*
            click_x = event.clientX;
            click_y = event.clientY;
            */
            lifetime = max_lifetime;
            click_x = event.offsetX;
            click_y = event.offsetY;
        }
    })
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
    renderer.setColor( 0, 0, 0, 1 );
    renderer.fillRect( 0, 0, _window_size_x, _window_size_y );

    if( lifetime > 0 ){
        var scale = lifetime / max_lifetime;
        var gr = renderer.getHandle().createRadialGradient( 0, 0, 1, 0, 0, 100 * scale );
        gr.addColorStop(0, renderer.createColorFormat( 255, 0, 0, 1 * scale ));
        gr.addColorStop(1, renderer.createColorFormat( 0, 0, 255, 1 * scale ));

        renderer.setFillStyle( gr );
        renderer.pushState();
        renderer.translate( click_x, click_y );
        renderer.fillCircle( 0, 0, 100 * scale );
        renderer.popState();

        lifetime--;
    }
 }