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


// ================================
// CURRENCY LOGOS (CLEAN VERSION)
// ================================
if (user.image) {

  document.querySelectorAll(".currency-right").forEach(img => {
    img.src = user.image.right;
  });

  document.querySelectorAll(".currency-middle").forEach(img => {
    img.src = user.image.middle;
  });

  document.querySelectorAll(".currency-left").forEach(img => {
    img.src = user.image.left;
  });

}

// ================================
// PLAN LOGO (CLEAN VERSION)
// ================================
document.querySelectorAll(".plan-logo").forEach(img => {
  if (user.userPlanlogo) img.src = user.userPlanlogo;
});


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




