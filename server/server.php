<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require '../vendor/autoload.php';

if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['message'])){
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if ($username != "" && $email != "" && $message != ""){
        if (filter_var($email, FILTER_VALIDATE_EMAIL)){
            $pattern = '/^[a-zA-Z][a-zA-Z0-9]{3,}$/';
            if (preg_match($pattern, $username)) {
                $mail = new PHPMailer(true);
                try {
                    //Server settings
                    $mail->SMTPDebug = SMTP::DEBUG_OFF; //Enable verbose debug output
                    $mail->isSMTP(); //Send using SMTP
                    $mail->Host = 'smtp.gmail.com'; //Set the SMTP server to send through
                    $mail->SMTPAuth = true; //Enable SMTP authentication
                    $mail->Username = 'daniktransfert@gmail.com'; //SMTP username
                    $mail->Password = 'xjli vteh valm wwre'; //SMTP password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
                    $mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                    //Recipients
                    $mail->setFrom('daniktransfert@gmail.com', 'Dani K. Transfert');
                    $mail->addAddress("daniktransfert@gmail.com", ''); //Add a recipient//Name is optional
                    $mail->addAddress("guensg@gmail.com", ''); //Add a recipient//Name is optional
                    $mail->addReplyTo('daniktransfert@gmail.com', 'Dani K. Transfert');

                    //Attachments
                    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

                    //Content
                    $mail->isHTML(true); //Set email format to HTML
                    $mail->Subject = "Formulaire de demande d'envoi d'un client";
                    //$mail->msgHTML("Je dois créer mon réseau social avec ma tête", __DIR__);
                    $mail->setLanguage('fr');
                    $mail->Body = "Bonjour le service Dani K. Transfert ! Un client vous demande
                    <br>Nom: $username<br>E-mail: $email<br>Message: $message
                    <br><h2>Dani K. Transfert</h2>
                   ";
                    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                    $mail->send();

                    //Recipients accuser de reception pour le client
                    $mail->setFrom('daniktransfert@gmail.com', 'Dani K. Transfert');
                    $mail->addAddress("guensg@gmail.com", ''); //Add a recipient//Name is optional
                    $mail->addReplyTo('daniktransfert@gmail.com', 'Dani K. Transfert');

                    //Attachments
                    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

                    //Content
                    $mail->isHTML(true); //Set email format to HTML
                    $mail->Subject = "Confirmation de la réception";
                    //$mail->msgHTML("Je dois créer mon réseau social avec ma tête", __DIR__);
                    $mail->setLanguage('fr');
                    $mail->Body = "Salut <b>$username</b> ! Nous avons bien reçu votre message. <br>
                    Nous vous repondrons dans un instant. <br>Merci pour votre comprehension !  
                    <br><h2>Dani K. Transfert</h2>
                   ";
                    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                    $mail->send();
                    echo 'Votre message a été envoyé';

                } catch (Exception $e) {
                    echo "L'envoi du message a échoué. Mailer Error: {$mail->ErrorInfo}";
                }

            } else {
                echo "Le nom est invalide !";
            }
        }else{
            echo "L'adresse e-mail n'est pas correct";
        }

    }else{
        echo "Veuillez renseigner tous les champs vides!";
    }
}
else {
    header('Location: ../index.html');
}