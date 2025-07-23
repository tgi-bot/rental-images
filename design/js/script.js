function renderNewGames(games) {
    const container = document.getElementById("new_game_list_items");
    if (!container || !Array.isArray(games)) return;

    container.innerHTML = "";
    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game_item";

        const RentalId = game.RentalId || game.id || game.appid || ""; // имя поля может отличаться
        const img = document.createElement("img");
        img.src = "images/" + RentalId + "/header.jpg";
        img.alt = game.name || game.Title || "";
        card.appendChild(img);

        const title = document.createElement("div");
        title.className = "game_title";
        title.textContent = game.name || game.Title || "";
        card.appendChild(title);

        container.appendChild(card);
    });
}
