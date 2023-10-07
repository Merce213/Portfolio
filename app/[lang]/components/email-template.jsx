import * as React from "react";

export const EmailTemplate = ({ message, senderEmail, subject, fullname }) => (
    <div>
        <h1>
            Vous avez reçu un message de {fullname} depuis votre formulaire de
            contact
        </h1>

        <h2>{subject}</h2>

        <p>{message}</p>

        <hr />
        <span>Email envoyé part : {senderEmail}</span>
    </div>
);
