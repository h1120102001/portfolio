const gallery = document.getElementById("gallery");

worksData.forEach(work => {
  const card = document.createElement("a");
  card.className = "work glass link-work";

  if (work.externalLink) {
    card.href = work.externalLink;
    card.target = "_blank";
  } else {
    card.href = `work.html?id=${work.id}`;
  }

  card.innerHTML = `
    <img src="${work.thumbnail}" alt="${work.title}">
    <h3>${work.title}</h3>
    <p>${work.summary}</p>
    <p class="tool">使用ソフト：${work.tool}</p>
  `;

  gallery.appendChild(card);
});