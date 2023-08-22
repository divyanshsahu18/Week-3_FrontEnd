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
  
  async function handleAsyncResponse() {
    try {
      console.log("Simulating async operation with async/await...");
      const response = await simulateAsyncOperation();
      console.log("Received data:", response.message);
      // You can perform further actions with the received data here
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const simulateButton = document.getElementById("simulateButton");
    
    simulateButton.addEventListener("click", function () {
      handleAsyncResponse();
      console.log("Async operation initiated.");
    });
  });
  