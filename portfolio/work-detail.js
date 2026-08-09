const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const work = worksData.find(w => w.id === id);
const container = document.getElementById("work-detail");

if (work) {
  document.title = `${work.title} | Hiroto Onoue Portfolio`;
  container.innerHTML = `
    <h2>${work.title}</h2>
    <img src="${work.thumbnail}" alt="${work.title}" class="detail-img">
    <p class="tool">使用ソフト：${work.tool}</p>
    <div class="detail-description">${work.description}</div>
  `;
} else {
  container.innerHTML = `<p>作品が見つかりませんでした。</p>`;
}