document.getElementById("ldt_form").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("ldt_email").value.trim();
  let pass = document.getElementById("ldt_password").value.trim();
  let check = document.getElementById("ldt_check").checked;

  if (email === "" || pass === "") {
    alert("nhap du email va pass");
    return;
  }

  if (!check) {
    alert("chua check");
    return;
  }

  alert("dang nhap thanh cong!");
});
