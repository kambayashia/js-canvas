/**
 * Created with JetBrains WebStorm.
 * User: kambayashia
 * Date: 2012/10/08
 * Time: 10:39
 * To change this template use File | Settings | File Templates.
 */

function Renderer( canvas_id ){
    this.handle = $("#"+canvas_id)[0].getContext('2d');
    this.getHandle = function(){
        return this.handle;
    }
    this.setColor = function ( r, g, b, a ){
        //_color = '#' + this.intToHex(r, 2) + this.intToHex(g, 2) + this.intToHex(b, 2);
        this.setFillStyle( this.createColorFormat( r, g, b, a ) );
    }
    this.setFillStyle = function( style ){
        this.getHandle().fillStyle = style;
    }
    this.setLineColor = function( r,g,b,a ){
        this.handle.strokeStyle = this.createColorFormat( r, g, b, a );
    }

    this.clear = function ( x, y, width, height ){
        this.handle.clearRect( x, y, width, height );

    }
    this.fillRect =  function ( x, y, width, height ){
        this.handle.fillRect( x, y, width, height );
    }
    this.fillCircle = function( x, y, radius ){
        this.handle.beginPath();
        this.handle.arc( x, y, radius, 0, deg2rad( 360 ), true );
        this.handle.fill();
    }
    this.fillHex = function( x, y, size ){
        this.drawPolygon( x, y, size, 6 );
    }
    this.drawTriangle = function( x, y, size ){
        this.drawPolygon( x, y, size );
    }
    this.drawPolygon = function( x, y, size, angle_count ){
        this.handle.beginPath();
        var half_size = size / 2;
        var degree = 360 / angle_count;
        this.handle.moveTo( x + half_size, y + 0 );
        for( var i = 1; i <= angle_count; i++ ){
            var cos = Math.cos( deg2rad(degree * i) );
            var sin = Math.sin( deg2rad(degree * i) );
            var offset_x =  cos * half_size;
            var offset_y =  sin * half_size;
            this.handle.lineTo( x + offset_x, y + offset_y );
        }
        this.handle.fill();
    }
    this.rectLine = function( x, y, width, height ){
        this.handle.strokeRect( x, y, width, height );
    }

    this.drawImage = function( image, x, y, width, height ){
        this.handle.drawImage( image, x, y, width, height );
    }

    this.pushState = function(){
        this.handle.save();
    }
    this.popState = function(){
        this.handle.restore();
    }

    this.translate = function( x, y ){
        this.handle.translate( x, y );
    }
    this.rotate = function( degree ){
        this.handle.rotate( deg2rad( degree ) );
    }

    this.intToHex = function ( n, digit ){
        if( typeof(digit) === 'undefined') digit = 1;

        prefix = "000000000000000";
        return (prefix + parseInt(n).toString(16)).slice(-digit)
    }
    this.createColorFormat = function( r, g, b, a ){
        return "rgba( " + r + "," + g + "," + b + "," + a + ")";
    }
    this.createColorFormatRGB = function( r, g, b ){
        return "rgb( " + r + "," + g + "," + b + ")";
    }
}

