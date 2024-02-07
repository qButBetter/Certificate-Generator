const objCertIn = {
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

const objPresetIn = {
    curtain: {
        // Would have a method that changes the background to curtain & seal
    },

    obscure: {
        // Would have a method that changes the background to obscure fast food place & seal
    },

    basement: {
        // Would have a method that changes the background to a basement & seal
    }
}


function runner(objCertify, objPreset) {

    // Constructs object thru parameters.
    this.name = nameInput;
    this.preset = presetInput;
    this.certification = certifyInput;
    this.signer = signedInput;

    //Changes background based on input
    switch (objPreset.preset) {
        case "curtain":
            // Change background to curtains
            break;

        case "obscure":
            // Change background to obscure fast food
            break;

        case "basement":
            // Change background to basement
            break;
    }

    //Changes certification based on input
    switch (objCertify.certified) {
        case "tiktok":
            //Changes certification to tiktok
            break;

        case "brainrot":
            //Changes certification to brainrot
            break;

        case "him":
            //Changes certification to being him
            break;

        case "foryou":
            //Changes certification to foryou page reposter
            break;

        case "quagsire":
            //Changes certification to shiny quagsire
            break;

        case "sigma":
            //Changes certification to being a sigma
            break;

        case "loner":
            //Changes certification to being a loner
            break;
    }

    // Insert name, date, signature input into the HTML after everything else is constructed.

}
