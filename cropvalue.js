function calculateValue() {
    const area = parseFloat(document.getElementById('area').value) || 0;
    const yield_value = parseFloat(document.getElementById('yield').value) || 0;
    const price = parseFloat(document.getElementById('price').value) || 0;
    
    const totalValue = area * yield_value * price;
    
    const resultElement = document.querySelector('.result .value');
    const oldValue = parseFloat(resultElement.textContent.replace('₹', ''));
    
    // Animate the number counting up
    animateValue(resultElement, oldValue, totalValue, 1000);
}

function animateValue(element, start, end, duration) {
    const startTimestamp = performance.now();
    
    const updateNumber = (currentTimestamp) => {
        const elapsed = currentTimestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = start + (end - start) * progress;
        element.textContent = `₹${currentValue.toFixed(2)}`;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    };
    
    requestAnimationFrame(updateNumber);
}

// Add input validation and real-time updates
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }
    });
});

// Add hover effects for buttons
document.querySelector('button').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.02)';
});

document.querySelector('button').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Initialize with sample data
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('area').value = '1.0';
    document.getElementById('yield').value = '2.5';
    document.getElementById('price').value = '20000';
});