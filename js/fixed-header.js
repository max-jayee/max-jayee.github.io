const href = [`/`];
const headerNav = [`<a href="${href.join("")}">맥쓰네 블로그</a> `];

for (const pathname of window.location.pathname.split(`/`)) {
  if (pathname === ``) continue;
  href.push(`${pathname}/`);
  const element = pathname
    .split(`_`)
    .map(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(` `);
  headerNav.push(`> <a href="${href.join("")}">${element}</a> `);
}

document.getElementById(`fixed-header-id`).innerHTML = headerNav.join(``);
