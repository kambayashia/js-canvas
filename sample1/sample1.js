/**
 * Created with JetBrains WebStorm.
 * User: kambayashia
 * Date: 2012/10/07
 * Time: 14:39
 * To change this template use File | Settings | File Templates.
 */
/*
if( isCanvasSupported() ){
    window.alert( "supported");
}
else{
    window.alert( "not supported");
}

*/

$(document).ready( eventOnReady );

function eventOnReady(){
    initApp();

}

function initApp(){
    var renderer = new Renderer("main-window");
    renderer.fillRect( 0, 0, 100, 100 );
    renderer.setColor( 100, 0, 0, 1 );
    renderer.fillRect( 100, 100, 100, 100 );
}
