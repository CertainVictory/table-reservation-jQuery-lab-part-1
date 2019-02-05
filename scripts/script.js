"use strict";

$(document).ready(function () {
    $(".table").addClass("available");
    //Begin avail btn show overlay
    let table = 0;
    let heck = false;

    $(".table").on("click", function (e) {

        $(".picker_container").addClass("no-click");
        $(".form-overlay").show();
        $(".table-number").html("Table Number: " + $(e.target).attr('id')); //fills button id into the Table Number

        $(e.target).removeClass("available").addClass("selected");

        $(".btn-save").click(function () {

            $(".form-overlay").hide();
            if ($(e.target).hasClass("selected")) {
                $(e.target).removeClass("selected").addClass("reserved").unbind();
                $(".picker_container").removeClass("no-click");
            }
        })
        $(".btn-close").on("click", function () {
            $(".form-overlay").hide();
            $(e.target).removeClass("selected").addClass("available");
            $(".picker_container").removeClass("no-click");
        });

    }); //----------end of main function--------








}) // ----------END OF DOC----------