class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      success: function (result) {
        for (let i = 0; i < result.length; i++) {
          console.log(result[i]);
          $(".characters-container").append(
            "<div class='character-info'>" +
            "<div class='name'>Name: " + result[i].name + "</div>" +
            "<div class='occupation'>Occupation: " + result[i].occupation + "</div>" +
            "<div class='debt'>Debt: " + result[i].debt + "</div>" +
            "<div class='weapon'>Weapon: " + result[i].weapon + "</div>" +
            "</div>"
          );
        }
      }
    });
  }

  getOneRegister() {
  
  }

  createOneRegister() {
   
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      method: "POST",
      data: $('#new-character-form').serialize(),
      success: function (response) {
        
      },
      error: function (err) {
      },
    })
  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
