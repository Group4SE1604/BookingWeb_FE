document.getElementById('btn-down').onclick = function(){
    var element = document.getElementById('ticker');

    var opt = {
        margin: 0,
        filename: 'ticker.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: { scale: 3, width: 1440, height: 600, dpi: 300 },
        jsPDF: {unit: 'in', format: 'A2', orientation: 'p'}
    };
    html2pdf(element, opt);
};



// const div = document.querySelector("ticker");
// const btn = document.querySelector("btn");

// btn.addEventListener('click', () => {
//     html2pdf().from(div).save()
// })