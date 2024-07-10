
    const input = document.querySelector("input");
    const submitButton = document.querySelector(".url button");
    const errorBox = document.querySelector(".error");
    const result = document.querySelector(".link")
    const resultbox = document.querySelector(".result")

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        if (input.value.trim() === "") {
            errorBox.innerHTML = "* Please enter a link";
        } else {
            errorBox.innerHTML = ""; // Clear error message if input is valid
            shortURL(input.value);
        }
    });

    async function shortURL() {
        const Url = input.value;
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
        if (response.ok) {
            const data = await response.text();
            resultbox.style.display = "flex"
            result.innerHTML = `
            <a href="${data }" target="_blank">${data}</a>`;
        }
        else{
           errorBox.innerHTML = "Error shortening"
        }
    
    }