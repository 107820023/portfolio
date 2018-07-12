// Set up the object
var hotel = {
  name : "東方文華飯店",
  rooms : 40,
  booked : 25,
  logo : "file.svg",
  checkAvailability : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};
var hotel2 = new Object();
hotel2.name = '喜來登';
hotel2.rooms = 120;
hotel2.booked = 77;
hotel2.logo= "file2.svg";
hotel2.checkAvailability = function() {
  return this.rooms - this.booked;  
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name+' '+hotel2.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability()+' '+hotel2.checkAvailability();   // Update HTML with property of the object

document.getElementById('i1').src= hotel.logo;
document.getElementById('i2').src= hotel2.logo;
/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/