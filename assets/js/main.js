fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(json => {
        const random = json[Math.floor(Math.random() * json.length)];
        document.querySelector('.image').src = random.flags.png;

        const input = document.querySelector(".input");
        document.querySelector('.btn').addEventListener('click', function () {
            if (json.name == input.value) {
                alert("duzgundur")
            }
            else {
                alert("Ölkə adı düzgün deyil!");
            }
        }
        )
    })