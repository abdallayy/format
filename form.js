const color = document.querySelectorAll(".color");
const web = document.getElementById("body");
const form = document.getElementById("form");
const sup = document.getElementById( "sup" );
const saved = document.getElementById( "saved" );
const txtsaved = document.createTextNode( "it is saved" );
const error = document.getElementById( "error" );
const txterror = document.createTextNode( "it is alwod saved" );
const txtreset = document.createTextNode( "it is reset" );
const reset = document.querySelector( ".f" );
function colorweb ( color )//set a cloro for bag
{
    
    const clas = [ "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11" ];
    const elment = { body: web, form: form, sup: sup };

    clas.forEach( removcla =>
    {
        Object.keys( elment ).forEach( elmen =>
        {
            elment[ elmen ].classList.remove( `${ elmen }${ removcla }` )
        } )
    } )


    Object.keys( elment ).forEach( elmen =>
    {
        elment[ elmen ].classList.add( `${ elmen }${ color }` )
    } )
} 


color.forEach( e =>//for add and remove active
{
    e.addEventListener( "click", function ( e )
    {
        color.forEach(e=>{e.classList.remove("cc")})
        e.currentTarget.classList.add( "cc" )
        const localid = e.currentTarget.id
        localStorage.setItem( "colo", localid );
        colorweb( localid );
    })
} )

sup.onclick = function ()//for save a new color 
{
    if (   localStorage.getItem( "colo" )==localStorage.getItem( "color" )||localStorage.getItem( "colo" ) == null )//if color it is allow save 
    {
        error.appendChild( txterror );
        setTimeout( function ()
        {
        error.innerHTML=""
        },2000)
    }
    else//if color it isnet allow save 
    {
        saved.appendChild( txtsaved );
        setTimeout( function ()
        {
            saved.innerHTML = ""
        }, 2000 )
    localStorage.setItem( "color", localStorage.getItem( "colo" ) );
    localStorage.removeItem("colo")
}
}

reset.onclick = function ()//resat a color for c5
{
    localStorage.setItem( "color", "c5" );
    color.forEach( e => { e.classList.remove( "cc" ) } );
    document.querySelector( `[id="${ localStorag }"]` ).classList.add( "cc" );
    colorweb( localStorag );
    saved.appendChild( txtreset );
        setTimeout( function ()
        {
        saved.innerHTML=""
        },2000)
}

const localStorag = localStorage.getItem( "color" );//for join of page rest a color
if ( localStorag )
{
    color.forEach( e => { e.classList.remove( "cc" ) } );
    document.querySelector( `[id="${ localStorag }"]` ).classList.add( "cc" );
    colorweb( localStorag );
}