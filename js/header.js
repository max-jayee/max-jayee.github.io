import "/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js";

const headerNode = document.getElementById("header-div-max");
const titleNode = document.createElement("h1");
const navNode = document.createElement("h5");

const title = `<a href="/">맥쓰네 블로그</a>`;

const href = [`/`];
const nav = [`<a href="${href.join("")}">맥쓰네 블로그</a> `];

for (const pathname of window.location.pathname.split(`/`)) {
  if (pathname === ``) continue;
  href.push(`${pathname}/`);
  const element = pathname
    .split(`_`)
    .map(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(` `);
  nav.push(`> <a href="${href.join("")}">${element}</a> `);
}

titleNode.innerHTML = title;
navNode.innerHTML = nav.join(``);

headerNode.appendChild(titleNode);
headerNode.appendChild(navNode);
