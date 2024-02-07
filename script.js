// Runs once Document is loaded
document.addEventListener("DOMContentLoaded", function () {
    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('submit', processForm))
    }

    // Makes object to access descripton of each certification when the time comes
    const objCert = {
        tiktok: {
            title: 'TikTok Shop \"Entrepreneur\"',
            desc: 'Thinks that selling basically useless things on the TikTok shop is going to get them money and fame.'
        },

        brainrot: {
            title: 'Professional Brain Rot Spreader',
            desc: 'Watched so much brain rot on social media \'Ironically\' that they have become the imbodiment brain rot themselves.'
        },

        him: {
            title: 'Being literally him',
            desc: 'Consumed so much of their favorite media that they actually think they are that person from their media.'
        },

        foryou: {
            title: 'For-You page resposter',
            desc: 'Resposts everything on their For-You page so much that everyone\'s For-You page is just theirs.'
        },

        quagsire: {
            title: 'Shiny Quagsire Handler',
            desc: 'Searched a millenia for a shiny Wooper to evolve into a Quagsire. When it finally happened, their life was complete.'
        },

        sigma: {
            title: 'A Sigma',
            desc: 'Followed the sigma grindset for 5 years. Once complete, this award is mailed in by Patrick Bateman himself.'
        },

        loner: {
            title: 'A Loner',
            desc: '\"I don\'t need anyone!\" says this person. Always stayed away from functions and never socialized outside of work/school. ;-;'
        }
    }

    // process form Data
    document.getElementById("myForm").addEventListener('submit', function (input) {
        input.preventDefault();

        console.log(input.target);

        var formData = new FormData(input.target);
        formData = Object.fromEntries(formData);

        // Adds desc to page depending on what they're certified in
        switch (certifyIn) {
            case "tiktok":
                // Action
                break;

            case "brainrot":
                // Action
                break;

            case "him":
                // Action
                break;

            case "foryou":
                // Action
                break;

            case "quagsire":
                // Action
                break;

            case "sigma":
                // Action
                break;

            case "loner":
                // Action
                break;
        }

        // Changes class of certificate-container depending on what preset they choose
        switch (presetIn) {
            case "curtain":
                // Action
                break;

            case "obscure":
                // Action
                break;

            case "basement":
                // Action
                break;
        }

        // Gets presets and certification and writes to page
        let presetIn = formData.presets;
        let certifyIn = formData.certified;


        // Writes name and signature to the page
        let nameElement = document.getElementById('name');
        let sigElement = document.getElementById('signature');
        // Grabs date and converts it to a string
        let dateElement = document.getElementById('date');

        nameElement.innerText = formData.name;
        sigElement.innerText = formData.signature;
        dateElement.innerText = formData.date;
    });
    // Log readiness to console
    console.log("Ready");
});
