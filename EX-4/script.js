const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
        }]
    },
    options:{
        scales: {
        y: { beginAtZero: true }
        }
    }
    });
window.addEventListener("DOMContentLoaded", function(){
    const slides = document.querySelectorAll(".slide");
    let index = 0;
    if (slides.length < 2){
        return;
    }
    setInterval(function(){
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 1500);
});