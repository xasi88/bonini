// Векторные рисунки: знак кафе и рисунки блюд для пустых экранов и блюд без фото.
// Цвета из брендбука (docs/Брендбук Bonini.md). Знак повторяет логотип кафе: буквы BB и лента с именем.

(function () {
  const svg = (body, label) => `<svg viewBox="0 0 64 64" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"'}>${body}</svg>`;
  const bun = "#E8902A", sesame = "#FFE7B0", leaf = "#6DB33F", meat = "#5B2E14", cheese = "#FFC928", coal = "#141210", red = "#DE2923", rice = "#FFF8EC", salmon = "#F26B3A";

  // Знак Bonini: красный круг, белые буквы BB с засечками, поперёк лента «BONINI BURGER», как на логотипе кафе.
  window.LOGO = `<svg viewBox="0 0 120 120" role="img" aria-label="Знак Bonini Burger">
    <circle cx="60" cy="60" r="60" fill="#C8101E"/>
    <text x="60" y="87" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-weight="700" font-size="68" fill="#fff" textLength="86" lengthAdjust="spacingAndGlyphs">BB</text>
    <rect x="12" y="53" width="96" height="15" fill="#C8101E"/>
    <text x="60" y="64.6" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-weight="700" font-size="10.5" fill="#fff" textLength="82" lengthAdjust="spacingAndGlyphs">BONINI BURGER</text>
  </svg>`;

  // Чашка (кофе, чай) и стакан с трубочкой (холодные напитки): цвет напитка свой у каждого раздела
  const cup = (drink) => svg(`<path d="M12 24h32v14c0 9-7 16-16 16s-16-7-16-16z" fill="#F4EDE4"/><path d="M44 28h4a7 7 0 010 14h-5" fill="none" stroke="#F4EDE4" stroke-width="4"/><ellipse cx="28" cy="24" rx="16" ry="4" fill="${drink}"/><path d="M6 57h44" stroke="#C9A46A" stroke-width="4" stroke-linecap="round"/><path d="M22 8c-3 4 3 6 0 10M32 8c-3 4 3 6 0 10" fill="none" stroke="#C9A46A" stroke-width="2.5" stroke-linecap="round"/>`);
  const glass = (drink) => svg(`<path d="M18 12h28l-4 44H22z" fill="rgba(244,237,228,0.16)" stroke="#F4EDE4" stroke-width="2.5" stroke-linejoin="round"/><path d="M20.6 26h22.8l-2.5 28H23.1z" fill="${drink}"/><rect x="24" y="30" width="7" height="7" rx="1.5" fill="#F4EDE4" opacity="0.7"/><rect x="33" y="37" width="7" height="7" rx="1.5" fill="#F4EDE4" opacity="0.7"/><path d="M41 4l-6 30" stroke="#C8101E" stroke-width="3" stroke-linecap="round"/>`);

  window.ICONS = {
    coffee: cup("#6B3A1E"),
    tea: cup("#B8641B"),
    glass: glass("#8A4B22"),
    mojito: glass("#A9CF5E"),
    smoothie: glass("#E07A8F"),
    shake: glass("#EED9B8"),
    fresh: glass("#F2A33A"),
    burger: svg(`<path d="M10 30c0-11 10-18 22-18s22 7 22 18z" fill="${bun}"/><g fill="${sesame}"><ellipse cx="24" cy="20" rx="2.4" ry="1.4"/><ellipse cx="33" cy="17" rx="2.4" ry="1.4"/><ellipse cx="42" cy="21" rx="2.4" ry="1.4"/></g><path d="M8 31h48l-4 5-5-3-5 3-5-3-5 3-5-3-5 3-5-3-5 3z" fill="${leaf}"/><path d="M11 35h42l-8 6-6-4-6 4z" fill="${cheese}"/><rect x="10" y="37" width="44" height="9" rx="4.5" fill="${meat}"/><path d="M11 49h42c0 5-4 8-9 8H20c-5 0-9-3-9-8z" fill="${bun}"/>`),
    hotdog: svg(`<rect x="6" y="26" width="52" height="14" rx="7" fill="${bun}"/><rect x="4" y="28" width="56" height="9" rx="4.5" fill="#B5462A"/><path d="M10 31c4-3 6 3 10 0s6 3 10 0 6 3 10 0 6 3 10 0 4 2 6 0" fill="none" stroke="${cheese}" stroke-width="2.4" stroke-linecap="round"/><path d="M8 38h48c0 5-4 9-10 9H18c-6 0-10-4-10-9z" fill="${bun}"/>`),
    wrap: svg(`<path d="M18 10l30 8-8 40-30-8z" fill="#F3E0B5"/><path d="M18 10l30 8-3 14-30-8z" fill="${leaf}"/><path d="M15 24l30 8-2 8-30-8z" fill="#B5462A"/><path d="M10 50l30 8 8-40" fill="none" stroke="#D9B776" stroke-width="2"/>`),
    pizza: svg(`<circle cx="32" cy="32" r="26" fill="#E8902A"/><circle cx="32" cy="32" r="21" fill="${cheese}"/><g fill="${red}"><circle cx="24" cy="24" r="4"/><circle cx="40" cy="22" r="4"/><circle cx="38" cy="39" r="4"/><circle cx="23" cy="40" r="4"/></g><g fill="${leaf}"><circle cx="32" cy="31" r="2"/><circle cx="46" cy="31" r="1.6"/><circle cx="31" cy="46" r="1.6"/></g>`),
    roll: svg(`<rect x="6" y="40" width="52" height="8" rx="3" fill="${coal}"/><g><circle cx="20" cy="30" r="11" fill="${coal}"/><circle cx="20" cy="30" r="8.5" fill="${rice}"/><circle cx="20" cy="30" r="4.5" fill="${salmon}"/></g><g><circle cx="44" cy="30" r="11" fill="${coal}"/><circle cx="44" cy="30" r="8.5" fill="${rice}"/><circle cx="44" cy="30" r="4.5" fill="${salmon}"/><circle cx="46" cy="28" r="1.6" fill="${leaf}"/></g>`),
    snack: svg(`<g fill="${cheese}"><rect x="20" y="8" width="5" height="26" rx="2" transform="rotate(-8 22 20)"/><rect x="28" y="6" width="5" height="28" rx="2"/><rect x="36" y="8" width="5" height="26" rx="2" transform="rotate(8 38 20)"/><rect x="24" y="12" width="5" height="24" rx="2" transform="rotate(4 26 24)"/><rect x="32" y="11" width="5" height="24" rx="2" transform="rotate(-4 34 23)"/></g><path d="M14 26h36l-5 32H19z" fill="${red}"/><path d="M14 26h36l-1 6H15z" fill="#B3221B"/>`),
    noodles: svg(`<path d="M12 22h40l-5 34H17z" fill="#FFF8EC"/><path d="M12 22h40l-2 8H14z" fill="#EADFC8"/><path d="M20 22c2-8 4-8 6 0M28 22c2-9 4-9 6 0M36 22c2-8 4-8 6 0" fill="none" stroke="${cheese}" stroke-width="3"/><path d="M40 4l-8 20M48 6l-12 18" stroke="#C08A4A" stroke-width="2.6" stroke-linecap="round"/>`),
    plate: svg(`<ellipse cx="32" cy="38" rx="28" ry="16" fill="#E9EDF1"/><ellipse cx="32" cy="36" rx="22" ry="11" fill="#FFFFFF"/><path d="M16 36c4-8 12-10 18-6s10 2 14 4c-2 6-10 9-16 9s-14-2-16-7z" fill="#C97B3A"/><circle cx="24" cy="32" r="3" fill="${leaf}"/><circle cx="42" cy="35" r="3" fill="${red}"/>`),
    salad: svg(`<path d="M8 32h48c0 14-11 24-24 24S8 46 8 32z" fill="${coal}"/><g><circle cx="20" cy="28" r="8" fill="${leaf}"/><circle cx="32" cy="24" r="9" fill="#8CCB55"/><circle cx="44" cy="28" r="8" fill="${leaf}"/><circle cx="26" cy="30" r="4" fill="${red}"/><circle cx="40" cy="30" r="4" fill="${red}"/></g>`),
    combo: svg(`<rect x="6" y="18" width="52" height="34" rx="6" fill="#C9CED4"/><rect x="10" y="22" width="44" height="26" rx="4" fill="#E9EDF1"/><g fill="${cheese}"><rect x="14" y="26" width="4" height="16" rx="2"/><rect x="20" y="25" width="4" height="18" rx="2"/><rect x="26" y="27" width="4" height="15" rx="2"/></g><path d="M34 34c0-6 4-9 8-9s8 3 8 9z" fill="${bun}"/><rect x="33" y="35" width="18" height="4" rx="2" fill="${meat}"/><path d="M34 40h16c0 3-2 4-4 4h-8c-2 0-4-1-4-4z" fill="${bun}"/>`),
  };
})();
