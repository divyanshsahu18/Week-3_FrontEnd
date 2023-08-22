function simulateAsyncOperation(callback) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(function () {
      // Simulated operation completed
      const data = { message: "Simulated data from server" };
      callback(data);
    }, 2000); // Simulate a 2-second delay
  }
  
  function handleAsyncResponse(response) {
    console.log("Received data:", response.message);
    // You can perform further actions with the received data here
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const simulateButton = document.getElementById("simulateButton");
    
    simulateButton.addEventListener("click", function () {
      console.log("Simulating async operation...");
      simulateAsyncOperation(handleAsyncResponse);
      console.log("Async operation initiated.");
    });
  });
  