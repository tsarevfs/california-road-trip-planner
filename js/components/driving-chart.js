let chartInstance = null;

/**
 * Initializes the driving intensity chart using Chart.js.
 * @param {Array} tripData - The trip details array.
 */
export function initDrivingChart(tripData) {
    const canvas = document.getElementById('drivingChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const drives = tripData.map(d => {
        let sum = 0;
        d.sequence.forEach(s => { if (s.dist) sum += s.dist; });
        return sum;
    });
    
    // Extract date labels. In EN: "Wed, Aug 19" -> "Aug 19". In RU: "Ср, 19 авг" -> "19 авг".
    const labels = tripData.map(d => {
        const parts = d.date.split(',');
        return parts.length > 1 ? parts[1].trim() : d.date;
    });

    // Ensure Chart.js library is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded.');
        return;
    }

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: drives,
                backgroundColor: '#556b2f',
                borderRadius: 12,
                hoverBackgroundColor: '#2d3436'
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { 
                    beginAtZero: true, 
                    grid: { color: '#f5f5f5', drawBorder: false }, 
                    ticks: { font: { size: 10, weight: 'bold' }, color: '#a8a29e' } 
                },
                x: { 
                    grid: { display: false }, 
                    ticks: { font: { size: 9, weight: 'bold' }, color: '#a8a29e' } 
                }
            }
        }
    });

    return chartInstance;
}
