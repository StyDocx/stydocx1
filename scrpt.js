function changeTab(tabIndex) {
    // Hide all tab panels
    const allPanels = document.querySelectorAll('.tab-panel');
    allPanels.forEach(panel => panel.classList.remove('active'));
    
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected tab panel
    document.querySelectorAll('.tab-panel')[tabIndex].classList.add('active');
    
    // Highlight the selected tab
    document.querySelectorAll('.tab')[tabIndex].classList.add('active');
}

function runCode(questionIndex) {
    const code = document.getElementById(`code-editor-${questionIndex + 1}`).value;
    const outputElement = document.getElementById(`output-${questionIndex + 1}`);

    try {
        // Here we will use Brython to execute the Python code in the browser
        // In production, you would need to use a back-end (like Flask) for code execution
        Brython({debug: 1, ipython: 1});
        outputElement.textContent = '';  // Clear previous output
        
        // Execute the code
        let result = eval(code);
        outputElement.textContent = result;
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
}

