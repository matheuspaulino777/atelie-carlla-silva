function abrirWhatsApp(produto) {
    const numero = "55119940053034"; // Seu número com código do país e DDD (11)
    const mensagem = `Olá, quero comprar o produto: ${produto}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
