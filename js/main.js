

    function openNav() {
        document.getElementById("mySidenavs").style.width = "280px";
    }

    function closeNav() {
        document.getElementById("mySidenavs").style.width = "0";
    }

    $(".selectBox").on("click", function(e) {
        $(this).toggleClass("show");
        var dropdownItem = e.target;
        var container = $(this).find(".selectBox__value");
        container.text(dropdownItem.text);
        $(dropdownItem)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });


    // membership slider

