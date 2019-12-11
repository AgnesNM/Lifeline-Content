const menuIcon = () => {
    document.querySelector('.icon').addEventListener('click', function () {
        let seeMenu = document.querySelector('.nav-list');
        if (seeMenu.className === "nav-list") {
            seeMenu.className += " responsive";
        } else {
            seeMenu.className = "nav-list";
        }
    });
}

menuIcon();