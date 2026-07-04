function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("rejeted here!!!");
      console.log("register");
    }, 2000);
  });
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

// register()
// .then(login)
// .then(getUserData)

// .catch((err)=>{
//     console.log(err)
// })

//await async
//mne function pe time bhi lgYA HUA H LAKIN M Phir bhi unko time pe hi lena mtlb agar kisi ki 3000 lug rha tou wo end pe aye ga lakin m chti hun phly aye tou bhi promises ko use kiya jata h
//phly register complete ho ga phir us ke next wla completee ho ga
async function auth() {
  await register();
  await login();
}
//since auth() is returning promode so we put then and catch on iit
auth().then(console.log("good")).catch(err)(console.log("bad"));

async function auth() {
  try{ await register();
  await login();
}
catch(err) {
  console.log("badd")
}}