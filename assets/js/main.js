let form = document.querySelector(".form-register");
let btn = document.querySelector(".bttn");
let info = [
  document.querySelector("#first-name"),
  document.querySelector("#last-name"),
  document.querySelector("#stdnb"),
  document.querySelector("#Birth"),
  document.querySelector("#stmail"),
  document.querySelector("#stphone"),
  document.querySelector("#Degree"),
  document.querySelector("#Level"),
  document.querySelector("#staddress"),
  document.querySelector("#stcity"),
  document.querySelector("#stzip"),
  document.querySelector("#stcountry"),
];

let isValidMail = (mail) => {
  let = emailCondition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailCondition.test(mail)) {
    return true;
  }
  return false;
};

let isValidPhone = (phone) => {
  var phoneRegex = /^\d{10}$/;
  var numericPhoneNumber = phone.replace(/\D/g, "");

  if (phoneRegex.test(numericPhoneNumber)) {
    return true;
  }
  return false;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let is_empty = false;
  info.forEach((input) => {
    if (input.value === "") {
      is_empty = true;
    }
  });

  // check empty inputs
  if (is_empty) {
    alert("All input are requared!");
  } else {
    // check email validation
    let mail = info[4].value;
    if (!isValidMail(mail)) {
      alert("Enter a valid email address");
    } else {
      // check phone number
      let phone = info[5].value;
      if (!isValidPhone(phone)) {
        alert("Enter a valid phone number");
      } else {
        // submit
        btn.classList.toggle("is_active");
        setTimeout(() => {
          window.print();
          form.submit();
          window.open("https://mzilinassim.github.io/register/", "_self");
        }, 700);
      }
    }
  }
});
