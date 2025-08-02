function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function startLoading() {
  showScreen('loading-screen');
  setTimeout(() => {
    showScreen('game-screen');
  }, 2000);
}

function startMission(number) {
  alert("Mission " + number + " started! (Room coming next)");
}

window.onload = () => {
  showScreen('home-screen');
}
