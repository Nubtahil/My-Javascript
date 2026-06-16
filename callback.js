function register(callback) {
  setTimeout(() => {
    console.log("register");
    callback();
  }, 2000);
}
function sendEmail() {
  setTimeout(() => {
    console.log("sendemail");
  }, 3000);
}
function login() {
  setTimeout(() => {
    console.log("login");
  }, 1000);
}
function getUserData() {
  setTimeout(() => {
    console.log("getuserdata");
  }, 1000);
}
function displayUserData() {
  setTimeout(() => {
    console.log("displayuserdata");
  }, 1000);
}
//calling function inside another function
register(function inside_reg() {
  sendEmail(function ss() {
    login();
    getUserData();
    displayUserData();
  });
});

console.log("other work of the app!");

function hi() {
  console.log("hiiii");
}
function bye(callback) {
  console.log("bye");
  callback();
}

//bye chlny ke baad hee hi wla function chlay
//mtlb jub bye ka task complete ho jaye tou hi hi function execute ho
bye(hi);
