function simulateAsyncOperation() {
    return new Promise(function (resolve) {
      // Simulate an asynchronous operation using setTimeout
      setTimeout(function () {
        // Simulated operation completed
        const data = { message: "Simulated data from server" };
        resolve(data);
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  function handleAsyncResponse(response) {
    console.log("Received data:", response.message);
    // You can perform further actions with the received data here
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const simulateButton = document.getElementById("simulateButton");
    
    simulateButton.addEventListener("click", function () {
      console.log("Simulating async operation with Promises...");
      simulateAsyncOperation()
        .then(handleAsyncResponse)
        .catch(function (error) {
          console.error("Error:", error);
        });
      console.log("Async operation initiated.");
    });
  });
  