const profile = {
  avatar: "Profile.png",
  subscribeUrl: "mailto:leonsmedia@iflytalent.com",
};

const socials = [
  { label: "Email", href: "mailto:leonsmedia@iflytalent.com", icon: "mail" },
  { label: "TikTok", href: "https://www.tiktok.com/@siliconbrief", icon: "tiktok" },
  { label: "Instagram", href: "https://www.instagram.com/siliconbrief/", icon: "instagram" },
  { label: "X", href: "https://x.com/siliconbrief", icon: "x" },
  { label: "YouTube", href: "https://www.youtube.com/@siliconbrief", icon: "youtube" },
];

const links = [
  { title: "Inquiries", href: "mailto:leonsmedia@iflytalent.com", image: "logos/Mail.png?v=7", initials: "IN" },
  { title: "Verdent", href: "https://www.verdent.ai/?id=700917", image: "logos/Verdent.png?v=7", initials: "VE" },
  { title: "Hollyland: Lark A1", href: "https://amzn.to/4bzbjJv", image: "logos/Hollyland.png?v=7", initials: "HL" },
  { title: "Typeless", href: "https://www.typeless.com/?via=leon-sweeting", image: "logos/Typeless.png?v=7", initials: "TY" },
  { title: "CrePal", href: "https://crepal.ai/main", image: "logos/CrePal.png?v=7", initials: "CP" },
  { title: "Trip.com", href: "https://www.trip.com/t/8ebm0xr7mT2", image: "logos/Trip.png?v=7", initials: "TR" },
];

const icons = {
  mail: `
    <svg class="icon-line" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-10 6L2 7"></path>
    </svg>
  `,
  tiktok: `
    <svg class="icon-brand" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
    </svg>
  `,
  youtube: `
    <svg class="icon-brand" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
    </svg>
  `,
  instagram: `
    <svg class="icon-brand" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path>
    </svg>
  `,
  x: `
    <svg class="icon-brand" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"></path>
    </svg>
  `,
  bell: `
    <svg class="icon-solid" viewBox="0 0 448 512" aria-hidden="true">
      <path d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416h400c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 512a64 64 0 0 0 64-64H160a64 64 0 0 0 64 64z"></path>
    </svg>
  `,
  share: `
    <svg class="icon-line" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
      <path d="m16 6-4-4-4 4"></path>
      <path d="M12 2v13"></path>
    </svg>
  `,
};

const avatarSlot = document.querySelector("[data-avatar-placeholder]");
const socialsContainer = document.querySelector("[data-socials]");
const linksContainer = document.querySelector("[data-links]");
const toast = document.querySelector("[data-toast]");

if (profile.avatar) {
  avatarSlot.innerHTML = `<img src="${profile.avatar}" alt="Silicon Brief profile photo">`;
}

socialsContainer.innerHTML = socials
  .map((item) => {
    const content = icons[item.icon] || `<span aria-hidden="true">${item.text}</span>`;
    if (item.action === "share") {
      return `
        <button class="social-link" type="button" data-copy-link aria-label="${item.label}">
          ${content}
        </button>
      `;
    }

    const external = item.href.startsWith("http");
    const target = external ? ` target="_blank" rel="noopener noreferrer"` : "";

    return `
      <a class="social-link" href="${item.href}" aria-label="${item.label}"${target}>
        ${content}
      </a>
    `;
  })
  .join("");

const copyButton = document.querySelector("[data-copy-link]");

linksContainer.innerHTML = links
  .map((item) => {
    const logo = item.image
      ? `<img src="${item.image}" alt="" loading="lazy" decoding="async">`
      : item.icon
        ? icons[item.icon]
      : `<span aria-hidden="true">${item.initials}</span>`;
    const external = item.href.startsWith("http");
    const target = external ? ` target="_blank" rel="noopener noreferrer"` : "";

    return `
      <a class="link-card" href="${item.href}"${target}>
        <span class="logo-slot" data-kind="${item.shape || "square"}">${logo}</span>
        <span class="link-title">${item.title}</span>
      </a>
    `;
  })
  .join("");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      showToast("Link copied");
    } catch {
      showToast(url);
    }
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}
