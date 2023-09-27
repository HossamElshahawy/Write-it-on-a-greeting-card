document.getElementById("name").addEventListener("input", function () {
    const name = this.value;


    // Get the default image and create a new image element
    const defaultImage = document.getElementById("outputImage");
    const newImage = new Image();

    // When the new image is loaded, add the user's name to it
    newImage.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set the canvas dimensions to match the image
        canvas.width = newImage.width;
        canvas.height = newImage.height;

        // Draw the image on the canvas
        ctx.drawImage(newImage, 0, 0);

        // Style the text
        ctx.font = "50px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";

        // Position the text in the center of the canvas
        const textX = canvas.width / 3;
        const textY = canvas.height / 1;

        // Add the user's name to the canvas
        ctx.fillText(name, textX, textY);

        // Replace the default image with the updated canvas
        defaultImage.src = canvas.toDataURL();

        // Show the download link and update its href attribute
        const downloadLink = document.getElementById("downloadLink");
        downloadLink.style.display = "block";
        downloadLink.href = canvas.toDataURL("image/jpeg");
    };

    // Set the source of the new image
    newImage.src = "images/بطاقات-تهنئة-العيد-الوطني-السعودي-92.jpg";
});
