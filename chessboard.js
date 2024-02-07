let chessContainer = document.getElementById("chessContainer");

        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 8; j++) {
                const box = document.createElement("div");
                box.classList.add("cell");
                if ((i + j) % 2 === 0) {
                    box.classList.add("white");
                } else {
                    box.classList.add("black");
                }
                chessContainer.appendChild(box);
            }
        }