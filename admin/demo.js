// Демо-админка без базы (2026-11-07). Владелец пробует менять цены, «Нет в наличии», «Хит», блюда и разделы.
// Правки лежат в браузере этого устройства (Live.DEMO) и ложатся поверх меню, как правки из базы.
// После «да» владельца: в admin/index.html вместо demo.js ставим admin.js и Firebase.

import { createUI } from "./ui.js?v=32869f3a";

const L = window.Live, BASE = window.MENU_DATA;
const baseIds = new Set(BASE.menu.flatMap((g) => g.items.map((it) => it.id)));
const read = () => { try { return JSON.parse(localStorage.getItem(L.DEMO)) || null; } catch (e) { return null; } };
let live = Object.assign({ items: {}, sections: {} }, read() || {});
let admins = ["vladelec@bonini.demo"];

const keep = () => { try { localStorage.setItem(L.DEMO, JSON.stringify(live)); } catch (e) { /* без хранилища правки живут до перезагрузки */ } };
const draw = () => ui.render(L.merge(BASE, live), admins, "vladelec@bonini.demo");
const save = async (fn, note) => { fn(live); keep(); draw(); ui.toast(note || "Сохранено. Откройте меню: правка уже там"); return true; };

const ui = createUI({
  hello: "Демо-админка. Правки сохраняются сразу и видны в меню только на этом устройстве. Кафе и гости их не видят.",
  signOut: () => {
    live = { items: {}, sections: {} };
    keep(); draw();
    ui.toast("Демо сброшено: меню снова как у кафе");
  },
  photos: () => BASE.menu.flatMap((g) => g.items.map((it) => it.photo)).filter(Boolean).concat(BASE.spare || []),
  isAdded: (id) => !!(id && !baseIds.has(id)),
  patch: (id, p) => save((c) => { c.items[id] = Object.assign(c.items[id] || {}, p); }),
  section: (id, hidden) => save((c) => { c.sections[id] = Object.assign(c.sections[id] || {}, { hidden }); }),
  addSection: (title) => save((c) => { c.sections["s" + Date.now().toString(36)] = { title, added: true }; }),
  removeSection: (id) => save((c) => { delete c.sections[id]; }),
  setOrder: (order) => save((c) => { c.order = order; }),
  saveItem: (id, e) => save((c) => {
    const p = {};
    ["name", "desc", "price", "options", "photo", "icon", "hidden", "off", "hit", "discount"].forEach((k) => { p[k] = e[k]; });
    p.options = e.options && e.options.length ? e.options : null;
    p.photo = e.photo || "";
    p.section = e.section;
    const nid = id || "a" + Date.now().toString(36);
    if (!baseIds.has(nid)) p.added = true;
    c.items[nid] = Object.assign(c.items[nid] || {}, p);
  }),
  remove: (id) => save((c) => { delete c.items[id]; }),
  team: (e) => { admins = e; draw(); },
});

draw();
const out = document.getElementById("adOut");
if (out) { out.hidden = false; out.textContent = "Сбросить демо"; }
ui.toast("Демо: правки видны только на этом устройстве");
