const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const work = worksData.find(w => w.id === id);
const container = document.getElementById("work-detail");

if (work) {
  document.title = `${work.title} | Hiroto Onoue Portfolio`;

  // 画像が複数(images配列)あればそれを使い、なければthumbnail1枚を使う
  const imageList = work.images && work.images.length > 0
    ? work.images
    : [work.thumbnail];

  const imagesHTML = imageList
    .map(src => `<img src="${src}" alt="${work.title}" class="detail-img">`)
    .join("");

  container.innerHTML = `
    <h2>${work.title}</h2>
    <div class="detail-image-gallery">${imagesHTML}</div>
    <p class="tool">使用ソフト：${work.tool}</p>
    <div class="detail-description">${work.description}</div>
  `;
} else {
  container.innerHTML = `<p>作品が見つかりませんでした。</p>`;
}