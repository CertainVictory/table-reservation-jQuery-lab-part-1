"use strict";

$(document).ready(function () {
    $(".table").addClass("available");
    //Begin avail btn show overlay
    let table = null;
    let heck = false;
    let name = null;
    let phone = null;
    let party = null;
    let fff = null;
// $(document).on("click", ".available", function(e){
//      code block
//})

// document.addEventListener("click", function(e) {

// });

    $(".table").on("click", function (e) {

        $(".picker_container").addClass("no-click");
        $(".form-overlay").show();
        $(".table-number").html("Table Number: " + $(e.target).attr('id')); //fills button id into the Table Number

        $(e.target).removeClass("available").addClass("selected");

        fff = $(e.target);

        $(".btn-save").click(function () {
        name = $(`#name`).val();
        phone = $(`#phone`).val();
        party = $(`#party`).val();
            $(".form-overlay").hide();
            if ($(e.target).hasClass("selected")) {
                $(e.target).removeClass("selected").addClass("reserved").unbind();
                $(".picker_container").removeClass("no-click");
                
            }
            // $(".field-style").val("")
            
      $(fff).attr(`name`, `${name}`)
      $(fff).attr(`phone`, `${phone}`)
      $(fff).attr(`party`, `${party}`)

    });
        })
        $(".btn-close").on("click", function () {
            $(".form-overlay").hide();
            $(".table").removeClass("selected").addClass("available");
            $(".picker_container").removeClass("no-click");
        });
        $(document).on("mouseenter", ".reserved", function(e){
            // if ($(e.target).attr("name") && $(e.target).attr("phone")) {
              $(e.target).append(`
              <section class="tooltip">
                <p>First Name: ${$(e.target).attr("name")}</p>
                <p>Phone Number: ${$(e.target).attr("phone")}</p>
                <p>Size of Party: ${$(e.target).attr("party")}</p>
              </section>
              `);
        })
            $(document).on("mouseleave", ".reserved", function(e) {
                $(".tooltip").remove();
              });
//           });
//   $(document).on("click", ".table", (e) => {
//     table = $(e.target);
//     table.css("background-color", "red");
//   });
//   $(document).on("click", ".btn-save", (e) => {
   
//   });

 

}); //----------end of main function--------







 // ----------END OF DOC----------