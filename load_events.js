addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
});

addEventListener('beforeunload', (event) => {
    // show the confirmation dialog
    event.preventDefault();
    // Google Chrome requires returnValue to be set.
    event.returnValue = '';
});