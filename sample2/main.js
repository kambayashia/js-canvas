/**
 * Created with JetBrains WebStorm.
 * User: kambayashia
 * Date: 2012/10/07
 * Time: 18:25
 * To change this template use File | Settings | File Templates.
 */

$(document).ready( eventOnReady );

var renderer;

function eventOnReady(){
    initApp();

}

function initApp(){
    renderer = new Renderer( "main-window" );
    setInterval( drawScreen, Number(1000/60) );
}

var _x1 = 0, _y1 = 0, _x2 = 100, _y2 = 100;
var _v1 = 1, _v2 = -1;

function drawScreen(){
    _x1  += _v1;
    if( (_x1 > 200) || (_x1 < 0) ){
        _v1 *= -1;
        _x1 += _v1;
    }

    _x2  += _v2;
    if( (_x2> 200) || (_x2 < 0) ){
        _v2 *= -1;
        _x2 += _v2;
    }

    renderer.clear( 0, 0, 300, 300 );

    renderer.setColor( _x1, 0, 0, 1 );
    renderer.fillRect( _x1, _y1, 100, 100 );
    renderer.setColor( 0, _x2, 0, 1 );
    renderer.fillRect( _x2, _y2, 100, 100 );

}
