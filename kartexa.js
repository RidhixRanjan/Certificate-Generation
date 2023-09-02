// Select DOM elements
const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('.photo');
const file = document.querySelector('.file');
const uploadBtn = document.querySelector('.uploadBtn');

// Show the upload button when hovering over the profile picture
imgDiv.addEventListener('mouseenter', function () {
    uploadBtn.style.display = "block";
});

// Hide the upload button when moving the mouse away from the profile picture
imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});

// Handle file input change event
file.addEventListener('change', function () {
    const choosedFile = this.files[0];

    if (choosedFile) {
        // Create a FileReader to read the chosen file
        const reader = new FileReader();

        // When the file is loaded, set the image source to the file's data URL
        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        });

        // Read the file as a data URL
        reader.readAsDataURL(choosedFile);
    }
});

// Function to print the content of the page
function printFunction() {
    var divContents = document.body.innerHTML;
    var prnt = window.open('', '', 'height=500, width=500');
    
    // Write the page content to the print window and trigger the print dialog
    prnt.document.write(divContents);
    prnt.document.close();
    prnt.print();
}
