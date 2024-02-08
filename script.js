// Runs once Document is loaded
document.addEventListener("DOMContentLoaded", function () {
alert("When printing, change display background image on, print as landscape, and print with color!");

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
            title: 'Certified Sigma',
            desc: 'Followed the sigma grindset for 5 years. Once complete, this award is mailed in by Patrick Bateman himself.'
        },

        forklift: {
            title: 'Forklift Certified',
            desc: 'Spent 2 seconds scrolling on the auto section on Instagram and decided this was their passion. \nF O R K L I F T.'
        }
    }

    // process form Data
    document.getElementById("myForm").addEventListener('submit', function (input) {
        input.preventDefault();

        console.log(input.target);

        var formData = new FormData(input.target);
        formData = Object.fromEntries(formData);

                // Gets presets and certification and writes to page
                let presetIn = formData.presets;
        
        
                // Writes name and signature to the page
                let nameElement = document.getElementById('name');
                let sigElement = document.getElementById('signature');
                // Grabs date and converts it to a string
                let date = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) ;
                let dateElement = document.getElementById('date');
        
                nameElement.innerText = formData.name;
                sigElement.innerText = formData.signature;
                dateElement.innerText = date;

                // Gets the Certification and the desc and adds it to the certificate
                let descElement = document.getElementById('desc');
                let certElement = document.getElementById('certify');

        // Adds desc to page depending on what they're certified in
        switch (formData.certified) {
            case "tiktok":
                certElement.innerText = objCert.tiktok.title;
                descElement.innerText = objCert.tiktok.desc;
                break;

            case "brainrot":
                certElement.innerText = objCert.brainrot.title;
                descElement.innerText = objCert.brainrot.desc;
                break;

            case "him":
                certElement.innerText = objCert.him.title;
                descElement.innerText = objCert.him.desc;
                break;

            case "foryou":
                certElement.innerText = objCert.foryou.title;
                descElement.innerText = objCert.foryou.desc;
                break;

            case "quagsire":
                certElement.innerText = objCert.quagsire.title;
                descElement.innerText = objCert.quagsire.desc;
                break;

            case "sigma":
                certElement.innerText = objCert.sigma.title;
                descElement.innerText = objCert.sigma.desc;
                break;

            case "forklift":
                certElement.innerText = objCert.forklift.title;
                descElement.innerText = objCert.forklift.desc;
                break;
        }

        // Changes class of certificate-container depending on what preset they choose
        let containerElement = document.getElementById('certificate-container');

        console.log(formData.presets);
        switch (formData.presets) {
            case "curtain":
                document.getElementById("logo").src="Seal-imgs/phil-approval.png";
                // Add the class name to certificate-container
                containerElement.classList.add('curtain');
                break;

            case "obscure":
                document.getElementById("logo").src="Seal-imgs/burger-approval.png";
                // Add the class name to certificate-container
                containerElement.classList.add('obscure');
                break;

            case "basement":
                document.getElementById("logo").src="Seal-imgs/quagsire-approval.png";
                // Add the class name to certificate-container
                containerElement.classList.add('basement');
                break;
        }
        window.print();
    });
    // Log readiness to console
    console.log("Ready");
});
