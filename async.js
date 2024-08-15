async function coba() {
  return 10;
}

coba().then((resolve) => {
  console.log(resolve);
});

function myprom() {
  console.log("I am resolved now!");
}

async function promExample() {
  let resolved = await myprom();
  console.log(resolved);
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  // console.log('calling');
  const result = await resolveAfter2Seconds();
  // console.log(result);
  // Expected output: "resolved"
}

asyncCall();

// 1. buat fungsi login (username, password)

let user = {
  username: "Nadyne",
  pass: "123",
  adaOrang: true,
};

async function login(username, password) {
  if (username == user.username) {
    if (password == user.pass) {
      return "Halaman Selamat Datang";
    } else {
        throw new error("Password salah!");
    }
  } else {
    throw new error("USERNAME NOT FOUND");
  }
}

login("Nadyne", "123");

async function cekAkun(){
    try {
        // const login =
    } catch (error) {
        
    }
}



async function test(s){
  try {
    luasP = s*s;
  } catch (error) {
    console.log("error bok", error);
    
  }
}
test(10)
async function kel(s){
  try {
    keliling = 4*s;
  } catch (error) {
    console.log("error bok", error);
    
  }
}
kel(5)

async function test(s){
  let coba = await kel();
  console.log(coba);
  
}