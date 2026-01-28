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
if (imgEl && user.userImage) {
  imgEl.src = user.userImage;
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

// Amount Currency
document.querySelectorAll(".left-money-name").forEach(el => {
  el.innerText = user.amountType.left.toLocaleString();
});
document.querySelectorAll(".middle-money-name").forEach(el => {
  el.innerText = user.amountType.middle.toLocaleString();
});
document.querySelectorAll(".right-money-name").forEach(el => {
  el.innerText = user.amountType.right.toLocaleString();
});


// Amount Currency logo
const currencyLogoRight = document.getElementById("currencyright");
const currencyLogoMiddle = document.getElementById("currencymiddle");
const currencyLogoLeft = document.getElementById("currencyleft");
if (currencyLogoRight && user.image) {
  currencyLogoRight.src = user.image.right;
}
if (currencyLogoMiddle && user.image) {
  currencyLogoMiddle.src = user.image.middle;
}
if (currencyLogoLeft && user.image) {
  currencyLogoLeft.src = user.image.left;
}

// plan logo
const planLogo = document.getElementById("planlogo");
  planLogo.src = user.userPlanlogo;


// plan Name
document.querySelectorAll(".planname").forEach(el => {
  el.innerText = user.userPlanName.toLocaleString();
});

// Saving Type/  Risk Level/ Expected Returns
document.querySelectorAll(".period").forEach(el => {
  el.innerText = user.planDetails.period.toLocaleString();
});
document.querySelectorAll(".risk").forEach(el => {
  el.innerText = user.planDetails.risk.toLocaleString();
});
document.querySelectorAll(".returns").forEach(el => {
  el.innerText = user.planDetails.return.toLocaleString();
});



