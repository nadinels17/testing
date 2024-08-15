fetch("https://jsonplaceholder.typicode.com/albums");
// .then(cobafet => cobafet.json())
// .then(console.log);

fetch("https://handlers.education.launchcode.org/static/planets.json");
// .then(cobaRes => cobaRes.json())
// .then(console.log);

// Memakai Promise All

let Url = [
  "https://jsonplaceholder.typicode.com/albums",
  "https://handlers.education.launchcode.org/static/planets.json",
  "https://dummyjson.com/recipes",
];
// let request = Url.map((url) => fetch(url));
// Promise.all(request).then((res) =>
//     res.forEach((res) => console.log(`${res.url}: ${res.status}`))
// );
// const fetchPromises = Url.map((url) => fetch(url).then((res) => res.json()));
// Promise.all(fetchPromises)
//   .then((res) => {
//     const responseData = res.map((res) => res);
//     console.log("Fetched data:", responseData);
//   })
//   .catch((error) => console.error("Error fetching data:", error));

// async await untuk API POST

// async function getLogin(user,pass) {
//   const Login = await fetch("https://dummyjson.com/docs/users#users-login",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: "emilys",
//         password: "emilyspass",
//         // expiresInMins: 30, // optional, defaults to 60
//       }),
//     }
//   );
//   if (!Login.ok) {
//     throw new Error(`Login error! Akun: ${Login.status}`);
//   }
//   const data = await Login.json();
// }

// getLogin("emilys", "emilyspass");

let Login = {
  username: "emilys",
  password: "emilyspass",
  expiresInMins: 30, // optional, defaults to 60
};

async function getLogin(user,pass) {
  const response = await fetch("https://dummyjson.com/docs/users#users-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(function Cari() {
      if (user === Login.username) {
        if (pass === Login.password) {
          return `Selamat Datang ${Login.username}`;
        } else {
          return "PASSWORD SALAH!!";
        }
      } else {
        return "USERNAME SALAH";
      }
    }),
  });
  if (!response.ok) {
    throw new Error(`Login error! Akun: ${response.status}`);
  }
  const data = await response.json();
}

// getLogin("emilys", "emilyspass");

async function getLogin() {
  let cekLogin = {
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30, // optional, defaults to 60
  };
  try {
    const Login = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cekLogin),
    });
    let response = await Login.json();
    if (!Login.ok) {
      throw new Error(`error login status: ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.log(error, "error");
  }
}

getLogin();




