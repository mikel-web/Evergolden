document.addEventListener("DOMContentLoaded", () => {

protectPage();
const user = getLoggedInUser();

if (!user) {
  console.error("No logged in user");
}
// Name
document.querySelectorAll(".user-name").forEach(el => {
  el.innerText = user.name;
});

// UserName
document.querySelectorAll(".username").forEach(el => {
  el.innerText = user.username;
});

// RETIREMENT NEXT OF KIN
document.querySelectorAll(".NOK").forEach(el => {
  el.innerText = user.nok;
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

// Personal Details
document.querySelectorAll(".age").forEach(el => {
  el.innerText = user.personalDetails.age.toLocaleString();
});
document.querySelectorAll(".gender").forEach(el => {
  el.innerText = user.personalDetails.gender.toLocaleString();
});
document.querySelectorAll(".nationality").forEach(el => {
  el.innerText = user.personalDetails.nationality.toLocaleString();
});
document.querySelectorAll(".address").forEach(el => {
  el.innerText = user.personalDetails.address.toLocaleString();
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
const planLogo1 = document.getElementById("planlogo1");
const planLogo2 = document.getElementById("planlogo2");
  planLogo1.src = user.userPlanlogo;
  planLogo2.src = user.userPlanlogo;


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



  if (!user) {
    console.error("No logged in user");
    return;
  }

  console.log("User:", user);

  const retirementForm = document.getElementById("retirementForm");
  const childForm = document.getElementById("childForm");

  if (retirementForm && childForm) {

    retirementForm.classList.add("hidden");
    childForm.classList.add("hidden");

    console.log("Plan:", user.plan);

    if (user.plan === "retirement") {
      retirementForm.classList.remove("hidden");
    }

    if (user.plan === "childMarriage") {
      childForm.classList.remove("hidden");
    }

  }




  });




