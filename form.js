let form = document.querySelector( "#form" );
let user = document.querySelector( "#user" );
let email = document.querySelector( "#email" );
let submit = document.querySelector( "#submit" );
let error_email = document.querySelector( "#error_email" );
let ex = document.createTextNode( "it is lower length" );
let text = document.createTextNode( "you donet writ in this " );
let error_user = document.querySelector( "#error_user" );
form.onsubmit = function (event)
{

    if ( user.value == "" || email.value == "" )
    {
        event.preventDefault();
        if ( user.value == "" )
        {
            error_user.appendChild( text );
        } else if( email.value == "" )
        {
            error_email.appendChild( text );
        };
    }
    if ( user.value.length < 3 )
    {
        event.preventDefault();
        error_user.appendChild( text );
    } 
}
