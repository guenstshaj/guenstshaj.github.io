$(document).ready(function() {




    //Loading page

    document.addEventListener("DOMContentLoaded", initialiser());
    function initialiser() {
        setTimeout(function () {
            $("#loader").fadeOut("slow");
        }, 1323);
    }
   
    $("#menu").click(function(){
        $("#tablette").addClass("show");
    });
    $("#menuTablette").click(function(){
        $("#tablette").removeClass("show");
    });


    //Send data to server
    $("#loading").fadeOut();
    $("#btn").click(function(){

        let username = $("#username").val();
        let email = $("#email").val();
        let message = $("#message").val();
        $("#loading").fadeOut();
        $("#boxMessage").fadeOut();
        $("#loading").fadeIn();

        if (username != "" && email != "" && message != ""){

            setTimeout(function(){

                $.ajax({
                    url: "/server/server.php",
                    method: "POST",
                    data : { username:username, email:email, message:message},
                    success: function(data){

                        $("#loading").fadeOut("slow");

                        if(data == "Votre message a été envoyé"){

                            setTimeout(function () {
                                $("#output").text("Votre message a été envoyé avec succès");
                                $("#output").css({"color" : "green"});
                                $("#changeIcon").removeClass("bx bx-x-circle").addClass("bx bxs-check-circle");
                                $("#changeIcon").css({"color" : "green"});
                                $("#boxMessage").fadeIn("slow");
                                StartSon();
                            }, 500);

                        }else{

                            setTimeout(function () {
                                $("#output").text(data);
                                $("#output").css({"color" : "red"});
                                $("#changeIcon").removeClass("bx bxs-check-circle").addClass("bx bx-x-circle");
                                $("#changeIcon").css({"color" : "red"});
                                $("#boxMessage").fadeIn("slow");
                                StartSon();
                            }, 500);
                        }
                    },
                    error: function(jqXHR, textStatus, errorTh){
                        console.log(jqXHR.responseText);
                    }
                })
            },2324);

        }
        else{

            setTimeout(function(){
                $("#loading").fadeOut();
                setTimeout(function () {
                    $("#output").text("Veuillez renseigner tous les champs vides!");
                    $("#output").css({"color" : "red"});
                    $("#changeIcon").removeClass("bx bxs-check-circle").addClass("bx bx-x-circle");
                    $("#changeIcon").css({"color" : "red"});
                    $("#boxMessage").fadeIn("slow");
                    StartSon();
                }, 500);
            },2324);
        }
    })


    //Close box-message
    $("#closeBox").click(function () {
       $("#boxMessage").fadeOut("slow");
    });



    //Rédirection des pages

    $("#PAccueil").click(function(){
        window.location.href = "/pages/service.html";
    });
    $("#PHoraire").click(function(){
        window.location.href = "/pages/horaire.html";
    });
    $("#PService").click(function(){
        window.location.href = "/pages/service.html";
    });
    $("#PContact").click(function(){
        window.location.href = "/pages/contact.html";
    });
    $("#PApropos").click(function(){
        window.location.href = "/pages/apropos.html";
    });

    //son starts with
    function StartSon(){
        // Créez une nouvelle instance de l'objet Audio
        var audio = new Audio("/assets/son/clunk-notification-alert_D_major.wav");
        // Jouez le son
        audio.play();
    }

});