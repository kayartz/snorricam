/* ============================================================
   Exp 3 — Specialty Shots · SNORRICAM
   Each card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. Edit `id` per card for its own clip.
   Caption types:
     - normal: model + (with camera movement term "term" in prompt)
     - preset: model + ( preset: <preset> )      ← e.g. Higgsfield
   `fail: true` shows a red FAIL marker after the caption.
   ============================================================ */

const YT_ID = "z1ejxFe336k";
const YT_ID1 = "z1ejxFe336k";
const YT_ID2 = "NBHuFukegHY";
const YT_ID3 = "u_5E8W2X6cc";
const YT_ID4 = "nM0QZOKjPYE";
const YT_ID5 = "wJg3WGNAklU";
const YT_ID6 = "FtwnN47-zQs";
// shared link for all boxes

const videos = [
  { title: "CSV SnorricamWord",          model: "Cinematic Studio Video_V1.5", term: "Snorricam",   fail: true,  id: YT_ID1 },
  { title: "Higgsfield DoP Snorricam",   model: "Higgsfield DoP_",             preset: "Snorricam Model",        id: YT_ID2 },
  { title: "Kling2 6 SnorricamWord",     model: "Kling2.6 _General Model",     term: "snorricam",   fail: true,  id: YT_ID3 },
  { title: "Veo 3 1 snorricam",          model: "Veo 3.1 _General Model",      term: " snorricam ", fail: true,  id: YT_ID4 },

  { title: "Seedance1 5 snorricam",      model: "Seedance 1.5 _General Model", term: "snorricam",   fail: true,  id: YT_ID5 },
  { title: "Minimax Hailuo2 3 snorricam", model: "Minimax Hailuo 2.3 _General Model", term: " snorricam ", fail: true, id: YT_ID6 },
];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const failMark = v.fail ? ` <span class="failmark">FAIL</span>` : ``;

  // build the caption: preset style vs camera-movement-term style
  let caption;
  if (v.preset) {
    caption = `${v.model} ( preset: ${v.preset} )${failMark}`;
  } else {
    caption =
      `${v.model}<span class="redhint">(with camera movement term</span> ` +
      `"<span class="term">${v.term}</span>" in prompt )${failMark}`;
  }

  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: ${v.title}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">${caption}</p>
  `;

  grid.appendChild(card);
});
