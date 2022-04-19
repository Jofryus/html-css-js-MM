const cnv = document.getElementById("viewChart");
const ctx = cnv.getContext("2d");

const viewChart = new Chart(ctx,{
    type:"bar",
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
            label: "Visitas",
            data: [100,200,140,180,300,259,390,325,134,522,214,523],
            backgroundColor: ["#1535", "#2565", "#3535", "#4565", "#5535", "#6565", "#7535", "#8565", "#9535", "#2165", "#2235", "#236"],
            borderColor: ["#151", "#251", "#351", "#451", "#551", "#651", "#751", "#851", "#951", "#211", "#221", "#231"],
            borderWidht: 1
        }]
    } , 
    options: {
        scale: {
            y: {beginAtZero: true}
        }
    }
})