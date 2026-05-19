let megoldas = document.querySelectorAll('.megoldas');

function felfed(i) {
    if (megoldas[i].style.display === 'none')
        megoldas[i].style.display = 'block';
    else if (megoldas[i].style.display === 'block')
        megoldas[i].style.display = 'none';
}
