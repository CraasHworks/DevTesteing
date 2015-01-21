/**
 * Created by craash on 1/21/15.
 */

//Global variables are declared here
var cc; // CC is my ctx since cc is much faster to write than ctx.
var cWidth, cHeight;

// creates and configures the canvas to the html document.
function setupCanvas(width, heihgt, ctx)
{
    var cvas = ce('canvas', 'mainscreen');
    document.body.appendChild(cvas);
    cc = eg('mainscreen').getContext(ctx);
    cWidth = width;
    cHeight = heihgt;
    eg('mainscreen').width= cWidth;
    eg('mainscreen').height= cHeight;
    eg('mainscreen').style.background = "grey";
    eg('mainscreen').style.position = "absolute";
    eg('mainscreen').style.left = window.innerWidth / 2+ - width /2 +"px";

    (function animloop(){
        requestAnimFrame(animloop);
        render();
    })();

}
var dir = 3;
var y = 10;
function render()
{
    cc.clearRect(0,0, cWidth, cHeight);
    cc.fillStyle = "blue";
    cc.fillRect(0, 10, 100, 100);
    cc.strokeRect(0,10,100,100);

}

// Element by ID grabber
function eg(id){
    return document.getElementById(id);
}

// Element constructor
function ce(type, uniqid){
    var element, uniqid;
    element = document.createElement(type);
    if(uniqid == null){
        console.log('nope');
        return element;
    }
    element.setAttribute('id', uniqid);
    return element;
}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();




// This function is run when the html document is done loading.
function start()
{
    setupCanvas(700, 500, "2d");

}