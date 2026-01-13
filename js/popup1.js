let popup1  = document.getElementById("saving-popup1");
        let popup2  = document.getElementById("saving-popup2");
        let popup3  = document.getElementById("saving-popup3");
        let popup4  = document.getElementById("saving-popup4");
        let popup5  = document.getElementById("saving-popup-withdraw");
        let profilePopup = document.getElementById("profile-popup")

        function openPopup1(){
            popup1.classList.add("open-popup");
        }

        function openPopup2(){
            popup2.classList.add("open-popup");
        }

        function openPopup3(){
            popup3.classList.add("open-popup");
        }

        function openPopup4(){
            popup4.classList.add("open-popup");
        }

        function closePopup1(){
            popup1.classList.remove("open-popup");
        }

        function closePopup2(){
            popup2.classList.remove("open-popup");
        }

        function closePopup3(){
            popup3.classList.remove("open-popup");
        }

        function closePopup4(){
            popup4.classList.remove("open-popup");
        }

        function profilepopup(){
          profilePopup.classList.add("open-profile")
        }

function closeprofilepopup(){
            profilePopup.classList.remove("open-profile");
        }


        
        function withdraw(){
            popup5.classList.add("open-popup");
        }
        function closewithdraw(){
            popup5.classList.remove("open-popup");
        }


                function error(){
            window.location.href = "error.html";
        }




// DROPDOWN FOR SELECT BANK
const dropdown = document.querySelector(".select-bank-dropdown");
const input = document.getElementById("select-bank-dropdownInput");
const menu = document.getElementById("dropdownMenu");
const selectedValue = document.getElementById("selectedValue");

input.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

menu.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    selectedValue.textContent = item.dataset.value;
    selectedValue.style.color = "#111";
    dropdown.classList.remove("open");
  });
});

/* Close when clicking outside */
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});







