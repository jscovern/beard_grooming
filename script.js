//  $(".submitForm").submit(function(event) {
//  	event.preventDefault();
//   var formData = getQueryStrings();
//   document.write(formData.firstname + " " + formData.lastname + ", thank you for reserving the " + formData.beardStyle + "!");
// });

function getQueryStrings() { 
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 

  for(var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 

  return assoc; 
} 

 var formData = getQueryStrings();
 document.write(formData.firstname + " " + formData.lastname + ", thank you for reserving the " + formData.beardStyle + "!");
// document.write(formData.lastname);

