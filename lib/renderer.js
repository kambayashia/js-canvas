/**
 * Created with JetBrains WebStorm.
 * User: kambayashia
 * Date: 2012/10/08
 * Time: 10:39
 * To change this template use File | Settings | File Templates.
 */

function Renderer( canvas_id ){
    this.handle = $("#"+canvas_id)[0].getContext('2d');
    this.setColor = function ( r, g, b, a ){
        _color = '#' + this.intToHex(r, 2) + this.intToHex(g, 2) + this.intToHex(b, 2);
        this.handle.fillStyle = _color;
    }

    this.clear = function ( x, y, width, height ){
        this.handle.clearRect( x, y, width, height );

    }
    this.fillRect =  function ( x, y, width, height ){
        this.handle.fillRect( x, y, width, height );
    }

    this.intToHex = function ( n, digit ){
        if( typeof(digit) === 'undefined') digit = 1;

        prefix = "000000000000000";
        return (prefix + parseInt(n).toString(16)).slice(-digit)
    }
}

