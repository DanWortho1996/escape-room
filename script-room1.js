let hasKey = false;

document.getElementById('key').onclick = () => {
  hasKey = true;
  document.getElementById('key').style.display = 'none';
  document.getElementById('message').textContent = "You picked up the key!";
};

document.getElementById('door').onclick = () => {
  if (hasKey) {
    alert("You unlocked the door and escaped!");
    window.location.href = "index.html"; // go back to mission select
  } else {
    document.getElementById('message').textContent = "It's locked. Find the key.";
  }
};

function goBack() {
  window.location.href = "index.html";
}
