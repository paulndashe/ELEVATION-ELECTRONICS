(function () {
  "use strict";

  const API_BASE =
    window.location.protocol === "file:" ||
    (window.location.port && window.location.port !== "5000")
      ? "http://127.0.0.1:5000"
      : "";

  const FALLBACK_CATALOG = [
    {
      id: 1,
      name: "iPhone 18 Pro",
      brand: "Apple",
      category: "Smartphones",
      description:
        "A20 Pro architecture, next-generation Pro camera system, flagship titanium design in Burgundy, Glacier, Black, and Silver.",
      price_zmw: 39999,
      image_url:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-burgundy-202609?wid=1000&hei=1000&fmt=png-alpha",
      stock_quantity: 36,
      availability_status: "Available",
      variants: [
        {
          id: 101,
          color: "Burgundy",
          color_hex: "#5b1929",
          storage: "256GB",
          price_zmw: 39999,
          stock_quantity: 6,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-burgundy-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 102,
          color: "Burgundy",
          color_hex: "#5b1929",
          storage: "512GB",
          price_zmw: 44500,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-burgundy-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 103,
          color: "Glacier",
          color_hex: "#c8d7e6",
          storage: "256GB",
          price_zmw: 39999,
          stock_quantity: 5,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-glacier-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 104,
          color: "Glacier",
          color_hex: "#c8d7e6",
          storage: "512GB",
          price_zmw: 44500,
          stock_quantity: 3,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-glacier-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 105,
          color: "Black",
          color_hex: "#1d2026",
          storage: "256GB",
          price_zmw: 39999,
          stock_quantity: 5,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-black-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 106,
          color: "Black",
          color_hex: "#1d2026",
          storage: "512GB",
          price_zmw: 44500,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-black-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 107,
          color: "Black",
          color_hex: "#1d2026",
          storage: "1TB",
          price_zmw: 49999,
          stock_quantity: 2,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-black-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 108,
          color: "Silver",
          color_hex: "#e3e5e8",
          storage: "256GB",
          price_zmw: 39999,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 109,
          color: "Silver",
          color_hex: "#e3e5e8",
          storage: "512GB",
          price_zmw: 44500,
          stock_quantity: 3,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=1000&hei=1000&fmt=png-alpha",
        },
      ],
    },
    {
      id: 2,
      name: "iPhone 17 Pro",
      brand: "Apple",
      category: "Smartphones",
      description:
        "A19 Pro performance, pro camera system, premium finish, 256GB storage.",
      price_zmw: 34999,
      image_url:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-deepblue-202509?wid=1000&hei=1000&fmt=png-alpha",
      stock_quantity: 19,
      availability_status: "Available",
      variants: [
        {
          id: 201,
          color: "Deep Blue",
          color_hex: "#1a3152",
          storage: "256GB",
          price_zmw: 34999,
          stock_quantity: 7,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-deepblue-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 202,
          color: "Deep Blue",
          color_hex: "#1a3152",
          storage: "512GB",
          price_zmw: 38999,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-deepblue-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 203,
          color: "Cosmic Orange",
          color_hex: "#c8652b",
          storage: "256GB",
          price_zmw: 34999,
          stock_quantity: 5,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-cosmicorange-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 204,
          color: "Cosmic Orange",
          color_hex: "#c8652b",
          storage: "512GB",
          price_zmw: 38999,
          stock_quantity: 3,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-cosmicorange-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
      ],
    },
    {
      id: 3,
      name: "iPhone 17",
      brand: "Apple",
      category: "Smartphones",
      description:
        "Clean white finish, fast everyday performance, bright display, 256GB storage.",
      price_zmw: 23999,
      image_url:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-white-202509?wid=1000&hei=1000&fmt=png-alpha",
      stock_quantity: 32,
      availability_status: "Available",
      variants: [
        {
          id: 301,
          color: "White",
          color_hex: "#f2f4f7",
          storage: "128GB",
          price_zmw: 23999,
          stock_quantity: 6,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-white-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 302,
          color: "White",
          color_hex: "#f2f4f7",
          storage: "256GB",
          price_zmw: 25999,
          stock_quantity: 8,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-white-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 303,
          color: "White",
          color_hex: "#f2f4f7",
          storage: "512GB",
          price_zmw: 29499,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-white-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 304,
          color: "Deep Blue",
          color_hex: "#1a3152",
          storage: "128GB",
          price_zmw: 23999,
          stock_quantity: 5,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-deepblue-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 305,
          color: "Deep Blue",
          color_hex: "#1a3152",
          storage: "256GB",
          price_zmw: 25999,
          stock_quantity: 6,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-deepblue-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 306,
          color: "Deep Blue",
          color_hex: "#1a3152",
          storage: "512GB",
          price_zmw: 29499,
          stock_quantity: 3,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-deepblue-202509?wid=1000&hei=1000&fmt=png-alpha",
        },
      ],
    },
    {
      id: 4,
      name: "iPhone 16",
      brand: "Apple",
      category: "Smartphones",
      description:
        "Ultramarine finish, A18 performance, dual-camera system, 256GB storage.",
      price_zmw: 26500,
      image_url: "assets/images/iphone%2016.jpeg",
      stock_quantity: 15,
      availability_status: "Available",
      variants: [
        {
          id: 401,
          color: "Ultramarine",
          color_hex: "#3b55ce",
          storage: "128GB",
          price_zmw: 26500,
          stock_quantity: 5,
          availability_status: "Available",
          variant_image_url: "assets/images/iphone%2016.jpeg",
        },
        {
          id: 402,
          color: "Ultramarine",
          color_hex: "#3b55ce",
          storage: "256GB",
          price_zmw: 28500,
          stock_quantity: 6,
          availability_status: "Available",
          variant_image_url: "assets/images/iphone%2016.jpeg",
        },
        {
          id: 403,
          color: "Ultramarine",
          color_hex: "#3b55ce",
          storage: "512GB",
          price_zmw: 31900,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url: "assets/images/iphone%2016.jpeg",
        },
      ],
    },
    {
      id: 5,
      name: "MacBook Pro 14",
      brand: "Apple",
      category: "Laptops",
      description:
        "Pro laptop performance, 16GB memory, 512GB SSD, Liquid Retina XDR display.",
      price_zmw: 38900,
      image_url:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=1200&hei=1000&fmt=png-alpha",
      stock_quantity: 6,
      availability_status: "Available",
      variants: [
        {
          id: 501,
          color: "Space Black",
          color_hex: "#26272b",
          ram: "16GB Unified Memory",
          storage: "512GB SSD",
          processor: "Apple M4 Pro",
          price_zmw: 38900,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=1200&hei=1000&fmt=png-alpha",
        },
        {
          id: 502,
          color: "Space Black",
          color_hex: "#26272b",
          ram: "24GB Unified Memory",
          storage: "1TB SSD",
          processor: "Apple M4 Pro",
          price_zmw: 45500,
          stock_quantity: 2,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=1200&hei=1000&fmt=png-alpha",
        },
      ],
    },
    {
      id: 6,
      name: "MacBook Air 13",
      brand: "Apple",
      category: "Laptops",
      description:
        "Thin and light notebook, all-day battery life, 16GB memory, 512GB SSD.",
      price_zmw: 22500,
      image_url:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-midnight-select-202503?wid=1200&hei=1000&fmt=png-alpha",
      stock_quantity: 9,
      availability_status: "Available",
      variants: [
        {
          id: 601,
          color: "Midnight",
          color_hex: "#1e2636",
          ram: "16GB Unified Memory",
          storage: "256GB SSD",
          processor: "Apple M4",
          price_zmw: 22500,
          stock_quantity: 5,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-midnight-select-202503?wid=1200&hei=1000&fmt=png-alpha",
        },
        {
          id: 602,
          color: "Midnight",
          color_hex: "#1e2636",
          ram: "16GB Unified Memory",
          storage: "512GB SSD",
          processor: "Apple M4",
          price_zmw: 24750,
          stock_quantity: 4,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-midnight-select-202503?wid=1200&hei=1000&fmt=png-alpha",
        },
      ],
    },
    {
      id: 7,
      name: "AirPods 2nd Generation",
      brand: "Apple",
      category: "Accessories",
      description:
        "Wireless earbuds with charging case, clear audio, easy Apple pairing.",
      price_zmw: 2450,
      image_url:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MV7N2?wid=1000&hei=1000&fmt=png-alpha",
      stock_quantity: 19,
      availability_status: "Available",
      variants: [
        {
          id: 701,
          color: "White",
          color_hex: "#f5f6f8",
          option_name: "Standard Charging Case",
          price_zmw: 2450,
          stock_quantity: 12,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MV7N2?wid=1000&hei=1000&fmt=png-alpha",
        },
        {
          id: 702,
          color: "White",
          color_hex: "#f5f6f8",
          option_name: "Wireless Charging Case",
          price_zmw: 2950,
          stock_quantity: 7,
          availability_status: "Available",
          variant_image_url:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MV7N2?wid=1000&hei=1000&fmt=png-alpha",
        },
      ],
    },
    {
      id: 8,
      name: "Black AirPods",
      brand: "Apple",
      category: "Accessories",
      description:
        "Matte black wireless earbuds with matching black charging case, clear audio, easy Apple pairing.",
      price_zmw: 2650,
      image_url: "assets/images/black-airpods.png",
      stock_quantity: 16,
      availability_status: "Available",
      variants: [
        {
          id: 801,
          color: "Black",
          color_hex: "#1d2026",
          option_name: "Standard Charging Case",
          price_zmw: 2650,
          stock_quantity: 10,
          availability_status: "Available",
          variant_image_url: "assets/images/black-airpods.png",
        },
        {
          id: 802,
          color: "Black",
          color_hex: "#1d2026",
          option_name: "Wireless Charging Case",
          price_zmw: 3150,
          stock_quantity: 6,
          availability_status: "Available",
          variant_image_url: "assets/images/black-airpods.png",
        },
      ],
    },
  ];

  const EXPANDED_IPHONE_FALLBACK_SPECS = [
    ["iPhone 16 Pro Max", "assets/images/iphones/iphone-16-pro-max.png"],
    ["iPhone 16 Pro", "assets/images/iphones/iphone-16-pro.png"],
    ["iPhone 16 Plus", "assets/images/iphones/iphone-16-plus.png"],
    ["iPhone 15 Pro Max", "assets/images/iphones/iphone-15-pro-max.png"],
    ["iPhone 15 Pro", "assets/images/iphones/iphone-15-pro.png"],
    ["iPhone 15 Plus", "assets/images/iphones/iphone-15-plus.png"],
    ["iPhone 15", "assets/images/iphones/iphone-15.png"],
    ["iPhone 14 Pro Max", "assets/images/iphones/iphone-14-pro-max.png"],
    ["iPhone 14 Pro", "assets/images/iphones/iphone-14-pro.png"],
    ["iPhone 14 Plus", "assets/images/iphones/iphone-14-plus.png"],
    ["iPhone 14", "assets/images/iphones/iphone-14.png"],
    ["iPhone 13 Pro Max", "assets/images/iphones/iphone-13-pro-max.png"],
    ["iPhone 13 Pro", "assets/images/iphones/iphone-13-pro.png"],
    ["iPhone 13", "assets/images/iphones/iphone-13.png"],
    ["iPhone 13 mini", "assets/images/iphones/iphone-13-mini.png"],
    ["iPhone 12 Pro Max", "assets/images/iphones/iphone-12-pro-max.png"],
    ["iPhone 12 Pro", "assets/images/iphones/iphone-12-pro.png"],
    ["iPhone 12", "assets/images/iphones/iphone-12.png"],
    ["iPhone 12 mini", "assets/images/iphones/iphone-12-mini.png"],
    ["iPhone 11 Pro Max", "assets/images/iphones/iphone-11-pro-max.png"],
    ["iPhone 11 Pro", "assets/images/iphones/iphone-11-pro.png"],
    ["iPhone 11", "assets/images/iphones/iphone-11.png"],
    ["iPhone XS Max", "assets/images/iphones/iphone-xs-max.png"],
    ["iPhone XS", "assets/images/iphones/iphone-xs.png"],
    ["iPhone XR", "assets/images/iphones/iphone-xr.png"],
    ["iPhone X", "assets/images/iphones/iphone-x.png"],
    ["iPhone 8 Plus", "assets/images/iphones/iphone-8-plus.png"],
    ["iPhone 8", "assets/images/iphones/iphone-8.png"],
    ["iPhone 7 Plus", "assets/images/iphones/iphone-7-plus.png"],
    ["iPhone 7", "assets/images/iphones/iphone-7.png"],
  ];

  EXPANDED_IPHONE_FALLBACK_SPECS.forEach(([modelName, imgUrl], idx) => {
    const pid = 9 + idx;
    const vid = 900 + idx;
    FALLBACK_CATALOG.push({
      id: pid,
      name: modelName,
      brand: "Apple",
      category: "Smartphones",
      description: `${modelName} model. Administrator-managed pricing, storage configurations, and stock.`,
      price_zmw: 0,
      image_url: imgUrl,
      stock_quantity: 0,
      availability_status: "Out of stock",
      variants: [
        {
          id: vid,
          color: "",
          color_hex: "#94a3b8",
          storage: "",
          option_name: "Standard Configuration",
          price_zmw: 0,
          stock_quantity: 0,
          availability_status: "Out of stock",
          variant_image_url: imgUrl,
        },
      ],
    });
  });

  const state = {
    products: FALLBACK_CATALOG.slice(),
    orders: [],
    settings: {},
    adminAuthenticated: false,
    adminUsername: "",
    activeAdminSection: "overview",
    activeCatalogFilter: "all",
    catalogSearchQuery: "",
    olderPhonesExpanded: false,
    activeOlderSeriesFilter: "all",
    // Purchase modal state
    modalProduct: null,
    modalOrderType: "Buy Now",
    selectedColor: "",
    selectedStorage: "",
    selectedRam: "",
    selectedProcessor: "",
    selectedOption: "",
    selectedVariant: null,
    quantity: 1,
    currentIdempotencyKey: "",
    pendingDeleteProductId: null,
  };

  const COLOR_MAP = {
    burgundy: "#5b1929",
    glacier: "#c8d7e6",
    "glacier blue": "#c8d7e6",
    black: "#1d2026",
    "space black": "#26272b",
    silver: "#e3e5e8",
    white: "#f4f6f8",
    "cloud white": "#f5f6f7",
    "deep blue": "#1a3152",
    blue: "#1778ff",
    "cosmic orange": "#c8652b",
    orange: "#d96b27",
    ultramarine: "#3b55ce",
    midnight: "#1e2636",
    starlight: "#efe6d5",
    gold: "#d7a84d",
  };

  function formatZMW(amount) {
    const num = Number(amount) || 0;
    if (num <= 0) {
      return "Price on request";
    }
    return (
      "K " +
      num.toLocaleString("en-US", {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2,
      })
    );
  }

  function getIphoneSortMeta(productName) {
    const raw = String(productName || "").trim();
    const lower = raw.toLowerCase();
    let seriesNumber = 99;
    let tierRank = 2;

    if (/\biphone\s+xs\s+max\b/i.test(raw)) {
      seriesNumber = 10;
      tierRank = 4;
    } else if (/\biphone\s+xs\b/i.test(raw)) {
      seriesNumber = 10;
      tierRank = 3;
    } else if (/\biphone\s+xr\b/i.test(raw)) {
      seriesNumber = 10;
      tierRank = 2;
    } else if (/\biphone\s+x\b/i.test(raw)) {
      seriesNumber = 10;
      tierRank = 1;
    } else {
      const numMatch = raw.match(/\biphone\s+(\d{1,2})\b/i);
      if (numMatch) {
        seriesNumber = parseInt(numMatch[1], 10);
      }
      if (lower.includes("pro max")) {
        tierRank = 4;
      } else if (lower.includes("pro")) {
        tierRank = 3;
      } else if (lower.includes("plus") || lower.includes("air")) {
        tierRank = 2.5;
      } else if (lower.includes("mini")) {
        tierRank = 1;
      } else {
        tierRank = 2;
      }
    }

    const isOlderIphone = seriesNumber >= 7 && seriesNumber <= 14;
    const sortScore = seriesNumber * 10 + tierRank;
    return { seriesNumber, tierRank, sortScore, isOlderIphone };
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isValidPhone(phoneStr) {
    const cleaned = String(phoneStr || "").trim();
    if (!/^\+?[0-9\s\-()]{7,20}$/.test(cleaned)) return false;
    const digits = cleaned.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  }

  function guessColorHex(colorName, explicitHex) {
    if (explicitHex && /^#[0-9a-fA-F]{3,6}$/.test(explicitHex.trim())) {
      return explicitHex.trim();
    }
    const key = String(colorName || "").trim().toLowerCase();
    return COLOR_MAP[key] || "#94a3b8";
  }

  function syncBodyModalLock() {
    const anyOpen = Array.from(document.querySelectorAll(".modal-backdrop")).some(
      (el) => !el.hidden
    );
    document.body.classList.toggle("modal-open", anyOpen);
  }

  function openModalElement(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove("is-closing");
    modalEl.hidden = false;
    modalEl.setAttribute("aria-hidden", "false");
    syncBodyModalLock();
  }

  function closeModalElement(modalEl) {
    if (!modalEl || modalEl.hidden) return;
    modalEl.classList.add("is-closing");
    setTimeout(() => {
      modalEl.hidden = true;
      modalEl.classList.remove("is-closing");
      modalEl.setAttribute("aria-hidden", "true");
      syncBodyModalLock();
    }, 180);
  }

  async function apiRequest(path, options = {}) {
    const url = API_BASE + path;
    const fetchOpts = {
      credentials: "include",
      headers: {
        ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
        ...(options.headers || {}),
      },
      ...options,
    };
    const response = await fetch(url, fetchOpts);
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || `Request failed (${response.status})`);
    }
    return data;
  }

  // =========================================================================
  // STOREFRONT CATALOG RENDERING
  // =========================================================================

  function getImageClassForCategory(category) {
    if (category === "Smartphones") return "product-phone";
    if (category === "Laptops" || category === "Desktop PCs" || category === "Tablets") {
      return "product-laptop";
    }
    return "product-audio";
  }

  function getStatusBadgeMarkup(product) {
    const totalStock = Number(product.stock_quantity) || 0;
    const status = product.availability_status || "Available";
    if (status === "Unavailable") {
      return '<span class="status unavailable">Unavailable</span>';
    }
    if (status === "Out of stock" || totalStock <= 0) {
      return '<span class="status out-of-stock">Out of stock</span>';
    }
    return '<span class="status in-stock">In stock</span>';
  }

  const INITIAL_SIX_IPHONE_NAMES = [
    "iPhone 18 Pro",
    "iPhone 17 Pro",
    "iPhone 17",
    "iPhone 16 Pro Max",
    "iPhone 16",
    "iPhone 15 Pro Max",
  ];

  function renderProductCard(product) {
    const imgClass = getImageClassForCategory(product.category);
    const statusHtml = getStatusBadgeMarkup(product);
    const isPurchasable = product.availability_status !== "Unavailable";
    const showSwapBtn = product.category !== "Accessories";

    return `
      <article class="product-card product-card-clickable" data-product-id="${product.id}" data-product-name="${escapeHtml(product.name)}">
        <img
          class="${imgClass}"
          src="${escapeHtml(product.image_url)}"
          alt="${escapeHtml(product.name)}"
          loading="lazy"
        >
        <div class="product-info">
          <span class="brand-name">${escapeHtml(product.brand)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.description)}</p>
          <div class="price-row">
            <strong>${formatZMW(product.price_zmw)}</strong>
            ${statusHtml}
          </div>
          <div class="product-actions">
            <a
              class="btn btn-small btn-primary"
              href="#products"
              data-action="buy"
              data-product-id="${product.id}"
              ${!isPurchasable ? 'aria-disabled="true"' : ""}
            >Buy Now</a>
            <a
              class="btn btn-small btn-outline"
              href="#products"
              data-action="order"
              data-product-id="${product.id}"
            >Order</a>
            ${showSwapBtn ? '<a class="btn btn-small btn-muted" href="#swap" data-action="swap">Swap</a>' : ""}
          </div>
        </div>
      </article>
    `;
  }

  function matchesCatalogSearch(product, query) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return true;
    const fields = [
      product.name,
      product.brand,
      product.category,
      product.description,
      ...((product.variants || []).map((v) => `${v.color || ""} ${v.option_name || ""} ${v.storage || ""}`)),
    ]
      .join(" ")
      .toLowerCase();
    return fields.includes(q);
  }

  function renderStorefrontCatalog() {
    const phonesGrid = document.getElementById("grid-phones");
    const olderPhonesGrid = document.getElementById("grid-older-phones");
    const pcsGrid = document.getElementById("grid-pcs");
    const accessoriesGrid = document.getElementById("grid-accessories");
    if (!phonesGrid || !pcsGrid || !accessoriesGrid) return;

    const searchFiltered = state.products.filter((p) =>
      matchesCatalogSearch(p, state.catalogSearchQuery)
    );

    const allPhones = searchFiltered
      .filter((p) => p.category === "Smartphones")
      .slice()
      .sort((a, b) => getIphoneSortMeta(b.name).sortScore - getIphoneSortMeta(a.name).sortScore);

    // Select a balanced initial 6 across iPhone 18, 17, 16, and 15 series
    const initialSix = [];
    const initialSixIds = new Set();

    INITIAL_SIX_IPHONE_NAMES.forEach((targetName) => {
      const match = allPhones.find(
        (p) =>
          !initialSixIds.has(p.id) &&
          String(p.name).trim().toLowerCase() === targetName.toLowerCase()
      );
      if (match && initialSix.length < 6) {
        initialSix.push(match);
        initialSixIds.add(match.id);
      }
    });

    for (const p of allPhones) {
      if (initialSix.length >= 6) break;
      if (!initialSixIds.has(p.id)) {
        initialSix.push(p);
        initialSixIds.add(p.id);
      }
    }

    initialSix.sort(
      (a, b) => getIphoneSortMeta(b.name).sortScore - getIphoneSortMeta(a.name).sortScore
    );

    // Remaining iPhones (additional 15-18 models + all 7-14 models, sorted descending, zero duplicates)
    const remainingPhones = allPhones.filter((p) => !initialSixIds.has(p.id));

    const pcs = searchFiltered.filter(
      (p) => p.category === "Laptops" || p.category === "Desktop PCs" || p.category === "Tablets"
    );
    const accessories = searchFiltered.filter((p) => p.category === "Accessories");

    const countPhones = document.getElementById("count-phones");
    const countPcs = document.getElementById("count-pcs");
    const countAcc = document.getElementById("count-accessories");

    const shownPhoneCount = state.olderPhonesExpanded
      ? allPhones.length
      : initialSix.length;
    if (countPhones) {
      countPhones.textContent = `${shownPhoneCount} ${shownPhoneCount === 1 ? "item" : "items"}`;
    }
    if (countPcs) countPcs.textContent = `${pcs.length} ${pcs.length === 1 ? "item" : "items"}`;
    if (countAcc) countAcc.textContent = `${accessories.length} ${accessories.length === 1 ? "item" : "items"}`;

    phonesGrid.innerHTML = initialSix.length
      ? initialSix.map(renderProductCard).join("")
      : `<div class="empty-catalog-state">No smartphones match your current filter.</div>`;

    if (olderPhonesGrid) {
      olderPhonesGrid.innerHTML = remainingPhones.length
        ? remainingPhones.map(renderProductCard).join("")
        : "";
    }

    const discoverWrap = document.getElementById("discover-more-phones-wrap");
    if (discoverWrap) {
      discoverWrap.hidden = remainingPhones.length === 0;
    }

    const hasSearchQuery = String(state.catalogSearchQuery || "").trim().length > 0;
    const shouldShowOlder =
      state.olderPhonesExpanded || (hasSearchQuery && remainingPhones.length > 0);
    syncOlderPhonesVisibility(shouldShowOlder, false);

    pcsGrid.innerHTML = pcs.length
      ? pcs.map(renderProductCard).join("")
      : `<div class="empty-catalog-state">No laptops or desktop PCs match your current filter.</div>`;

    accessoriesGrid.innerHTML = accessories.length
      ? accessories.map(renderProductCard).join("")
      : `<div class="empty-catalog-state">No accessories match your current filter.</div>`;

    applyStorefrontCategoryFilter(state.activeCatalogFilter);
  }

  function syncOlderPhonesVisibility(expanded, animateCollapse = false) {
    const olderSection = document.getElementById("older-phones-collection");
    const discoverBtn = document.getElementById("discover-more-phones-btn");
    const countPhones = document.getElementById("count-phones");
    if (!olderSection || !discoverBtn) return;

    discoverBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    discoverBtn.textContent = expanded ? "Show Less" : "Discover More Phones";

    if (countPhones) {
      const allCount = state.products.filter(
        (p) => p.category === "Smartphones" && matchesCatalogSearch(p, state.catalogSearchQuery)
      ).length;
      const shown = expanded ? allCount : Math.min(6, allCount);
      countPhones.textContent = `${shown} ${shown === 1 ? "item" : "items"}`;
    }

    if (expanded) {
      olderSection.classList.remove("is-collapsing");
      olderSection.hidden = false;
    } else if (animateCollapse && !olderSection.hidden) {
      olderSection.classList.add("is-collapsing");
      setTimeout(() => {
        olderSection.hidden = true;
        olderSection.classList.remove("is-collapsing");
      }, 200);
    } else {
      olderSection.classList.remove("is-collapsing");
      olderSection.hidden = true;
    }
  }

  function applyStorefrontCategoryFilter(filterVal) {
    state.activeCatalogFilter = filterVal;
    document.querySelectorAll(".catalog-filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.category === filterVal);
    });

    document.querySelectorAll(".catalog-category-block").forEach((block) => {
      const secCat = block.dataset.sectionCategory;
      block.hidden = !(filterVal === "all" || secCat === filterVal);
    });
  }

  async function loadPublicStorefront() {
    try {
      const [prodData, settingsData] = await Promise.all([
        apiRequest("/api/products"),
        apiRequest("/api/settings").catch(() => ({ settings: {} })),
      ]);
      if (Array.isArray(prodData.products)) {
        state.products = prodData.products;
      }
      state.settings = settingsData.settings || {};
      renderStorefrontCatalog();
      applySiteSettingsToDOM();
    } catch (err) {
      renderStorefrontCatalog();
      console.warn("Storefront API notice:", err.message);
    }
  }

  function applySiteSettingsToDOM() {
    const s = state.settings;
    if (!s) return;
    const map = {
      "site-contact-phone": s.contact_phone,
      "footer-contact-phone": s.contact_phone,
      "site-contact-email": s.contact_email,
      "footer-contact-email": s.contact_email,
      "site-contact-location": s.contact_location,
      "footer-contact-location": s.contact_location,
      "site-contact-hours": s.business_hours,
    };
    Object.entries(map).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el && val) el.textContent = val;
    });
  }

  // =========================================================================
  // PRODUCT PURCHASE & CONFIGURATION MODAL
  // =========================================================================

  function setModalStepIndicator(stepNumber) {
    [1, 2, 3].forEach((n) => {
      const el = document.getElementById(`step-indicator-${n}`);
      if (!el) return;
      el.classList.toggle("active", n === stepNumber);
      el.classList.toggle("completed", n < stepNumber);
    });
  }

  function getAvailableVariants(product) {
    return (product.variants || []).filter(
      (v) => v.availability_status === "Available" && Number(v.stock_quantity) > 0
    );
  }

  function uniqueNonEmpty(list) {
    const seen = [];
    list.forEach((item) => {
      const trimmed = String(item || "").trim();
      if (trimmed && !seen.includes(trimmed)) {
        seen.push(trimmed);
      }
    });
    return seen;
  }

  function findProductByIdOrName(productId, productName) {
    if (productId) {
      const byId = state.products.find((p) => Number(p.id) === Number(productId));
      if (byId) return byId;
    }
    if (productName) {
      const lower = String(productName).trim().toLowerCase();
      return state.products.find((p) => String(p.name).trim().toLowerCase() === lower) || null;
    }
    return null;
  }

  function openPurchaseModal(productId, orderType = "Buy Now", productName = "") {
    const product = findProductByIdOrName(productId, productName);
    if (!product) return;

    state.modalProduct = product;
    state.modalOrderType = orderType === "Order" ? "Order" : "Buy Now";
    state.quantity = 1;
    state.currentIdempotencyKey =
      "idem-" + Date.now() + "-" + Math.random().toString(36).slice(2, 9);

    setModalStepIndicator(1);
    document.getElementById("purchase-step-config").hidden = false;
    document.getElementById("purchase-step-checkout").hidden = true;
    document.getElementById("purchase-step-success").hidden = true;
    document.getElementById("purchase-config-error").hidden = true;

    document.getElementById("purchase-modal-brand").textContent = product.brand;
    document.getElementById("purchase-mode-tag").textContent = state.modalOrderType;
    document.getElementById("purchase-modal-title").textContent = product.name;
    document.getElementById("purchase-modal-desc").textContent = product.description;

    const availVariants = getAvailableVariants(product);
    const initialVariant = availVariants[0] || (product.variants || [])[0] || null;

    if (initialVariant) {
      state.selectedColor = initialVariant.color || "";
      state.selectedStorage = initialVariant.storage || "";
      state.selectedRam = initialVariant.ram || "";
      state.selectedProcessor = initialVariant.processor || "";
      state.selectedOption = initialVariant.option_name || "";
    } else {
      state.selectedColor = "";
      state.selectedStorage = "";
      state.selectedRam = "";
      state.selectedProcessor = "";
      state.selectedOption = "";
    }

    syncModalSelectionAndRender();
    openModalElement(document.getElementById("purchase-modal"));
  }

  function closePurchaseModal() {
    closeModalElement(document.getElementById("purchase-modal"));
  }

  function findBestMatchingVariant(product) {
    const variants = product.variants || [];
    const avail = getAvailableVariants(product);

    let match = avail.find(
      (v) =>
        (!state.selectedColor || v.color === state.selectedColor) &&
        (!state.selectedStorage || v.storage === state.selectedStorage) &&
        (!state.selectedRam || v.ram === state.selectedRam) &&
        (!state.selectedProcessor || v.processor === state.selectedProcessor) &&
        (!state.selectedOption || v.option_name === state.selectedOption)
    );

    if (!match && state.selectedColor) {
      match = avail.find((v) => v.color === state.selectedColor);
      if (match) {
        state.selectedStorage = match.storage || "";
        state.selectedRam = match.ram || "";
        state.selectedProcessor = match.processor || "";
        state.selectedOption = match.option_name || "";
      }
    }

    if (!match) {
      match = avail[0] || variants[0] || null;
      if (match) {
        state.selectedColor = match.color || "";
        state.selectedStorage = match.storage || "";
        state.selectedRam = match.ram || "";
        state.selectedProcessor = match.processor || "";
        state.selectedOption = match.option_name || "";
      }
    }

    return match;
  }

  function buildVariantSummaryText(variant) {
    if (!variant) return "Standard Configuration";
    const parts = [
      variant.color,
      variant.storage,
      variant.ram,
      variant.processor,
      variant.option_name,
    ]
      .map((s) => String(s || "").trim())
      .filter(Boolean);
    return parts.length ? parts.join(" • ") : "Standard Configuration";
  }

  function buildNonColorConfigText(variant) {
    if (!variant) return "Standard";
    const parts = [
      variant.storage,
      variant.ram,
      variant.processor,
      variant.option_name,
    ]
      .map((s) => String(s || "").trim())
      .filter(Boolean);
    return parts.length ? parts.join(" • ") : "Standard";
  }

  function syncModalSelectionAndRender() {
    const product = state.modalProduct;
    if (!product) return;

    const availVariants = getAvailableVariants(product);
    const activeVariant = findBestMatchingVariant(product);
    state.selectedVariant = activeVariant;

    // 1. Render Colour options (only colours that actually exist & are available for this product)
    const colorGroup = document.getElementById("config-group-color");
    const colorContainer = document.getElementById("config-color-options");
    const availableColors = uniqueNonEmpty(availVariants.map((v) => v.color));

    if (availableColors.length > 0) {
      colorGroup.hidden = false;
      document.getElementById("selected-color-label").textContent =
        state.selectedColor || availableColors[0];
      colorContainer.innerHTML = availableColors
        .map((colorName) => {
          const sampleVar = availVariants.find((v) => v.color === colorName);
          const hex = guessColorHex(colorName, sampleVar ? sampleVar.color_hex : "");
          const isSelected = colorName === state.selectedColor;
          return `
            <button
              type="button"
              class="config-chip color-swatch-btn ${isSelected ? "selected" : ""}"
              data-config-type="color"
              data-config-value="${escapeHtml(colorName)}"
              aria-pressed="${isSelected}"
            >
              <span class="color-swatch-dot" style="background:${escapeHtml(hex)}"></span>
              <span>${escapeHtml(colorName)}</span>
            </button>
          `;
        })
        .join("");
    } else {
      colorGroup.hidden = true;
    }

    const colorFilteredAll = (product.variants || []).filter(
      (v) => !state.selectedColor || v.color === state.selectedColor
    );

    // 2. Render Storage capacity options (only capacities that exist for the selected product)
    const storageGroup = document.getElementById("config-group-storage");
    const storageContainer = document.getElementById("config-storage-options");
    const allStorages = uniqueNonEmpty((product.variants || []).map((v) => v.storage));

    if (allStorages.length > 0 && product.category !== "Accessories") {
      storageGroup.hidden = false;
      document.getElementById("storage-group-title").textContent =
        product.category === "Smartphones" ? "Storage Capacity" : "SSD Storage";
      document.getElementById("selected-storage-label").textContent =
        state.selectedStorage || "";

      storageContainer.innerHTML = allStorages
        .map((storageVal) => {
          const matchingAvail = colorFilteredAll.find(
            (v) =>
              v.storage === storageVal &&
              v.availability_status === "Available" &&
              Number(v.stock_quantity) > 0
          );
          const isSelected = storageVal === state.selectedStorage && Boolean(matchingAvail);
          return `
            <button
              type="button"
              class="config-chip storage-card-btn ${isSelected ? "selected" : ""}"
              data-config-type="storage"
              data-config-value="${escapeHtml(storageVal)}"
              ${!matchingAvail ? "disabled" : ""}
              aria-pressed="${isSelected}"
            >
              <span class="storage-size">${escapeHtml(storageVal)}</span>
              ${
                matchingAvail
                  ? `<small>${formatZMW(matchingAvail.price_zmw)}</small>`
                  : `<small>Out of stock</small>`
              }
            </button>
          `;
        })
        .join("");
    } else {
      storageGroup.hidden = true;
    }

    // 3. Render RAM options (for Laptops / Desktop PCs)
    const ramGroup = document.getElementById("config-group-ram");
    const ramContainer = document.getElementById("config-ram-options");
    const allRams = uniqueNonEmpty((product.variants || []).map((v) => v.ram));

    if (allRams.length > 0) {
      ramGroup.hidden = false;
      document.getElementById("selected-ram-label").textContent = state.selectedRam || "";
      ramContainer.innerHTML = allRams
        .map((ramVal) => {
          const matchingAvail = colorFilteredAll.find(
            (v) =>
              v.ram === ramVal &&
              v.availability_status === "Available" &&
              Number(v.stock_quantity) > 0
          );
          const isSelected = ramVal === state.selectedRam && Boolean(matchingAvail);
          return `
            <button
              type="button"
              class="config-chip ${isSelected ? "selected" : ""}"
              data-config-type="ram"
              data-config-value="${escapeHtml(ramVal)}"
              ${!matchingAvail ? "disabled" : ""}
              aria-pressed="${isSelected}"
            >
              <span>${escapeHtml(ramVal)}</span>
            </button>
          `;
        })
        .join("");
    } else {
      ramGroup.hidden = true;
    }

    // 4. Render Processor options (for Laptops / Desktop PCs)
    const procGroup = document.getElementById("config-group-processor");
    const procContainer = document.getElementById("config-processor-options");
    const allProcs = uniqueNonEmpty((product.variants || []).map((v) => v.processor));

    if (allProcs.length > 0) {
      procGroup.hidden = false;
      document.getElementById("selected-processor-label").textContent =
        state.selectedProcessor || "";
      procContainer.innerHTML = allProcs
        .map((procVal) => {
          const matchingAvail = colorFilteredAll.find(
            (v) =>
              v.processor === procVal &&
              v.availability_status === "Available" &&
              Number(v.stock_quantity) > 0
          );
          const isSelected = procVal === state.selectedProcessor && Boolean(matchingAvail);
          return `
            <button
              type="button"
              class="config-chip ${isSelected ? "selected" : ""}"
              data-config-type="processor"
              data-config-value="${escapeHtml(procVal)}"
              ${!matchingAvail ? "disabled" : ""}
              aria-pressed="${isSelected}"
            >
              <span>${escapeHtml(procVal)}</span>
            </button>
          `;
        })
        .join("");
    } else {
      procGroup.hidden = true;
    }

    // 5. Render Accessory / Custom Option selector
    const optGroup = document.getElementById("config-group-option");
    const optContainer = document.getElementById("config-option-options");
    const allOptions = uniqueNonEmpty((product.variants || []).map((v) => v.option_name));

    if (allOptions.length > 0) {
      optGroup.hidden = false;
      document.getElementById("selected-option-label").textContent =
        state.selectedOption || "";
      optContainer.innerHTML = allOptions
        .map((optVal) => {
          const matchingAvail = colorFilteredAll.find(
            (v) =>
              v.option_name === optVal &&
              v.availability_status === "Available" &&
              Number(v.stock_quantity) > 0
          );
          const isSelected = optVal === state.selectedOption && Boolean(matchingAvail);
          return `
            <button
              type="button"
              class="config-chip ${isSelected ? "selected" : ""}"
              data-config-type="option"
              data-config-value="${escapeHtml(optVal)}"
              ${!matchingAvail ? "disabled" : ""}
              aria-pressed="${isSelected}"
            >
              <span>${escapeHtml(optVal)}</span>
              ${matchingAvail ? `<small>(${formatZMW(matchingAvail.price_zmw)})</small>` : ""}
            </button>
          `;
        })
        .join("");
    } else {
      optGroup.hidden = true;
    }

    // Update image, stock, quantity limits, configuration summary, and total price
    const imgEl = document.getElementById("purchase-modal-img");
    const activeImage =
      (activeVariant && activeVariant.variant_image_url) || product.image_url;
    imgEl.src = activeImage;
    imgEl.alt = product.name;

    const isVariantValid =
      activeVariant &&
      activeVariant.availability_status === "Available" &&
      Number(activeVariant.stock_quantity) > 0 &&
      product.availability_status === "Available";

    const isOrderable =
      isVariantValid ||
      (Boolean(activeVariant) &&
        product.availability_status !== "Unavailable" &&
        activeVariant.availability_status !== "Unavailable");

    const maxStock = isVariantValid ? Number(activeVariant.stock_quantity) : 0;
    const maxAllowedQty = isVariantValid ? maxStock : 10;
    if (state.quantity < 1) state.quantity = 1;
    if (maxAllowedQty > 0 && state.quantity > maxAllowedQty) {
      state.quantity = maxAllowedQty;
    }

    const unitPrice = activeVariant
      ? Number(activeVariant.price_zmw)
      : Number(product.price_zmw);
    const totalPrice = unitPrice * state.quantity;
    const summaryText = buildVariantSummaryText(activeVariant);

    document.getElementById("selected-config-pill").textContent = `Selected: ${summaryText}`;
    document.getElementById("summary-config-text").textContent = summaryText;
    document.getElementById("purchase-unit-price").textContent = formatZMW(unitPrice);
    document.getElementById("summary-unit-price").textContent = formatZMW(unitPrice);
    document.getElementById("summary-qty").textContent = String(state.quantity);
    document.getElementById("summary-total-price").textContent = formatZMW(totalPrice);

    const qtyInput = document.getElementById("purchase-qty-input");
    const qtyMinus = document.getElementById("purchase-qty-minus");
    const qtyPlus = document.getElementById("purchase-qty-plus");
    const qtyNote = document.getElementById("purchase-qty-note");
    const stockBadge = document.getElementById("purchase-stock-badge");
    const stockText = document.getElementById("purchase-stock-text");
    const continueBtn = document.getElementById("purchase-continue-btn");

    qtyInput.value = String(state.quantity);
    qtyInput.max = String(Math.max(1, maxAllowedQty));
    qtyMinus.disabled = !isOrderable || state.quantity <= 1;
    qtyPlus.disabled = !isOrderable || state.quantity >= maxAllowedQty;

    if (isVariantValid) {
      stockBadge.textContent = "In stock";
      stockBadge.classList.remove("out");
      stockText.textContent = `${maxStock} ${maxStock === 1 ? "unit" : "units"} available`;
      qtyNote.textContent = `Max available: ${maxStock}`;
      continueBtn.disabled = false;
    } else if (isOrderable) {
      stockBadge.textContent = "Available to Order";
      stockBadge.classList.remove("out");
      stockText.textContent = "Place an order • Price & stock managed by administrator";
      qtyNote.textContent = "Select desired order quantity";
      continueBtn.disabled = false;
    } else {
      stockBadge.textContent = "Unavailable";
      stockBadge.classList.add("out");
      stockText.textContent = "Currently unavailable for purchase";
      qtyNote.textContent = "0 units available";
      continueBtn.disabled = true;
    }
  }

  function updateLiveCustomerSummaryPreview() {
    const nameVal = document.getElementById("order-customer-name").value.trim();
    const phoneVal = document.getElementById("order-customer-phone").value.trim();
    const waVal = document.getElementById("order-customer-whatsapp").value.trim();
    const locVal = document.getElementById("order-delivery-location").value.trim();
    const notesVal = document.getElementById("order-additional-instructions").value.trim();

    document.getElementById("preview-customer-name").textContent =
      nameVal || "Not entered yet";
    document.getElementById("preview-customer-phone").textContent =
      phoneVal || "Not entered yet";
    document.getElementById("preview-customer-whatsapp").textContent =
      waVal || (phoneVal ? `${phoneVal} (same as phone)` : "Same as phone");
    document.getElementById("preview-delivery-location").textContent =
      locVal || "Not entered yet";

    const notesRow = document.getElementById("preview-instructions-row");
    const notesEl = document.getElementById("preview-additional-instructions");
    if (notesVal) {
      notesRow.hidden = false;
      notesEl.textContent = notesVal;
    } else {
      notesRow.hidden = true;
      notesEl.textContent = "";
    }
  }

  function proceedToOrderSummary() {
    const product = state.modalProduct;
    const variant = state.selectedVariant;
    const errEl = document.getElementById("purchase-config-error");

    const variantStock = variant ? Number(variant.stock_quantity) : 0;
    const isUnavailable =
      !product ||
      !variant ||
      product.availability_status === "Unavailable" ||
      variant.availability_status === "Unavailable";

    if (
      isUnavailable ||
      state.quantity < 1 ||
      (variantStock > 0 && state.quantity > variantStock)
    ) {
      errEl.textContent =
        "Please select an available product configuration and valid quantity.";
      errEl.hidden = false;
      return;
    }

    errEl.hidden = true;
    const unitPrice = Number(variant.price_zmw);
    const totalPrice = unitPrice * state.quantity;
    const colorText = (variant.color || "").trim() || "Standard";
    const configText = buildNonColorConfigText(variant);

    document.getElementById("checkout-summary-img").src =
      variant.variant_image_url || product.image_url;
    document.getElementById("checkout-summary-img").alt = product.name;
    document.getElementById("checkout-summary-brand").textContent = product.brand;
    document.getElementById("checkout-summary-name").textContent = product.name;
    document.getElementById("checkout-summary-variant").textContent =
      buildVariantSummaryText(variant);
    document.getElementById("checkout-summary-color").textContent = colorText;
    document.getElementById("checkout-summary-config").textContent = configText;
    document.getElementById("checkout-summary-unit").textContent = formatZMW(unitPrice);
    document.getElementById("checkout-summary-qty").textContent = String(state.quantity);
    document.getElementById("checkout-summary-total").textContent = formatZMW(totalPrice);

    updateLiveCustomerSummaryPreview();

    setModalStepIndicator(2);
    document.getElementById("checkout-order-error").hidden = true;
    document.getElementById("purchase-step-config").hidden = true;
    document.getElementById("purchase-step-checkout").hidden = false;
    document.getElementById("purchase-step-success").hidden = true;
    document.getElementById("order-customer-name").focus();
  }

  function buildWhatsAppOrderUrl(order) {
    const storePhoneRaw =
      (state.settings && state.settings.contact_phone) || "+260970000000";
    const storeDigits = storePhoneRaw.replace(/\D/g, "") || "260970000000";
    const lines = [
      `*Elevation Electronics Order (${order.order_reference})*`,
      `Product: ${order.product_name}`,
      `Selected Colour: ${order.selected_color || "Standard"}`,
      `Configuration: ${order.selected_config || order.variant_summary}`,
      `Quantity: ${order.quantity}`,
      `Unit Price: ${formatZMW(order.unit_price_zmw)}`,
      `Total Price: ${formatZMW(order.total_price_zmw)}`,
      `---`,
      `Customer: ${order.customer_name}`,
      `Phone: ${order.customer_phone}`,
      `WhatsApp: ${order.customer_whatsapp || order.customer_phone}`,
      `Delivery Location: ${order.delivery_location}`,
    ];
    if (order.customer_notes) {
      lines.push(`Additional Instructions: ${order.customer_notes}`);
    }
    return `https://wa.me/${storeDigits}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  async function submitCustomerOrder(e) {
    e.preventDefault();
    const product = state.modalProduct;
    const variant = state.selectedVariant;
    const errEl = document.getElementById("checkout-order-error");
    const submitBtn = document.getElementById("checkout-submit-btn");

    if (!product || !variant) return;

    const customerName = document.getElementById("order-customer-name").value.trim();
    const customerPhone = document.getElementById("order-customer-phone").value.trim();
    const customerWhatsapp = document
      .getElementById("order-customer-whatsapp")
      .value.trim();
    const deliveryLocation = document
      .getElementById("order-delivery-location")
      .value.trim();
    const additionalInstructions = document
      .getElementById("order-additional-instructions")
      .value.trim();

    if (!customerName || customerName.length < 2) {
      errEl.textContent = "Please enter your full name.";
      errEl.hidden = false;
      return;
    }
    if (!isValidPhone(customerPhone)) {
      errEl.textContent =
        "Please enter a valid phone number (7 to 15 digits, e.g. +260 97 000 0000).";
      errEl.hidden = false;
      return;
    }
    if (customerWhatsapp && !isValidPhone(customerWhatsapp)) {
      errEl.textContent = "Please enter a valid WhatsApp phone number.";
      errEl.hidden = false;
      return;
    }
    if (!deliveryLocation || deliveryLocation.length < 2) {
      errEl.textContent = "Please enter your delivery location.";
      errEl.hidden = false;
      return;
    }

    errEl.hidden = true;
    submitBtn.disabled = true;
    submitBtn.textContent = "Confirming Order...";

    try {
      const res = await apiRequest("/api/orders", {
        method: "POST",
        body: JSON.stringify({
          product_id: product.id,
          variant_id: variant.id,
          quantity: state.quantity,
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_whatsapp: customerWhatsapp || customerPhone,
          delivery_location: deliveryLocation,
          additional_instructions: additionalInstructions,
          order_type: state.modalOrderType,
          idempotency_key: state.currentIdempotencyKey,
        }),
      });

      const order = res.order;
      setModalStepIndicator(3);
      document.getElementById("order-ref-badge").textContent = order.order_reference;
      document.getElementById("order-receipt-box").innerHTML = `
        <p><span>Order Reference:</span> <strong>${escapeHtml(order.order_reference)}</strong></p>
        <p><span>Order Status:</span> <strong>${escapeHtml(order.status)}</strong></p>
        <p><span>Product:</span> <strong>${escapeHtml(order.product_name)}</strong></p>
        <p><span>Selected Colour:</span> <strong>${escapeHtml(order.selected_color || variant.color || "Standard")}</strong></p>
        <p><span>Storage / Config:</span> <strong>${escapeHtml(order.selected_config || buildNonColorConfigText(variant))}</strong></p>
        <p><span>Quantity:</span> <strong>${escapeHtml(order.quantity)}</strong></p>
        <p><span>Unit Price:</span> <strong>${formatZMW(order.unit_price_zmw)}</strong></p>
        <p><span>Total Price:</span> <strong>${formatZMW(order.total_price_zmw)}</strong></p>
        <p><span>Customer Name:</span> <strong>${escapeHtml(order.customer_name)}</strong></p>
        <p><span>Phone Number:</span> <strong>${escapeHtml(order.customer_phone)}</strong></p>
        <p><span>WhatsApp Number:</span> <strong>${escapeHtml(order.customer_whatsapp || order.customer_phone)}</strong></p>
        <p><span>Delivery Location:</span> <strong>${escapeHtml(order.delivery_location)}</strong></p>
        ${
          order.customer_notes
            ? `<p><span>Instructions:</span> <strong>${escapeHtml(order.customer_notes)}</strong></p>`
            : ""
        }
      `;

      const waLink = document.getElementById("order-whatsapp-link");
      if (waLink) {
        waLink.href = buildWhatsAppOrderUrl(order);
      }

      document.getElementById("checkout-order-form").reset();
      document.getElementById("purchase-step-checkout").hidden = true;
      document.getElementById("purchase-step-success").hidden = false;

      await loadPublicStorefront();
      if (state.adminAuthenticated) {
        await refreshAdminData();
      }
    } catch (err) {
      errEl.textContent = err.message;
      errEl.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Confirm Order";
    }
  }

  // =========================================================================
  // ADMINISTRATOR AUTHENTICATION & DASHBOARD
  // =========================================================================

  async function checkAdminSession() {
    try {
      const data = await apiRequest("/api/admin/session");
      state.adminAuthenticated = Boolean(data.authenticated);
      state.adminUsername = data.username || "Administrator";
      const dot = document.getElementById("admin-status-dot");
      if (dot) dot.hidden = !state.adminAuthenticated;
    } catch (_) {
      state.adminAuthenticated = false;
    }
  }

  function openAdminLoginModal() {
    if (state.adminAuthenticated) {
      enterAdminDashboard();
      return;
    }
    const modal = document.getElementById("admin-login-modal");
    document.getElementById("admin-login-error").hidden = true;
    openModalElement(modal);
    document.getElementById("admin-username").focus();
  }

  function closeAdminLoginModal() {
    closeModalElement(document.getElementById("admin-login-modal"));
  }

  async function handleAdminLogin(e) {
    e.preventDefault();
    const username = document.getElementById("admin-username").value.trim();
    const password = document.getElementById("admin-password").value;
    const errEl = document.getElementById("admin-login-error");
    const submitBtn = document.getElementById("admin-login-submit");

    errEl.hidden = true;
    submitBtn.disabled = true;
    submitBtn.textContent = "Signing in...";

    try {
      const data = await apiRequest("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      state.adminAuthenticated = true;
      state.adminUsername = data.username || username;
      document.getElementById("admin-status-dot").hidden = false;
      document.getElementById("admin-login-form").reset();
      closeAdminLoginModal();
      await enterAdminDashboard();
    } catch (err) {
      errEl.textContent = err.message;
      errEl.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Sign In to Dashboard";
    }
  }

  async function handleAdminLogout() {
    try {
      await apiRequest("/api/admin/logout", { method: "POST" });
    } catch (_) {}
    state.adminAuthenticated = false;
    state.adminUsername = "";
    document.getElementById("admin-status-dot").hidden = true;
    exitAdminDashboard();
  }

  async function enterAdminDashboard() {
    document.getElementById("storefront-main").hidden = true;
    document.getElementById("site-footer").hidden = true;
    document.getElementById("admin-dashboard").hidden = false;
    document.getElementById("admin-user-badge").textContent =
      `Signed in as ${state.adminUsername || "admin"}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
    await refreshAdminData();
    switchAdminSection(state.activeAdminSection || "overview");
  }

  function exitAdminDashboard() {
    document.getElementById("admin-dashboard").hidden = true;
    document.getElementById("storefront-main").hidden = false;
    document.getElementById("site-footer").hidden = false;
    loadPublicStorefront();
  }

  function showAdminToast(msg) {
    const toast = document.getElementById("admin-toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(showAdminToast._timer);
    showAdminToast._timer = setTimeout(() => {
      toast.hidden = true;
    }, 3800);
  }

  async function refreshAdminData() {
    if (!state.adminAuthenticated) return;
    try {
      const [overview, prodData, orderData, settingsData] = await Promise.all([
        apiRequest("/api/admin/overview"),
        apiRequest("/api/products"),
        apiRequest("/api/admin/orders"),
        apiRequest("/api/settings"),
      ]);

      state.products = prodData.products || [];
      state.orders = orderData.orders || [];
      state.settings = settingsData.settings || {};

      document.getElementById("stat-total-products").textContent = String(
        overview.total_products ?? 0
      );
      document.getElementById("stat-available-products").textContent = String(
        overview.available_products ?? 0
      );
      document.getElementById("stat-out-products").textContent = String(
        overview.out_of_stock_products ?? 0
      );
      document.getElementById("stat-total-orders").textContent = String(
        overview.total_orders ?? 0
      );
      document.getElementById("stat-pending-orders").textContent = `${
        overview.pending_orders ?? 0
      } pending confirmation`;

      renderAdminOverviewPanels();
      renderAdminProductsTable();
      renderAdminInventoryTable();
      renderAdminOrdersTable();
      populateSettingsForm();
      renderStorefrontCatalog();
      applySiteSettingsToDOM();
    } catch (err) {
      if (err.message.toLowerCase().includes("authentication")) {
        state.adminAuthenticated = false;
        exitAdminDashboard();
      }
    }
  }

  function switchAdminSection(sectionName) {
    state.activeAdminSection = sectionName;
    document.querySelectorAll(".admin-nav-item[data-admin-section]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.adminSection === sectionName);
    });

    const titles = {
      overview: "Dashboard Overview",
      phones: "Manage Phones",
      computers: "Manage Laptops & PCs",
      accessories: "Manage Accessories",
      inventory: "Manage Inventory",
      orders: "Orders",
      settings: "Website Settings",
    };
    document.getElementById("admin-section-title").textContent =
      titles[sectionName] || "Dashboard";

    document.getElementById("admin-panel-overview").hidden = sectionName !== "overview";
    document.getElementById("admin-panel-products").hidden = ![
      "phones",
      "computers",
      "accessories",
    ].includes(sectionName);
    document.getElementById("admin-panel-inventory").hidden = sectionName !== "inventory";
    document.getElementById("admin-panel-orders").hidden = sectionName !== "orders";
    document.getElementById("admin-panel-settings").hidden = sectionName !== "settings";

    if (["phones", "computers", "accessories"].includes(sectionName)) {
      renderAdminProductsTable();
    }
  }

  function renderAdminOverviewPanels() {
    const recentOrdersEl = document.getElementById("overview-recent-orders");
    const stockSummaryEl = document.getElementById("overview-stock-summary");

    if (!state.orders.length) {
      recentOrdersEl.innerHTML = `<div class="empty-catalog-state">No orders have been recorded yet.</div>`;
    } else {
      const top5 = state.orders.slice(0, 5);
      recentOrdersEl.innerHTML = `
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${top5
                .map(
                  (o) => `
                <tr>
                  <td><strong>${escapeHtml(o.order_reference)}</strong></td>
                  <td>
                    ${escapeHtml(o.customer_name)}<br>
                    <small>${escapeHtml(o.customer_phone)}</small>
                  </td>
                  <td>${escapeHtml(o.product_name)} <br><small>${escapeHtml(o.variant_summary)}</small></td>
                  <td><strong>${formatZMW(o.total_price_zmw)}</strong></td>
                  <td><span class="status ${o.status === "Pending" ? "order" : "in-stock"}">${escapeHtml(o.status)}</span></td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    if (!state.products.length) {
      stockSummaryEl.innerHTML = `<div class="empty-catalog-state">No products exist in the database. Use "+ Add Product" to add items.</div>`;
    } else {
      stockSummaryEl.innerHTML = `
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Base Price</th>
                <th>Total Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${state.products
                .map(
                  (p) => `
                <tr>
                  <td><strong>${escapeHtml(p.name)}</strong></td>
                  <td>${escapeHtml(p.category)}</td>
                  <td>${formatZMW(p.price_zmw)}</td>
                  <td>${escapeHtml(p.stock_quantity)} units</td>
                  <td>${getStatusBadgeMarkup(p)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  function renderAdminProductsTable() {
    const wrap = document.getElementById("admin-products-table-wrap");
    const heading = document.getElementById("admin-products-heading");
    if (!wrap) return;

    let filtered = state.products;
    if (state.activeAdminSection === "phones") {
      heading.textContent = "Smartphones Catalog";
      filtered = state.products
        .filter((p) => p.category === "Smartphones")
        .slice()
        .sort((a, b) => getIphoneSortMeta(b.name).sortScore - getIphoneSortMeta(a.name).sortScore);
    } else if (state.activeAdminSection === "computers") {
      heading.textContent = "Laptops, Desktop PCs & Tablets Catalog";
      filtered = state.products.filter((p) =>
        ["Laptops", "Desktop PCs", "Tablets"].includes(p.category)
      );
    } else if (state.activeAdminSection === "accessories") {
      heading.textContent = "Accessories Catalog";
      filtered = state.products.filter((p) => p.category === "Accessories");
    }

    if (!filtered.length) {
      wrap.innerHTML = `<div class="empty-catalog-state">No products found in this category. Click "+ Add Product" to create one.</div>`;
      return;
    }

    wrap.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Base Price (ZMW)</th>
            <th>Variants</th>
            <th>Total Stock</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${filtered
            .map(
              (p) => `
            <tr>
              <td><img class="admin-table-thumb" src="${escapeHtml(p.image_url)}" alt="${escapeHtml(p.name)}"></td>
              <td>
                <strong>${escapeHtml(p.name)}</strong><br>
                <small>${escapeHtml(p.brand)}</small>
              </td>
              <td>${escapeHtml(p.category)}</td>
              <td><strong>${formatZMW(p.price_zmw)}</strong></td>
              <td>${(p.variants || []).length} configured</td>
              <td>${escapeHtml(p.stock_quantity)} units</td>
              <td>${getStatusBadgeMarkup(p)}</td>
              <td>
                <div class="table-actions">
                  <button type="button" class="btn btn-small btn-secondary" data-edit-product="${p.id}">Edit</button>
                  <button type="button" class="btn btn-small btn-danger" data-delete-product="${p.id}">Delete</button>
                </div>
              </td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderAdminInventoryTable() {
    const wrap = document.getElementById("admin-inventory-table-wrap");
    if (!wrap) return;

    const allRows = [];
    state.products.forEach((p) => {
      (p.variants || []).forEach((v) => {
        allRows.push({ product: p, variant: v });
      });
    });

    if (!allRows.length) {
      wrap.innerHTML = `<div class="empty-catalog-state">No product variants available in inventory.</div>`;
      return;
    }

    wrap.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Variant Configuration</th>
            <th>Price (ZMW)</th>
            <th>Stock Quantity</th>
            <th>Status</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          ${allRows
            .map(({ product, variant }) => {
              const summary = buildVariantSummaryText(variant);
              return `
                <tr data-variant-row="${variant.id}">
                  <td><strong>${escapeHtml(product.name)}</strong></td>
                  <td>${escapeHtml(product.category)}</td>
                  <td>${escapeHtml(summary)}</td>
                  <td>
                    <input
                      type="number"
                      class="inline-price-input"
                      data-inv-price="${variant.id}"
                      min="0"
                      step="0.01"
                      value="${escapeHtml(variant.price_zmw)}"
                    >
                  </td>
                  <td>
                    <input
                      type="number"
                      class="inline-stock-input"
                      data-inv-stock="${variant.id}"
                      min="0"
                      step="1"
                      value="${escapeHtml(variant.stock_quantity)}"
                    >
                  </td>
                  <td>
                    <select class="inline-status-select" data-inv-status="${variant.id}">
                      <option value="Available" ${variant.availability_status === "Available" ? "selected" : ""}>Available</option>
                      <option value="Out of stock" ${variant.availability_status === "Out of stock" ? "selected" : ""}>Out of stock</option>
                      <option value="Unavailable" ${variant.availability_status === "Unavailable" ? "selected" : ""}>Unavailable</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" class="btn btn-small btn-primary" data-save-inventory="${variant.id}">Update</button>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderAdminOrdersTable() {
    const wrap = document.getElementById("admin-orders-table-wrap");
    if (!wrap) return;

    if (!state.orders.length) {
      wrap.innerHTML = `<div class="empty-catalog-state">No customer orders have been recorded yet.</div>`;
      return;
    }

    wrap.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr>
            <th>Order Ref</th>
            <th>Date</th>
            <th>Customer &amp; Contact</th>
            <th>Delivery Location</th>
            <th>Product &amp; Configuration</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Total (ZMW)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${state.orders
            .map(
              (o) => `
            <tr>
              <td><strong>${escapeHtml(o.order_reference)}</strong><br><small>${escapeHtml(o.order_type)}</small></td>
              <td><small>${escapeHtml(o.created_at)}</small></td>
              <td>
                <strong>${escapeHtml(o.customer_name)}</strong><br>
                <small>Tel: ${escapeHtml(o.customer_phone)}</small>
                ${
                  o.customer_whatsapp
                    ? `<br><small>WA: ${escapeHtml(o.customer_whatsapp)}</small>`
                    : ""
                }
              </td>
              <td>
                <span>${escapeHtml(o.delivery_location || "Lusaka / Pickup")}</span>
                ${
                  o.customer_notes
                    ? `<br><small>Notes: ${escapeHtml(o.customer_notes)}</small>`
                    : ""
                }
              </td>
              <td>
                <strong>${escapeHtml(o.product_name)}</strong><br>
                <small>${escapeHtml(o.variant_summary)}</small>
              </td>
              <td>${formatZMW(o.unit_price_zmw)}</td>
              <td>${escapeHtml(o.quantity)}</td>
              <td><strong>${formatZMW(o.total_price_zmw)}</strong></td>
              <td>
                <select class="inline-status-select" data-order-status="${o.id}">
                  <option value="Pending" ${o.status === "Pending" ? "selected" : ""}>Pending</option>
                  <option value="Confirmed" ${o.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
                  <option value="Completed" ${o.status === "Completed" ? "selected" : ""}>Completed</option>
                  <option value="Cancelled" ${o.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
                </select>
              </td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function populateSettingsForm() {
    const s = state.settings || {};
    const setVal = (id, v) => {
      const el = document.getElementById(id);
      if (el && v !== undefined) el.value = v;
    };
    setVal("setting-store-name", s.store_name || "Elevation Electronics");
    setVal("setting-contact-phone", s.contact_phone || "+260 000 000 000");
    setVal("setting-contact-email", s.contact_email || "sales@elevationelectronics.com");
    setVal("setting-contact-location", s.contact_location || "Lusaka, Zambia");
    setVal("setting-business-hours", s.business_hours || "Monday - Saturday, 08:00 - 18:00");
  }

  // =========================================================================
  // ADMIN ADD / EDIT PRODUCT & VARIANT BUILDER
  // =========================================================================

  function createVariantRowHtml(v = {}) {
    return `
      <div class="variant-builder-row">
        <div>
          <label>Color</label>
          <input type="text" class="v-color" placeholder="e.g. Deep Blue" value="${escapeHtml(v.color || "")}">
        </div>
        <div>
          <label>Storage</label>
          <input type="text" class="v-storage" placeholder="e.g. 256GB / 512GB SSD" value="${escapeHtml(v.storage || "")}">
        </div>
        <div>
          <label>RAM (Laptops/PCs)</label>
          <input type="text" class="v-ram" placeholder="e.g. 16GB" value="${escapeHtml(v.ram || "")}">
        </div>
        <div>
          <label>Processor / Option</label>
          <input type="text" class="v-proc-opt" placeholder="e.g. M4 Pro / Wireless Case" value="${escapeHtml(v.processor || v.option_name || "")}">
        </div>
        <div>
          <label>Price (ZMW) *</label>
          <input type="number" class="v-price" min="0" step="0.01" required value="${escapeHtml(v.price_zmw ?? 0)}">
        </div>
        <div>
          <label>Stock Qty *</label>
          <input type="number" class="v-stock" min="0" step="1" required value="${escapeHtml(v.stock_quantity ?? 1)}">
        </div>
        <div>
          <button type="button" class="btn btn-small btn-danger remove-variant-row-btn" title="Remove variant">&times;</button>
        </div>
      </div>
    `;
  }

  function openProductModal(product = null) {
    const modal = document.getElementById("admin-product-modal");
    const titleEl = document.getElementById("admin-product-modal-title");
    const errEl = document.getElementById("admin-product-form-error");
    const container = document.getElementById("variants-rows-container");
    errEl.hidden = true;

    let defaultCat = "Smartphones";
    if (state.activeAdminSection === "computers") defaultCat = "Laptops";
    if (state.activeAdminSection === "accessories") defaultCat = "Accessories";

    if (product) {
      titleEl.textContent = `Edit Product: ${product.name}`;
      document.getElementById("prod-form-id").value = String(product.id);
      document.getElementById("prod-form-name").value = product.name;
      document.getElementById("prod-form-brand").value = product.brand;
      document.getElementById("prod-form-category").value = product.category;
      document.getElementById("prod-form-price").value = String(product.price_zmw);
      document.getElementById("prod-form-stock").value = String(product.stock_quantity);
      document.getElementById("prod-form-status").value = product.availability_status;
      document.getElementById("prod-form-image").value = product.image_url;
      document.getElementById("prod-form-desc").value = product.description;

      const variants = product.variants || [];
      container.innerHTML = variants.length
        ? variants.map(createVariantRowHtml).join("")
        : createVariantRowHtml({
            price_zmw: product.price_zmw,
            stock_quantity: product.stock_quantity,
          });
    } else {
      titleEl.textContent = "Add New Product";
      document.getElementById("admin-product-form").reset();
      document.getElementById("prod-form-id").value = "";
      document.getElementById("prod-form-category").value = defaultCat;
      document.getElementById("prod-form-status").value = "Available";
      container.innerHTML = createVariantRowHtml({
        price_zmw: 15000,
        stock_quantity: 5,
      });
    }

    openModalElement(modal);
  }

  function closeProductModal() {
    closeModalElement(document.getElementById("admin-product-modal"));
  }

  async function handleImageFileUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const errEl = document.getElementById("admin-product-form-error");
    errEl.hidden = true;

    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await apiRequest("/api/admin/upload-image", {
        method: "POST",
        body: formData,
      });
      document.getElementById("prod-form-image").value = res.image_url;
      showAdminToast("Image uploaded and linked to product form.");
    } catch (err) {
      errEl.textContent = err.message;
      errEl.hidden = false;
    }
  }

  async function saveAdminProduct(e) {
    e.preventDefault();
    const errEl = document.getElementById("admin-product-form-error");
    const saveBtn = document.getElementById("admin-product-save-btn");
    errEl.hidden = true;

    const prodId = document.getElementById("prod-form-id").value.trim();
    const category = document.getElementById("prod-form-category").value;
    const basePrice = Number(document.getElementById("prod-form-price").value);
    const baseStock = Number(document.getElementById("prod-form-stock").value);

    if (basePrice < 0 || baseStock < 0) {
      errEl.textContent = "Price and stock quantity cannot be negative.";
      errEl.hidden = false;
      return;
    }

    const variantRows = Array.from(
      document.querySelectorAll("#variants-rows-container .variant-builder-row")
    );
    const variants = [];

    for (let i = 0; i < variantRows.length; i++) {
      const row = variantRows[i];
      const color = row.querySelector(".v-color").value.trim();
      const storage = row.querySelector(".v-storage").value.trim();
      const ram = row.querySelector(".v-ram").value.trim();
      const procOpt = row.querySelector(".v-proc-opt").value.trim();
      const vPrice = Number(row.querySelector(".v-price").value);
      const vStock = Number(row.querySelector(".v-stock").value);

      if (isNaN(vPrice) || vPrice < 0 || isNaN(vStock) || vStock < 0) {
        errEl.textContent = `Variant #${
          i + 1
        }: Price and stock quantity must be non-negative numbers.`;
        errEl.hidden = false;
        return;
      }

      variants.push({
        color,
        color_hex: guessColorHex(color),
        storage,
        ram,
        processor: category === "Accessories" ? "" : procOpt,
        option_name: category === "Accessories" ? procOpt : "",
        price_zmw: vPrice,
        stock_quantity: Math.floor(vStock),
        availability_status: vStock === 0 ? "Out of stock" : "Available",
      });
    }

    const payload = {
      name: document.getElementById("prod-form-name").value.trim(),
      brand: document.getElementById("prod-form-brand").value.trim(),
      category,
      price_zmw: basePrice,
      stock_quantity: Math.floor(baseStock),
      availability_status: document.getElementById("prod-form-status").value,
      image_url: document.getElementById("prod-form-image").value.trim(),
      description: document.getElementById("prod-form-desc").value.trim(),
      variants,
    };

    saveBtn.disabled = true;
    saveBtn.textContent = "Saving...";

    try {
      if (prodId) {
        await apiRequest(`/api/admin/products/${prodId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        showAdminToast(`Updated "${payload.name}" successfully.`);
      } else {
        await apiRequest("/api/admin/products", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        showAdminToast(`Added "${payload.name}" to catalog.`);
      }
      closeProductModal();
      await refreshAdminData();
    } catch (err) {
      errEl.textContent = err.message;
      errEl.hidden = false;
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = "Save Product";
    }
  }

  function promptDeleteProduct(productId) {
    const product = state.products.find((p) => Number(p.id) === Number(productId));
    if (!product) return;
    state.pendingDeleteProductId = product.id;
    document.getElementById("admin-delete-message").textContent =
      `Are you sure you want to permanently delete "${product.name}" and all of its configured variants? This action cannot be undone.`;
    openModalElement(document.getElementById("admin-delete-modal"));
  }

  function closeDeleteModal() {
    state.pendingDeleteProductId = null;
    closeModalElement(document.getElementById("admin-delete-modal"));
  }

  async function confirmDeleteProduct() {
    const id = state.pendingDeleteProductId;
    if (!id) return;
    try {
      const res = await apiRequest(`/api/admin/products/${id}`, {
        method: "DELETE",
      });
      closeDeleteModal();
      showAdminToast(res.message || "Product deleted.");
      await refreshAdminData();
    } catch (err) {
      closeDeleteModal();
      showAdminToast(`Error: ${err.message}`);
    }
  }

  // =========================================================================
  // EVENT LISTENERS INITIALIZATION
  // =========================================================================

  function bindEvents() {
    // Category filter tabs in #products
    document.querySelectorAll(".catalog-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyStorefrontCategoryFilter(btn.dataset.category || "all");
      });
    });

    const searchInput = document.getElementById("catalog-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.catalogSearchQuery = searchInput.value;
        renderStorefrontCatalog();
      });
    }

    // Discover More Phones / Show Less toggle
    const discoverBtn = document.getElementById("discover-more-phones-btn");
    if (discoverBtn) {
      discoverBtn.addEventListener("click", () => {
        state.olderPhonesExpanded = !state.olderPhonesExpanded;
        syncOlderPhonesVisibility(state.olderPhonesExpanded, !state.olderPhonesExpanded);
        if (!state.olderPhonesExpanded) {
          const storePhones = document.getElementById("store-phones");
          if (storePhones) {
            storePhones.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    }

    // Storefront anchor & category links (Navbar, Hero, Featured Categories, Footer)
    document
      .querySelectorAll('.nav-links a[href^="#"], .brand[href^="#"], [data-filter-category]')
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          const href = link.getAttribute("href");
          if (!href || !href.startsWith("#")) return;

          const navToggle = document.getElementById("nav-toggle");
          if (navToggle) navToggle.checked = false;

          const adminDash = document.getElementById("admin-dashboard");
          if (adminDash && !adminDash.hidden) {
            exitAdminDashboard();
          }

          if (
            link.hasAttribute("data-filter-category") ||
            href === "#store-phones" ||
            href === "#store-pcs" ||
            href === "#store-accessories"
          ) {
            applyStorefrontCategoryFilter("all");
          }

          if (href === "#home") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "#home");
            return;
          }

          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", href);
          }
        });
      });

    // Storefront Product Card clicks (Buy Now, Order, Image/Title click, while preserving Swap)
    document.getElementById("storefront-catalog").addEventListener("click", (e) => {
      const swapLink = e.target.closest('[data-action="swap"], a[href="#swap"]');
      if (swapLink) {
        return;
      }

      const actionBtn = e.target.closest("[data-action]");
      if (actionBtn) {
        e.preventDefault();
        const card = actionBtn.closest(".product-card");
        const pid = actionBtn.dataset.productId || (card && card.dataset.productId);
        const pname =
          (card && card.dataset.productName) ||
          (card && card.querySelector("h3") ? card.querySelector("h3").textContent : "");
        const mode = actionBtn.dataset.action === "order" ? "Order" : "Buy Now";
        openPurchaseModal(pid, mode, pname);
        return;
      }

      const card = e.target.closest(".product-card");
      if (card) {
        const pid = card.dataset.productId;
        const pname =
          card.dataset.productName ||
          (card.querySelector("h3") ? card.querySelector("h3").textContent : "");
        openPurchaseModal(pid, "Buy Now", pname);
      }
    });

    // Purchase modal configuration option clicks
    document.getElementById("purchase-step-config").addEventListener("click", (e) => {
      const chip = e.target.closest(".config-chip[data-config-type]");
      if (!chip || chip.disabled) return;
      const type = chip.dataset.configType;
      const val = chip.dataset.configValue;

      if (type === "color") state.selectedColor = val;
      if (type === "storage") state.selectedStorage = val;
      if (type === "ram") state.selectedRam = val;
      if (type === "processor") state.selectedProcessor = val;
      if (type === "option") state.selectedOption = val;

      const product = state.modalProduct;
      if (product) {
        const avail = getAvailableVariants(product);
        const exact = avail.find(
          (v) =>
            (!state.selectedColor || v.color === state.selectedColor) &&
            (!state.selectedStorage || v.storage === state.selectedStorage) &&
            (!state.selectedRam || v.ram === state.selectedRam) &&
            (!state.selectedProcessor || v.processor === state.selectedProcessor) &&
            (!state.selectedOption || v.option_name === state.selectedOption)
        );
        if (exact) {
          state.selectedVariant = exact;
        }
      }
      syncModalSelectionAndRender();
    });

    // Quantity selector buttons
    document.getElementById("purchase-qty-minus").addEventListener("click", () => {
      if (state.quantity > 1) {
        state.quantity -= 1;
        syncModalSelectionAndRender();
      }
    });

    document.getElementById("purchase-qty-plus").addEventListener("click", () => {
      const rawStock = state.selectedVariant
        ? Number(state.selectedVariant.stock_quantity)
        : 0;
      const maxAllowed = rawStock > 0 ? rawStock : 10;
      if (state.quantity < maxAllowed) {
        state.quantity += 1;
        syncModalSelectionAndRender();
      }
    });

    document
      .getElementById("purchase-continue-btn")
      .addEventListener("click", proceedToOrderSummary);
    document
      .getElementById("purchase-modal-close")
      .addEventListener("click", closePurchaseModal);
    document
      .getElementById("purchase-cancel-btn")
      .addEventListener("click", closePurchaseModal);
    document
      .getElementById("order-success-done-btn")
      .addEventListener("click", closePurchaseModal);

    document.getElementById("checkout-back-btn").addEventListener("click", () => {
      setModalStepIndicator(1);
      document.getElementById("purchase-step-checkout").hidden = true;
      document.getElementById("purchase-step-config").hidden = false;
    });

    // Live customer details preview in Step 2
    [
      "order-customer-name",
      "order-customer-phone",
      "order-customer-whatsapp",
      "order-delivery-location",
      "order-additional-instructions",
    ].forEach((inputId) => {
      const el = document.getElementById(inputId);
      if (el) {
        el.addEventListener("input", updateLiveCustomerSummaryPreview);
      }
    });

    document
      .getElementById("checkout-order-form")
      .addEventListener("submit", submitCustomerOrder);

    // Close modals when clicking outside backdrop
    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          closeModalElement(backdrop);
        }
      });
    });

    // Close active modal on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop:not([hidden])").forEach((backdrop) => {
          closeModalElement(backdrop);
        });
      }
    });

    // Admin Login Icon & Modal
    document
      .getElementById("admin-login-trigger")
      .addEventListener("click", openAdminLoginModal);
    document
      .getElementById("admin-login-close")
      .addEventListener("click", closeAdminLoginModal);
    document
      .getElementById("admin-login-form")
      .addEventListener("submit", handleAdminLogin);

    // Show / Hide password toggle
    const pwdInput = document.getElementById("admin-password");
    const pwdToggle = document.getElementById("admin-password-toggle");
    pwdToggle.addEventListener("click", () => {
      const isHidden = pwdInput.type === "password";
      pwdInput.type = isHidden ? "text" : "password";
      pwdToggle.textContent = isHidden ? "Hide" : "Show";
      pwdToggle.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });

    // Admin Dashboard Sidebar Navigation
    document.querySelectorAll(".admin-nav-item[data-admin-section]").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchAdminSection(btn.dataset.adminSection);
      });
    });

    document.querySelectorAll("[data-goto-section]").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchAdminSection(btn.dataset.gotoSection);
      });
    });

    document
      .getElementById("admin-logout-btn")
      .addEventListener("click", handleAdminLogout);
    document
      .getElementById("admin-return-store-btn")
      .addEventListener("click", exitAdminDashboard);
    document
      .getElementById("admin-top-return-btn")
      .addEventListener("click", exitAdminDashboard);

    // Admin Add / Edit / Delete Product actions
    document
      .getElementById("admin-quick-add-btn")
      .addEventListener("click", () => openProductModal(null));
    document
      .getElementById("admin-panel-add-btn")
      .addEventListener("click", () => openProductModal(null));
    document
      .getElementById("admin-product-modal-close")
      .addEventListener("click", closeProductModal);
    document
      .getElementById("admin-product-cancel-btn")
      .addEventListener("click", closeProductModal);
    document
      .getElementById("admin-product-form")
      .addEventListener("submit", saveAdminProduct);
    document
      .getElementById("prod-form-image-file")
      .addEventListener("change", handleImageFileUpload);

    document.getElementById("add-variant-row-btn").addEventListener("click", () => {
      const baseP = Number(document.getElementById("prod-form-price").value) || 0;
      document
        .getElementById("variants-rows-container")
        .insertAdjacentHTML(
          "beforeend",
          createVariantRowHtml({ price_zmw: baseP, stock_quantity: 5 })
        );
    });

    document
      .getElementById("variants-rows-container")
      .addEventListener("click", (e) => {
        const rmBtn = e.target.closest(".remove-variant-row-btn");
        if (!rmBtn) return;
        const rows = document.querySelectorAll(
          "#variants-rows-container .variant-builder-row"
        );
        if (rows.length > 1) {
          rmBtn.closest(".variant-builder-row").remove();
        }
      });

    document
      .getElementById("admin-products-table-wrap")
      .addEventListener("click", (e) => {
        const editBtn = e.target.closest("[data-edit-product]");
        if (editBtn) {
          const prod = state.products.find(
            (p) => Number(p.id) === Number(editBtn.dataset.editProduct)
          );
          if (prod) openProductModal(prod);
          return;
        }
        const delBtn = e.target.closest("[data-delete-product]");
        if (delBtn) {
          promptDeleteProduct(delBtn.dataset.deleteProduct);
        }
      });

    document
      .getElementById("admin-delete-cancel")
      .addEventListener("click", closeDeleteModal);
    document
      .getElementById("admin-delete-confirm")
      .addEventListener("click", confirmDeleteProduct);

    // Admin Inventory inline save
    document
      .getElementById("admin-inventory-table-wrap")
      .addEventListener("click", async (e) => {
        const saveBtn = e.target.closest("[data-save-inventory]");
        if (!saveBtn) return;
        const vid = saveBtn.dataset.saveInventory;
        const priceInput = document.querySelector(`[data-inv-price="${vid}"]`);
        const stockInput = document.querySelector(`[data-inv-stock="${vid}"]`);
        const statusSelect = document.querySelector(`[data-inv-status="${vid}"]`);

        const priceVal = Number(priceInput.value);
        const stockVal = Number(stockInput.value);
        if (isNaN(stockVal) || stockVal < 0) {
          showAdminToast("Error: Stock quantity cannot be negative.");
          stockInput.value = "0";
          return;
        }
        if (isNaN(priceVal) || priceVal < 0) {
          showAdminToast("Error: Price cannot be negative.");
          return;
        }

        try {
          await apiRequest(`/api/admin/variants/${vid}/inventory`, {
            method: "PATCH",
            body: JSON.stringify({
              price_zmw: priceVal,
              stock_quantity: Math.floor(stockVal),
              availability_status: statusSelect.value,
            }),
          });
          showAdminToast("Variant stock & pricing updated.");
          await refreshAdminData();
        } catch (err) {
          showAdminToast(`Error: ${err.message}`);
        }
      });

    // Admin Order status change
    document
      .getElementById("admin-orders-table-wrap")
      .addEventListener("change", async (e) => {
        const select = e.target.closest("[data-order-status]");
        if (!select) return;
        const oid = select.dataset.orderStatus;
        try {
          const res = await apiRequest(`/api/admin/orders/${oid}`, {
            method: "PATCH",
            body: JSON.stringify({ status: select.value }),
          });
          showAdminToast(res.message || "Order status updated.");
          await refreshAdminData();
        } catch (err) {
          showAdminToast(`Error: ${err.message}`);
          await refreshAdminData();
        }
      });

    // Admin Website Settings save
    document
      .getElementById("admin-settings-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
          await apiRequest("/api/admin/settings", {
            method: "PUT",
            body: JSON.stringify({
              store_name: document.getElementById("setting-store-name").value.trim(),
              contact_phone: document
                .getElementById("setting-contact-phone")
                .value.trim(),
              contact_email: document
                .getElementById("setting-contact-email")
                .value.trim(),
              contact_location: document
                .getElementById("setting-contact-location")
                .value.trim(),
              business_hours: document
                .getElementById("setting-business-hours")
                .value.trim(),
            }),
          });
          showAdminToast("Website settings updated.");
          await refreshAdminData();
        } catch (err) {
          showAdminToast(`Error: ${err.message}`);
        }
      });

    // Admin Password update
    document
      .getElementById("admin-password-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const curPass = document.getElementById("admin-current-password").value;
        const newPass = document.getElementById("admin-new-password").value;
        try {
          const res = await apiRequest("/api/admin/change-password", {
            method: "POST",
            body: JSON.stringify({
              current_password: curPass,
              new_password: newPass,
            }),
          });
          document.getElementById("admin-password-form").reset();
          showAdminToast(res.message || "Password updated.");
        } catch (err) {
          showAdminToast(`Error: ${err.message}`);
        }
      });

    // Contact form feedback
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fb = document.getElementById("contact-feedback");
        if (fb) {
          fb.textContent =
            "Thank you! Your inquiry has been received by the Elevation Electronics team.";
          fb.hidden = false;
        }
        contactForm.reset();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    bindEvents();
    await Promise.all([loadPublicStorefront(), checkAdminSession()]);
  });
})();
