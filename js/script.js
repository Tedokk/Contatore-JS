function createCounterApp() {

    const container = document.getElementById('counter-container');
    
    const counterDiv = document.createElement('div');
    counterDiv.classList.add('counter');
    counterDiv.textContent = '0'; 
    container.appendChild(counterDiv);

    const incrementButton = document.createElement('button');
    incrementButton.classList.add('button');
    incrementButton.textContent = '+';
    container.appendChild(incrementButton);

    const resetButton = document.createElement('button');
    resetButton.classList.add('button');
    resetButton.textContent = 'Reset';  
    container.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
    });

    const decrementButton = document.createElement('button');
    decrementButton.classList.add('button');
    decrementButton.textContent = '-';
    container.appendChild(decrementButton);

    let counterValue = 0;

    function updateCounter() {
        counterDiv.textContent = counterValue;
    }

    incrementButton.addEventListener('click', () => {
        counterValue++;
        updateCounter();
    });

    decrementButton.addEventListener('click', () => {
        counterValue--;
        updateCounter();
    });
}

createCounterApp();