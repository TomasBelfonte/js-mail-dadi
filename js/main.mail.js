const inputMail = prompt ("Inserire la propria e-mail");

const listEmail = [ "pippo@email.com", "pluto@email.com", "tom@email.com", "jerry@email.com" ]; 

for (let i = 0; i<listEmail.length; i++ ) {

    if ( inputMail === "pippo@email.com" ) {
        alert( "benvenuto utente" );
    } else if ( inputMail === "pluto@email.com" ) {
        alert( "benvenuto utente" );
    } else if ( inputMail === "tom@email.com" ) {
        alert( "benvenuto utente" );
    } else if ( inputMail === "jerry@email.com" ) {
        alert( "benvenuto utente" );
    } else {
        alert( "Non sei un utente registrato" );
    }

}