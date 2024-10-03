const musclyMen = document.getElementById('muscle');

musclyMen.addEventListener('mouseover', () => {
    document.body.style.backgroundImage = "url('assets/kiryu_nishiki.jpg')";
    // document.body.style.color = 'black';
})

musclyMen.addEventListener('mouseout', () => {
    document.body.style.backgroundImage = "url('assets/kamurocho_street_night.jpg')"
})
