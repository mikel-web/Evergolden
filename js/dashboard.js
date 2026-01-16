const user = getLoggedInUser();

// Name
document.querySelectorAll(".user-name").forEach(el => {
  el.innerText = user.name;
});

// UserName
document.querySelectorAll(".username").forEach(el => {
  el.innerText = user.username;
});

// Profile image
const imgEl = document.getElementById("userImage");
if (imgEl && user.image) {
  imgEl.src = user.image;
}

// Balances
document.querySelectorAll(".btc-balance").forEach(el => {
  el.innerText = "$" + user.balances.btc.toLocaleString();
});
document.querySelectorAll(".eth-balance").forEach(el => {
  el.innerText = "$" + user.balances.eth.toLocaleString();
});
document.querySelectorAll(".visa-balance").forEach(el => {
  el.innerText = "$" + user.balances.visa.toLocaleString();
});

// Amount Types
document.querySelectorAll(".left-money-name").forEach(el => {
  el.innerText = user.amountType.left.toLocaleString();
});
document.querySelectorAll(".middle-money-name").forEach(el => {
  el.innerText = user.amountType.middle.toLocaleString();
});
document.querySelectorAll(".right-money-name").forEach(el => {
  el.innerText = user.amountType.right.toLocaleString();
});




