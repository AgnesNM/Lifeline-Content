const seeMenu = () => {
    document.querySelector('.icon').addEventListener('click', function () {
        let x = document.querySelector('#link-wrapper');
        if (x.className === 'nav-list'){
            x.className += ' responsive';
        } else {
            x.className = 'nav-list';
        }
    });
};

seeMenu();