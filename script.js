// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
    // Toggle the visibility of the "Contact Us" button in mobile view
    const contactButton = document.querySelector('.cs-nav-button');
    contactButton.classList.toggle('cs-active');
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('#faq-1261 .cs-faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.cs-button');
        button.addEventListener('click', () => {
            item.classList.toggle('active');
            // Scroll into view within the FAQ box when an item is expanded
            if (item.classList.contains('active')) {
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    
});
