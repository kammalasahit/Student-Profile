function validate()
{ 
    var letters = /^[A-Za-z]+$/;
    if( document.register.firstname.value == "" )
   {
     alert( "Please provide your LastName" );
    
     return false;
   }
  
   if( document.register.lastname.value == "" )
   {
     alert( "Please provide your LastName" );
    
     return false;
   }
   if( !document.register.firstname.value.match(letters) )
   {
     alert( "First name should only contain Alphabets" );
     return false;
   }
   if( !document.register.lastname.value.match(letters) )
   {
     alert( "Lastname name should only contain Alphabets" );
     return false;
   }
   if( document.register.firstname.value.length>30 )
   {
     alert( "Maximum  length of first name is 30" );
     return false;
   }
   if( document.register.lastname.value.length>30 )
   {
     alert( "Maximum  length of first name is 30" );
     return false;
   }
   if( document.register.mobile_no.value.length!=10 )
   {
     alert( "Phone number should contain 10 digits" );
     return false;
   }
   if((document.register.city.value.length>30) | (!document.register.city.value.match(letters) ))
   {
     alert( "The country name should have only alphbets and country name length <30" );
     return false;
   }

   if( document.register.pin_code.value.length!=6 )
   {
     alert( "Pin code should contain 6 digits" );
     return false;
   }
   if((document.register.state_name.length>30) | (!document.register.state_name.value.match(letters) ))
   {
     alert( "The state name should have only alphbets and state name  shuld have length <30" );
     return false;
   }

   if((document.register.state_name.length>30) | (!document.register.state_name.value.match(letters) ))
   {
     alert( "The state name should have only alphbets and state name  shuld have length <30" );
     return false;
   }
   return true;
}
   