/**
 * Created with JetBrains WebStorm.
 * User: kambayashia
 * Date: 2012/10/07
 * Time: 16:26
 * To change this template use File | Settings | File Templates.
 */

var _handle = null;
var _color = null;

var _debugger = function(){};
_debugger.log = function( message ){
    try{
        console.log( message );
    }
    catch(e){

    }
}

function isCanvasSupported(){
    return Modernizr.canvas;
}

function setHandle( handle ){
    _handle = handle;
    setColor( 0, 0, 0, 0 );
}

function setColor( r, g, b, a ){
    _color = '#' + intToHex(r, 2) + intToHex(g, 2) + intToHex(b, 2);
    _debugger.log( "set color:" + _color );
    _handle.fillStyle = _color;
}

function fillRect( x, y, width, height ){
    _handle.fillRect( x, y, width, height );
}

function intToHex( n, digit ){
    if( typeof(digit) === 'undefined') digit = 1;

    prefix = "000000000000000";
    return (prefix + parseInt(n).toString(16)).slice(-digit)
}
