function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    document.querySelectorAll('#clock span')[0].textContent = hours.toString().padStart(2, '0');
    document.querySelectorAll('#clock span')[1].textContent = minutes.toString().padStart(2, '0');
    document.querySelectorAll('#clock span')[2].textContent = seconds.toString().padStart(2, '0');
  }
  
  function clockStart() {
    setInterval(updateClock, 1000);
  }
  
  clockStart();