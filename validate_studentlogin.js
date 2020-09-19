function validate()
{ 
   if( document.StudentLogin.suname.value == "" )
   {
     alert( "Please provide your username!" );
     document.StudentRegistration.suname.focus() ;
     return false;
   }
   return true;
}