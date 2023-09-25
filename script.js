const goBackButton = document.querySelector('#goBack');

function goBack() {
    console.log(document.querySelector('body'));
    window.scrollTo(0, 0);
}

goBackButton.addEventListener('click', goBack)