let ctx = document.getElementById("myChart");
const xValues = ["Yi Sang", "Faust", "Don Quixote", "Ryoshu", "Meursault", "Hong Lu", "Heathcliff", "Ishmael", "Rodion", "Sinclair", "Outis", "Gregor"];
const yValues = [2, 10, 5, 13, 19, 15, 17, 11, 4, 4, 1, 8, 1];
const barColors = ["#d4e1e8", "#ffb1b4", "#ffef23", "#cf0000", "#293b95", "#5bffde", "#4e3076", "#ff9500", "#820000", "#8b9c15", "#325339", "#69350b"];
const myChart = new Chart(ctx, {
    type: 'bar',
    data:{
        label: ['Yi Sang', 'Faust'],
        datasets: [{
            backgroundColors: ['red', 'blue'],
            data: [2, 10],
            borderWidth: 1
        }]
    },
    options:{
        plugins:{
            title:{
                display: true,
                text: "Sinners' Performance by Vote"
            }
        }
    }
    });