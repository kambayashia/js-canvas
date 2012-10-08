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

function getCurrentTime(){
    return + new Date();
}

function deg2rad( degree ){
    return degree * Math.PI / 180;
}