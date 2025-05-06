const authorizedUsers = [
    { username: "LetsAimZ", password: "twitchowner0305!" }
  ];
  
  function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
  
    const found = authorizedUsers.find(u => u.username === user && u.password === pass);
  
    if (found) {
      location.href = "panel.html";
    } else {
      document.getElementById("loginStatus").innerText = "Falsche Zugangsdaten!";
    }
  }
  
  // Panel-Funktionen
  function startOverlay() {
    document.getElementById("overlayStatus").innerText = "Active";
  }
  
  function stopOverlay() {
    document.getElementById("overlayStatus").innerText = "Inactive";
  }
  
  function changeScene() {
    const scene = document.getElementById("sceneSelect").value;
    document.getElementById("activeScene").innerText = scene;
  }
  
  function startTimer() {
    alert("Timer gestartet!");
  }
  
  function resetTimer() {
    alert("Timer zurückgesetzt!");
  }
  