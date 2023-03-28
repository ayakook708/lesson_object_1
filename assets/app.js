(() => {
    const $dom = document;
    const $tab = $dom.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    // 初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    // クリックしたら起こるイベント
    const clickHandler = (e) => {
        e.preventDefault();
        for (let i = 0; i < $nav.length; i++) {
            $nav[i].classList.remove('is-active');
            $content[i].style.display = 'none';
        }
        const navNumber = Number(e.target.dataset.nav);
        e.target.classList.add('is-active');
        $content[navNumber].style.display = 'block';
        // console.log(e);
    };

    $dom.addEventListener('click', (e) => {
        clickHandler(e);
    });

    // console.log($content);
})();
