(() => {
    class Accordion {
        constructor(obj) {
            const $dom = document;
            const $elm = $dom.getElementById(obj.hookName);
            const $trigger = $elm.getElementsByTagName('p');
            for (let index = 0; index < $trigger.length; index++) {
                $trigger[index].addEventListener('click', (e) =>
                    this.clickHandler2(e)
                );
            }
        }

        clickHandler2 = (e) => {
            e.preventDefault();
            const $content2 = e.target.nextElementSibling;
            if ($content2.style.display === 'flex') {
                $content2.style.display = 'none';
            } else {
                $content2.style.display = 'flex';
            }
        };
    }
    const tabAccordion = new Accordion({
        hookName: 'js-accordion',
        tagName: 'p',
    });
    const tabAccordion1 = new Accordion({
        hookName: 'js-accordion1',
        tagName: 'p',
    });
    const tabAccordion2 = new Accordion({
        hookName: 'js-accordion2',
        tagName: 'p',
    });
})();
