function galeria(image, qtd) {
    var g = document.getElementById("galeria")

    for (i = 1; i <= qtd; i++) {
        g.innerHTML += `
            <div class="galeria">
                <a target="_blanck" href="${image}${i}.jpg">
                <img class="card" src="${image}${i}.jpg">
                </a>
            </div>
                `
    }
}