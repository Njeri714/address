// business logic
function Contact(first, last){
    this.firstName = first;
    this.lastName = last;
    this.address = [];
}

function address(street, city, county){
    this.street = street;
    this.city = city;
    this.county;
}
Contact.prototype.fullName = function(){
    returnthis.firstName + " " + this.lastName; 
}

// usser logic
$(document).ready(function(){
    $("form#new-contact").submit(function(event){
        event.default();
        let inputtedFirstName = $("#input#new-first-name").val();
        let inputtedLastName = $("#input#new-last-name").val();

        let newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");
 
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    });
});

$(document).ready(function() {
    $("#add-address").click(function() {
      $("#new-addresses").append('<div class="new-address">' +
                                   '<div class="form-group">' +
                                     '<label for="new-street">Street</label>' +
                                     '<input type="text" class="form-control new-street">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-city">City</label>' +
                                     '<input type="text" class="form-control new-city">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-county">County</label>' +
                                     '<input type="text" class="form-control new-county">' +
                                   '</div>' +
                                 '</div>');
    });
    
$(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });  