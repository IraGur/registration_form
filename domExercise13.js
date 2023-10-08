function validateform() {
   let name = document.myform.username;
   let email = document.myform.email;
   let password = document.myform.password;
   let confirmPassword = document.myform.confirmPassword;
   let isFormValid = true;

   const containers = document.querySelectorAll(".input-container");
   containers.forEach((container) => {
      container.classList.remove("error");
   });

   if (
      !name.value ||
      name.value.length < 5 ||
      name.value.length > 10 ||
      name.value !== name.value.toLowerCase()
   ) {
      name.parentElement.classList.add("error");
      isFormValid = false;
   }

   if (!email.value || !email.value.match(/^\S+@\S+\.\S+$/)) {
      email.parentElement.classList.add("error");
      isFormValid = false;
   }

   if (
      !password.value ||
      password.value.length < 8 ||
      password.value.length > 15
   ) {
      password.parentElement.classList.add("error");
      isFormValid = false;
   }

   if (password.value !== confirmPassword.value) {
      confirmPassword.parentElement.classList.add("error");
      isFormValid = false;
   }

   return isFormValid;
}

myform.addEventListener("submit", (e) => {
   e.preventDefault();
   const isValid = validateform();
   if (isValid) {
      const containers = document.querySelectorAll(".input-container");
      containers.forEach((container) => {
         container.classList.add("success");
      });
   }
});
