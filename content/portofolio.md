---
title: "Portofolio"
url: "/portofolio/"
summary: "Portofolio Radito"
robotsNoIndex: true
searchHidden: true
---

<div hidden>
    <meta name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate, max-image-preview:none, max-video:0, max-snippet:0">
    <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate">
    <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate">
    <meta name="duckduckbot" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="slurp" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="baiduspider" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="yandex" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="facebookexternalhit" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="twitterbot" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="gptbot" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="ccbot" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="anthropic-ai" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="cohere-ai" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="perplexitybot" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="bytespider" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="applebot" content="noindex, nofollow, noarchive, nosnippet">
    <meta name="meta-externalagent" content="noindex, nofollow, noarchive, nosnippet">
    <span data-ai="noai" data-crawler="hidden"></span>

</div>

<style>
    main {
        max-width: calc(var(--nav-width) + var(--gap) * 2) !important;
    }

    #comments,
    .post-header {
        display: none !important;
    }

    #portofolio {
        text-align: center !important;
    }

    .portfolio-hero {
        text-align: center;
        margin: 2rem auto 2.5rem auto;
    }

    .portfolio-kicker {
        font-size: 0.8rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        opacity: 0.75;
        margin-bottom: 0.75rem;
    }

    .portfolio-hero h1 {
        margin-bottom: 0.75rem;
    }

    .portfolio-hero p {
        font-size: 1.05rem;
        line-height: 1.7;
        opacity: 0.9;
    }

    .hero-metrics {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.75rem;
        margin: 1.5rem auto 0;
    }

    .hero-metric {
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 0.85rem;
        background: var(--entry);
        text-align: left;
    }

    .hero-metric strong {
        display: block;
        font-size: 1.2rem;
        line-height: 1.2;
    }

    .hero-metric span {
        display: block;
        margin-top: 0.2rem;
        font-size: 0.78rem;
        opacity: 0.72;
    }

    .portfolio-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        margin-top: 1.25rem;
    }

    .portfolio-tags span {
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 0.35rem 0.75rem;
        font-size: 0.85rem;
        opacity: 0.9;
    }

    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
        gap: 1rem;
        margin: 1.5rem 0 2rem 0;
    }

    .workflow-grid {
        grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    }

    .portfolio-card {
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.1rem;
        background: var(--entry);
    }

    .portfolio-card h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    .portfolio-card p {
        margin-bottom: 0;
        line-height: 1.6;
    }

    .impact-list strong {
        display: inline-block;
        min-width: 110px;
    }

    .role-meta {
        opacity: 0.75;
        font-size: 0.9rem;
        margin-top: -0.5rem;
        margin-bottom: 1rem;
    }

    .project-label {
        font-size: 0.78rem;
        line-height: 1.2;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.65;
        margin-bottom: 0.25rem;
    }

    .case-study {
        border-left: 3px solid var(--primary);
        padding-left: 1rem;
        margin: 1.5rem 0 2rem 0;
    }

    .portfolio-section {
        margin: 3rem 0;
    }

    .section-heading {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
        text-align: left;
    }

    .section-heading h2 {
        margin: 0;
    }

    .section-heading p {
        max-width: 460px;
        margin: 0;
        padding-top: calc(0.78rem * 1.2 + 0.25rem);
        font-size: 0.92rem;
        line-height: 1.6;
        opacity: 0.72;
    }

    .project-showcase {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .project-card {
        border: 1px solid var(--border);
        border-radius: 8px;
        background: var(--entry);
        padding: 1.1rem;
        text-align: left;
    }

    .project-card.featured {
        grid-column: span 2;
    }

    .project-card.full {
        grid-column: 1 / -1;
    }

    .project-card header {
        display: flex;
        align-items: flex-start;
        gap: 0.85rem;
        margin-bottom: 0.9rem;
    }

    .project-icon {
        display: inline-grid;
        width: 2.5rem;
        height: 2.5rem;
        flex: 0 0 2.5rem;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 8px;
        color: var(--primary);
    }

    .project-icon svg {
        width: 1.3rem;
        height: 1.3rem;
    }

    .project-card h3 {
        margin: 0;
        line-height: 1.25;
    }

    .project-card .role-meta {
        margin: 0.25rem 0 0;
    }

    .project-card p {
        line-height: 1.65;
        margin: 0.7rem 0;
    }

    .metric-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.55rem;
        margin: 1rem 0;
    }

    .mini-metric {
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 0.65rem;
    }

    .mini-metric strong {
        display: block;
        font-size: 1rem;
        line-height: 1.2;
    }

    .mini-metric span {
        display: block;
        margin-top: 0.2rem;
        font-size: 0.76rem;
        opacity: 0.7;
    }

    .project-list {
        margin: 0.8rem 0 0;
        padding-left: 1.1rem;
    }

    .project-list li {
        margin: 0.35rem 0;
        line-height: 1.55;
    }

    .chip-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: 1rem;
    }

    .chip-row span {
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: 0.25rem 0.55rem;
        font-size: 0.76rem;
        opacity: 0.88;
    }

    .timeline {
        display: grid;
        gap: 0.8rem;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: minmax(120px, 0.35fr) 1fr;
        gap: 1rem;
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 0.9rem;
        background: var(--entry);
        text-align: left;
    }

    .timeline-item time {
        font-size: 0.82rem;
        opacity: 0.72;
    }

    .timeline-meta {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 1rem;
        align-items: start;
        width: 100%;
    }

    .timeline-logo {
        display: flex;
        align-items: right;
        justify-content: right;
        width: 100px;
        height: 100px;
        margin-top: -0.1rem;
        justify-self: right;
        /* border: 1px solid var(--border); */
        border-radius: 8px;
        overflow: hidden;
        /* background: #fff; */
    }

    .timeline-logo svg {
        width: 100%;
        height: 100%;
        display: block;
    }

    .timeline-item h3 {
        margin: 0 0 0.35rem;
    }

    .timeline-item p {
        margin: 0;
        line-height: 1.6;
    }

    .tool-columns {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
    }

    .developer-projects {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        gap: 1rem;
        align-items: stretch;
    }

    .project-visual-placeholder {
        min-height: 22rem;
        border: 1px solid var(--border);
        border-radius: 8px;
        background:
            linear-gradient(135deg, rgba(125, 125, 125, 0.12), rgba(125, 125, 125, 0.02)),
            var(--entry);
        display: grid;
        place-items: center;
        text-align: center;
        padding: 1.25rem;
    }

    .project-visual-placeholder strong {
        display: block;
        font-size: 1.15rem;
    }

    .project-visual-placeholder span {
        display: block;
        max-width: 26rem;
        margin-top: 0.45rem;
        line-height: 1.6;
        opacity: 0.72;
    }

    .developer-project-copy {
        border: 1px solid var(--border);
        border-radius: 8px;
        background: var(--entry);
        padding: 1.25rem;
    }

    .developer-project-copy p {
        line-height: 1.7;
    }

    .contact-panel {
        border: 1px solid var(--border);
        border-radius: 8px;
        background: var(--entry);
        padding: 1.25rem;
    }

    .contact-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
        margin-top: 1rem;
    }

    .contact-actions a {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 0.55rem 0.8rem;
        font-size: 0.88rem;
        font-weight: 600;
        text-decoration: none;
        box-shadow: none;
    }

    .post-content .contact-actions a {
        box-shadow: none;
    }

    .contact-actions svg {
        width: 1rem;
        height: 1rem;
        flex: 0 0 1rem;
    }

    .contact-actions a:first-child {
        background: var(--primary);
        border-color: var(--primary);
        color: var(--theme);
    }

    .email-composer {
        position: relative;
        margin-top: 1rem;
    }

    .email-template {
        display: block;
        width: 100%;
        min-height: 15rem;
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1rem 1rem 4rem;
        background: var(--code-bg);
        color: var(--content);
        font-size: 0.86rem;
        line-height: 1.6;
        resize: vertical;
    }

    .email-template::-webkit-scrollbar {
        width: 6px;
    }

    .email-template::-webkit-scrollbar-track {
        background: transparent;
    }

    .email-template::-webkit-scrollbar-thumb {
        background: var(--tertiary);
        border-radius: 999px;
    }

    .email-template {
        scrollbar-color: var(--tertiary) transparent;
        scrollbar-width: thin;
    }

    .email-send-button {
        position: absolute;
        right: 0.75rem;
        bottom: 0.75rem;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        border: 1px solid var(--primary);
        border-radius: 8px;
        padding: 0.4rem 0.6rem;
        background: var(--primary);
        color: var(--theme);
        font-size: 0.82rem;
        font-weight: 700;
        cursor: pointer;
    }

    .email-send-button svg {
        width: 0.9rem;
        height: 0.9rem;
    }

    #sinewave-divider {
        overflow: hidden;
    }

    #sinewave-divider path {
        animation: sinewave-run 2.8s linear infinite;
        transform-origin: center;
        will-change: transform;
    }

    #pull-down {
        cursor: pointer;
        animation: pull-down-bounce 1.35s ease-in-out infinite;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    #pull-down:hover {
        opacity: 1;
    }

    #pull-down ~ * {
        display: none;
    }

    #pull-down.portfolio-content-open ~ * {
        display: revert;
    }

    @keyframes pull-down-bounce {
        0%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(8px);
        }
    }

    @keyframes sinewave-run {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(18px);
        }
    }

    nav {
        justify-content: center !important;
    }

    nav>ul {
        display: none !important;
    }

    nav>.logo {
        width: calc(100% - var(--gap) * 2);
        max-width: calc(100% - var(--gap) * 2);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 var(--gap);
    }

    nav>.logo>.logo-switches {
        margin-inline-start: auto;
    }

    @media (max-width: 760px) {
        .project-showcase {
            grid-template-columns: 1fr;
        }

        .hero-metrics,
        .metric-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .section-heading {
            display: block;
        }

        .section-heading p {
            margin-top: 0.45rem;
            padding-top: 0;
        }

        .project-card.featured {
            grid-column: auto;
        }

        .project-card.full {
            grid-column: auto;
        }

        .timeline-item {
            grid-template-columns: 1fr;
            gap: 0.35rem;
        }

        .timeline-meta {
            grid-template-columns: max-content 58px;
        }

        .timeline-logo {
            width: 58px;
            height: 58px;
            margin-top: 0.2rem;
            justify-self: start;
        }

        .developer-projects {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: 761px) and (max-width: 980px) {
        .project-showcase {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 460px) {
        .hero-metrics,
        .metric-row {
            grid-template-columns: 1fr;
        }

        .project-card header {
            gap: 0.65rem;
        }

        .project-icon {
            width: 2.2rem;
            height: 2.2rem;
            flex-basis: 2.2rem;
        }
    }

    @media print {
        @page {
            size: A4;
            margin: 14mm 12mm;
        }

        html,
        body {
            background: #fff !important;
            color: #111 !important;
        }

        main {
            max-width: none !important;
        }

        nav,
        #pull-down,
        #comments,
        .footer,
        .top-link,
        .contact-actions,
        .email-composer {
            display: none !important;
        }

        .portfolio-hero {
            margin-top: 0;
            break-after: page;
        }

        .portfolio-section {
            margin: 0 0 12mm;
            break-before: page;
            break-inside: avoid-page;
        }

        .portfolio-section:first-of-type {
            break-before: auto;
        }

        .section-heading,
        .project-card,
        .portfolio-card,
        .timeline-item,
        .contact-panel,
        .developer-project-copy,
        .project-visual-placeholder,
        .hero-metric {
            break-inside: avoid;
            page-break-inside: avoid;
        }

        .project-showcase,
        .tool-columns,
        .portfolio-grid,
        .timeline,
        .developer-projects,
        .hero-metrics {
            gap: 6mm;
        }

        .project-showcase,
        .tool-columns,
        .portfolio-grid,
        .developer-projects {
            grid-template-columns: 1fr 1fr;
        }

        .project-card.featured,
        .project-card.full {
            grid-column: 1 / -1;
        }

        .project-card,
        .portfolio-card,
        .timeline-item,
        .contact-panel,
        .developer-project-copy,
        .project-visual-placeholder,
        .hero-metric,
        .mini-metric {
            box-shadow: none !important;
            border-color: #d8d8d8 !important;
        }

        .project-visual-placeholder {
            min-height: 90mm;
        }

        #sinewave-divider path,
        #pull-down {
            animation: none !important;
        }
    }
</style>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const logo = document.querySelector(".logo > a");
        if (!logo) return;

        logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-900 dark:text-white">
  <path transform="scale(0.0375)" d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z"/>
  </svg>`;

        function getBrowserCrypto() {
            return window.crypto || window.msCrypto || null;
        }

        function getCryptoSubtle() {
            const browserCrypto = getBrowserCrypto();
            if (!browserCrypto?.subtle) return null;

            return browserCrypto.subtle;
        }

        function getCryptoProvider() {
            const browserCrypto = getBrowserCrypto();
            const subtle = getCryptoSubtle();

            return {
                randomUUID: browserCrypto?.randomUUID
                    ? browserCrypto.randomUUID.bind(browserCrypto)
                    : null,
                importKey: subtle?.importKey
                    ? subtle.importKey.bind(subtle)
                    : null,
                sign: subtle?.sign
                    ? subtle.sign.bind(subtle)
                    : null
            };
        }

        const cryptoProvider = getCryptoProvider();

        function createId(prefix) {
            const randomValue = cryptoProvider.randomUUID
                ? cryptoProvider.randomUUID()
                : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

            return `${prefix}-${randomValue}`;
        }

        function getStoredId(storage, key, prefix) {
            try {
                let value = storage.getItem(key);
                if (!value) {
                    value = createId(prefix);
                    storage.setItem(key, value);
                }

                return value;
            } catch (error) {
                return createId(prefix);
            }
        }

        function readSearchParams(searchParams) {
            const params = {};
            searchParams.forEach(function (value, key) {
                params[key] = value;
            });

            return params;
        }

        function getConnectionInfo() {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (!connection) return null;

            return {
                effectiveType: connection.effectiveType,
                downlink: connection.downlink,
                rtt: connection.rtt,
                saveData: connection.saveData,
                type: connection.type
            };
        }

        function getPerformanceInfo() {
            const navigation = performance.getEntriesByType("navigation")[0];
            const paint = performance.getEntriesByType("paint");

            return {
                timeOrigin: performance.timeOrigin,
                now: Math.round(performance.now()),
                navigation: navigation ? {
                    type: navigation.type,
                    redirectCount: navigation.redirectCount,
                    duration: Math.round(navigation.duration),
                    domContentLoaded: Math.round(navigation.domContentLoadedEventEnd),
                    loadEventEnd: Math.round(navigation.loadEventEnd),
                    transferSize: navigation.transferSize,
                    encodedBodySize: navigation.encodedBodySize,
                    decodedBodySize: navigation.decodedBodySize
                } : null,
                paint: paint.map(function (entry) {
                    return {
                        name: entry.name,
                        startTime: Math.round(entry.startTime)
                    };
                })
            };
        }

        function getStorageInfo() {
            const info = {};

            try {
                info.localStorage = {
                    available: true,
                    count: localStorage.length,
                    items: Array.from({ length: localStorage.length }, function (_, index) {
                        const key = localStorage.key(index);
                        const value = key ? localStorage.getItem(key) : null;

                        return {
                            key: key,
                            value: value,
                            valueLength: value ? value.length : 0
                        };
                    })
                };
            } catch (error) {
                info.localStorage = {
                    available: false,
                    error: error.message,
                    count: null,
                    items: []
                };
            }

            try {
                info.sessionStorage = {
                    available: true,
                    count: sessionStorage.length,
                    items: Array.from({ length: sessionStorage.length }, function (_, index) {
                        const key = sessionStorage.key(index);
                        const value = key ? sessionStorage.getItem(key) : null;

                        return {
                            key: key,
                            value: value,
                            valueLength: value ? value.length : 0
                        };
                    })
                };
            } catch (error) {
                info.sessionStorage = {
                    available: false,
                    error: error.message,
                    count: null,
                    items: []
                };
            }

            return info;
        }

        async function getCookieStoreInfo() {
            if (!window.cookieStore?.getAll) {
                return {
                    available: false,
                    cookies: []
                };
            }

            try {
                const cookies = await window.cookieStore.getAll();
                const validCookies = cookies.map(function (cookie) {
                    if (!cookie || typeof cookie.name !== "string" || !cookie.name) {
                        return null;
                    }

                    return {
                        name: cookie.name,
                        value: typeof cookie.value === "string" ? cookie.value : "",
                        domain: cookie.domain || null,
                        path: cookie.path || null,
                        expires: cookie.expires || null,
                        sameSite: cookie.sameSite || null,
                        secure: Boolean(cookie.secure),
                        partitioned: Boolean(cookie.partitioned)
                    };
                }).filter(Boolean);

                return {
                    available: true,
                    count: validCookies.length,
                    cookies: validCookies
                };
            } catch (error) {
                return {
                    available: true,
                    error: error.message,
                    cookies: []
                };
            }
        }

        function getMediaInfo() {
            return {
                colorScheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
                reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                reducedData: window.matchMedia("(prefers-reduced-data: reduce)").matches,
                contrastMore: window.matchMedia("(prefers-contrast: more)").matches,
                forcedColors: window.matchMedia("(forced-colors: active)").matches,
                hover: window.matchMedia("(hover: hover)").matches,
                pointer: window.matchMedia("(pointer: fine)").matches ? "fine" : "coarse"
            };
        }

        async function getGeoInfo() {
            if (!navigator.geolocation) {
                return {
                    status: "unsupported"
                };
            }

            let permissionState = "unknown";

            try {
                if (navigator.permissions?.query) {
                    const permission = await navigator.permissions.query({ name: "geolocation" });
                    permissionState = permission.state;

                    if (permission.state === "denied") {
                        return {
                            status: "denied",
                            permissionState: permissionState
                        };
                    }
                }
            } catch (error) {
                permissionState = "unknown";
            }

            return new Promise(function (resolve) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        resolve({
                            status: "allowed",
                            permissionState: permissionState,
                            coords: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                accuracy: position.coords.accuracy,
                                altitude: position.coords.altitude,
                                altitudeAccuracy: position.coords.altitudeAccuracy,
                                heading: position.coords.heading,
                                speed: position.coords.speed
                            },
                            timestamp: position.timestamp
                        });
                    },
                    function (error) {
                        const statuses = {
                            1: "denied",
                            2: "unavailable",
                            3: "timeout"
                        };

                        resolve({
                            status: statuses[error.code] || "error",
                            permissionState: permissionState,
                            code: error.code,
                            message: error.message
                        });
                    },
                    {
                        enableHighAccuracy: true,
                        maximumAge: 600000,
                        timeout: 1500
                    }
                );
            });
        }

        const TELEMETRY_HMAC_KEY = "{{< param \"telemetryHmacKey\" >}}";

        function bufferToBase64Url(buffer) {
            const bytes = new Uint8Array(buffer);
            let binary = "";

            bytes.forEach(function (byte) {
                binary += String.fromCharCode(byte);
            });

            return btoa(binary)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/g, "");
        }

        function getTelemetryToken(searchParams) {
            const viewer = "direct";
            const expiresAt = "";
            const key = TELEMETRY_HMAC_KEY;
            const signature = "";

            if (!key) {
                return null;
            }

            return {
                viewer: viewer,
                exp: expiresAt,
                key: key,
                sig: signature
            };
        }

        async function hmacSha256Base64Url(key, message) {
            if (!cryptoProvider.importKey || !cryptoProvider.sign) {
                throw new Error("Web Crypto API is unavailable");
            }

            const encoder = new TextEncoder();
            const cryptoKey = await cryptoProvider.importKey(
                "raw",
                encoder.encode(key),
                { name: "HMAC", hash: "SHA-256" },
                false,
                ["sign"]
            );
            const signature = await cryptoProvider.sign("HMAC", cryptoKey, encoder.encode(message));

            return bufferToBase64Url(signature);
        }

        async function sendPullDownTelemetry(event) {
            try {
                const url = new URL(window.location.href);
                const telemetryToken = getTelemetryToken(url.searchParams);

                if (!telemetryToken) {
                    console.warn("Pull-down telemetry skipped: missing HMAC key");
                    return;
                }

                const visitorId = getStoredId(localStorage, "portfolio_visitor_id", "visitor");
                const sessionId = getStoredId(sessionStorage, "portfolio_session_id", "session");
                const visualViewport = window.visualViewport;
                const geolocation = await getGeoInfo();
                const cookieStore = await getCookieStoreInfo();

                const payload = {
                    event: "portfolio_pull_down_clicked",
                    eventId: createId("event"),
                    timestamp: new Date().toISOString(),
                    ids: {
                        visitorId: visitorId,
                        sessionId: sessionId
                    },
                    page: {
                        href: window.location.href,
                        origin: window.location.origin,
                        path: window.location.pathname,
                        search: window.location.search,
                        hash: window.location.hash,
                        title: document.title,
                        referrer: document.referrer,
                        canonical: document.querySelector("link[rel='canonical']")?.href,
                        params: readSearchParams(url.searchParams),
                        viewer: url.searchParams.get("viewer") || url.searchParams.get("v") || null,
                        utm: {
                            source: url.searchParams.get("utm_source"),
                            medium: url.searchParams.get("utm_medium"),
                            campaign: url.searchParams.get("utm_campaign"),
                            term: url.searchParams.get("utm_term"),
                            content: url.searchParams.get("utm_content")
                        }
                    },
                    click: {
                        clientX: event.clientX,
                        clientY: event.clientY,
                        screenX: event.screenX,
                        screenY: event.screenY,
                        pageX: event.pageX,
                        pageY: event.pageY,
                        button: event.button,
                        buttons: event.buttons,
                        pointerType: event.pointerType || null,
                        target: {
                            tagName: event.target?.tagName,
                            id: event.target?.id || null,
                            className: typeof event.target?.className === "string" ? event.target.className : null
                        }
                    },
                    viewport: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        scrollX: window.scrollX,
                        scrollY: window.scrollY,
                        devicePixelRatio: window.devicePixelRatio,
                        visual: visualViewport ? {
                            width: visualViewport.width,
                            height: visualViewport.height,
                            scale: visualViewport.scale,
                            offsetLeft: visualViewport.offsetLeft,
                            offsetTop: visualViewport.offsetTop
                        } : null
                    },
                    screen: {
                        width: window.screen.width,
                        height: window.screen.height,
                        availWidth: window.screen.availWidth,
                        availHeight: window.screen.availHeight,
                        colorDepth: window.screen.colorDepth,
                        pixelDepth: window.screen.pixelDepth,
                        orientation: window.screen.orientation ? {
                            type: window.screen.orientation.type,
                            angle: window.screen.orientation.angle
                        } : null
                    },
                    browser: {
                        userAgent: navigator.userAgent,
                        vendor: navigator.vendor,
                        platform: navigator.platform,
                        language: navigator.language,
                        languages: navigator.languages,
                        cookieEnabled: navigator.cookieEnabled,
                        onLine: navigator.onLine,
                        hardwareConcurrency: navigator.hardwareConcurrency,
                        deviceMemory: navigator.deviceMemory,
                        maxTouchPoints: navigator.maxTouchPoints,
                        doNotTrack: navigator.doNotTrack,
                        webdriver: navigator.webdriver,
                        pdfViewerEnabled: navigator.pdfViewerEnabled
                    },
                    locale: {
                        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                        timeZoneOffset: new Date().getTimezoneOffset(),
                        calendar: Intl.DateTimeFormat().resolvedOptions().calendar,
                        numberingSystem: Intl.DateTimeFormat().resolvedOptions().numberingSystem
                    },
                    environment: {
                        media: getMediaInfo(),
                        connection: getConnectionInfo(),
                        storage: getStorageInfo(),
                        cookieStore: cookieStore,
                        historyLength: window.history.length,
                        visibilityState: document.visibilityState,
                        cookiesAvailable: navigator.cookieEnabled,
                        cookieLength: document.cookie.length
                    },
                    performance: getPerformanceInfo(),
                    geolocation: geolocation
                };

                const payloadJson = JSON.stringify(payload);
                const payloadSignature = await hmacSha256Base64Url(telemetryToken.key, payloadJson);

                const params = new URLSearchParams({
                    algorithm: "HMAC-SHA256",
                    payloadSignature: payloadSignature,
                    payload: payloadJson
                });

                fetch(`https://api.radito.my.id/telemetry?${params.toString()}`, {
                    method: "GET",
                    keepalive: true
                });
            } catch (error) {
                console.warn("Pull-down telemetry failed", error);
            }
        }

        const pullDown = document.getElementById("pull-down");
        if (pullDown) {
            pullDown.addEventListener("click", function (event) {
                sendPullDownTelemetry(event);

                const contentStart = pullDown.nextElementSibling;
                pullDown.classList.add("portfolio-content-open");
                pullDown.style.display = "none";

                if (contentStart) {
                    requestAnimationFrame(function () {
                        contentStart.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    });
                }
            });
        }

        const emailDraft = document.getElementById("email-draft");
        const sendEmailDraft = document.getElementById("send-email-draft");
        const contactEmail = atob("YXJkaXRvd3NAZ21haWwuY29t");
        const contactEmailLink = document.getElementById("contact-email-link");

        if (emailDraft && sendEmailDraft) {
            const defaultEmailDraft = [
                "Hi Radito,",
                "",
                "I saw your portofolio and would like to discuss a project or role.",
                "",
                "Company:",
                "Role or project:",
                "Main quality challenge:",
                "",
                "Thanks,"
            ].join("\n");

            if (!emailDraft.value.trim()) {
                emailDraft.value = defaultEmailDraft;
            }

            sendEmailDraft.addEventListener("click", function () {
                const subject = "QA / Automation opportunity";
                const body = emailDraft.value.trim();
                const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                window.location.href = mailto;
            });
        }

        if (contactEmailLink) {
            contactEmailLink.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Project or QA opportunity for Radito")}`;
        }
    });
</script>

<section class="portfolio-hero">
    <h1>Radito Wahyu Setiawan</h1>
    <p style="text-align:center">👋 Hello, welcome to my Portofolio!</p>
    <p style="text-align: justify;">Quality Assurance Engineer with 6+ years across enterprise QA, automation,
        performance testing, web systems, and IoT. I like projects where quality is tied to real business flow:
        payroll accuracy, learning platforms, production reliability, operational systems, and devices in the field.</p>
    <div class="portfolio-tags">
        <span>QA Engineering</span>
        <span>Test Automation</span>
        <span>Enterprise Systems</span>
        <span>Web Development</span>
        <span>IoT</span>
        <span>Performance Testing</span>
    </div>
    <div class="hero-metrics" aria-label="Portfolio highlights">
        <div class="hero-metric">
            <strong>30K CCU</strong>
            <span>performance validation target</span>
        </div>
        <div class="hero-metric">
            <strong>1M+</strong>
            <span>registered users supported</span>
        </div>
        <div class="hero-metric">
            <strong>95%</strong>
            <span>test coverage improvement</span>
        </div>
        <div class="hero-metric">
            <strong>99.9%</strong>
            <span>uptime on maintained systems</span>
        </div>
    </div>

</section>

<p aria-hidden="true" style="text-align:center; margin: 1.5rem 0 2rem;">
    <svg id="sinewave-divider" xmlns="http://www.w3.org/2000/svg" width="100%" height="18" viewBox="0 0 220 18" preserveAspectRatio="none"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        style="width: 100%; max-width: 100%; display: block;">
        <path
            d="M-18 9 C -15 0, -12 0, -9 9 S -3 18, 0 9 S 6 0, 9 9 S 15 18, 18 9 S 24 0, 27 9 S 33 18, 36 9 S 42 0, 45 9 S 51 18, 54 9 S 60 0, 63 9 S 69 18, 72 9 S 78 0, 81 9 S 87 18, 90 9 S 96 0, 99 9 S 105 18, 108 9 S 114 0, 117 9 S 123 18, 126 9 S 132 0, 135 9 S 141 18, 144 9 S 150 0, 153 9 S 159 18, 162 9 S 168 0, 171 9 S 177 18, 180 9 S 186 0, 189 9 S 195 18, 198 9 S 204 0, 207 9 S 213 18, 216 9 S 219 0, 222 9 S 225 18, 228 9 S 231 0, 234 9" />
    </svg>

</p>

<div style="text-align: center; margin-bottom: 2rem;" id="pull-down">
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor" class="text-gray-900 dark:text-white"><path transform="scale(0.0375)" d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
</div>

<section class="portfolio-section">
<div class="section-heading">
<div>
<div class="project-label">Project Highlights</div>
<h2>Work That Connects Quality With Real Operations</h2>
</div>
<p>Selected projects across enterprise learning, HRIS payroll, education platforms, web operations, and IoT
systems. Each card focuses on the problem, the work, and the measurable result.</p>
</div>
<div class="project-showcase">
<article class="project-card featured">
<header>
<span class="project-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M4 19.5V5a2 2 0 0 1 2-2h11" />
<path d="M6 17h11a2 2 0 0 0 2-2V3" />
<path d="M8 7h7" />
<path d="M8 11h5" />
</svg>
</span>
<div>
<h3>DT5 Digital Transformation Validation</h3>
<div class="role-meta">NTUC LearningHub · Enterprise Learning Platform · 2026</div>
</div>
</header>
<p>Validated a large-scale transformation program for enterprise learning, workforce development, funding,
enrollment, billing, learner experience, and administration workflows.</p>
<div class="metric-row">
<div class="mini-metric">
<strong>LXP</strong>
<span>learning platform validation</span>
</div>
<div class="mini-metric">
<strong>UAT</strong>
<span>release readiness support</span>
</div>
<div class="mini-metric">
<strong>Multi-team</strong>
<span>Singapore and offshore delivery</span>
</div>
</div>
<ul class="project-list">
<li>Validated Learning eXperience Platform capabilities across multiple releases.</li>
<li>Tested funding, billing, enrollment, digital learning, and admin workflows end to end.</li>
<li>Managed defect lifecycle and acceptance criteria checks before production releases.</li>
</ul>
<div class="chip-row">
<span>Functional Testing</span>
<span>Regression</span>
<span>Integration</span>
<span>UAT</span>
<span>Release Validation</span>
</div>
</article>
<article class="project-card">
<header>
<span class="project-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M4 7h16" />
<path d="M6 7v12h12V7" />
<path d="M9 11h6" />
<path d="M9 15h4" />
<path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
</span>
<div>
<h3>KantorKu HRIS Payroll QA</h3>
<div class="role-meta">Dealls · HRIS Payroll · 2025-2026</div>
</div>
</header>
<p>Owned QA for payroll-heavy HRIS workflows where small defects can directly affect trust, salary
correctness, and business operations.</p>
<ul class="project-list">
<li>Performed full end-to-end payroll workflow validation.</li>
<li>Built Playwright automation to improve deployment confidence.</li>
<li>Worked with QA leads, PMs, and engineers to sharpen acceptance criteria.</li>
</ul>
<div class="chip-row">
<span>Playwright</span>
<span>Payroll QA</span>
<span>E2E Testing</span>
</div>
</article>
<article class="project-card">
<header>
<span class="project-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M3 18V6l9-4 9 4v12l-9 4-9-4Z" />
<path d="M12 22V12" />
<path d="m3 6 9 6 9-6" />
</svg>
</span>
<div>
<h3>Pijar Education Platform Reliability</h3>
<div class="role-meta">Telkom Indonesia · Education Products · 2022-2025</div>
</div>
</header>
<p>Supported QA across Pijar Sekolah, Pijar Mahir, Pijar Camp, and LearnAja, focusing on stability,
production readiness, and scale.</p>
<div class="metric-row">
<div class="mini-metric">
<strong>1M+</strong>
<span>registered users</span>
</div>
<div class="mini-metric">
<strong>30K</strong>
<span>concurrent users target</span>
</div>
<div class="mini-metric">
<strong>Smoke</strong>
<span>service monitoring</span>
</div>
</div>
<ul class="project-list">
<li>Led QA process for Pijar Mahir and validated facial recognition deployment.</li>
<li>Performed load testing and worked with backend developers on optimization.</li>
<li>Improved incident visibility through automated smoke testing.</li>
</ul>
<div class="chip-row">
<span>JMeter</span>
<span>API Testing</span>
<span>Load Testing</span>
<span>Monitoring</span>
</div>
</article>
<article class="project-card">
<header>
<span class="project-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M4 5h16v14H4z" />
<path d="M8 9h8" />
<path d="M8 13h4" />
<path d="M15 17h1" />
</svg>
</span>
<div>
<h3>Excel Workflow Migration</h3>
<div class="role-meta">Hatena Indonesia · Laravel Web App · 2020-2022</div>
</div>
</header>
<p>Migrated a legacy Excel-based operational system into a maintainable Laravel application with better
data access, reliability, and deployment flow.</p>
<div class="metric-row">
<div class="mini-metric">
<strong>&lt;100ms</strong>
<span>average query response</span>
</div>
<div class="mini-metric">
<strong>99.9%</strong>
<span>system uptime</span>
</div>
<div class="mini-metric">
<strong>&lt;1 min</strong>
<span>deployment time</span>
</div>
</div>
<ul class="project-list">
<li>Designed a new database schema and integrated JotForm data collection.</li>
<li>Maintained backups and zero data loss incidents.</li>
<li>Implemented CI/CD using GitHub Actions and Docker.</li>
</ul>
<div class="chip-row">
<span>Laravel</span>
<span>MySQL</span>
<span>Docker</span>
<span>GitHub Actions</span>
</div>
</article>
<article class="project-card">
<header>
<span class="project-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M12 20v-6" />
<path d="M8 14h8" />
<path d="M5 10a7 7 0 0 1 14 0" />
<path d="M8 10a4 4 0 0 1 8 0" />
<path d="M12 10h.01" />
</svg>
</span>
<div>
<h3>IoT Telemetry and Remote Control</h3>
<div class="role-meta">Freelance · Devices, APIs, Dashboards · 2019-2021</div>
</div>
</header>
<p>Built IoT projects spanning automated feeders, GPS tracking, LTE connectivity, MQTT messaging, REST APIs,
Grafana dashboards, and WhatsApp notifications.</p>
<div class="metric-row">
<div class="mini-metric">
<strong>3,600/hr</strong>
<span>MQTT messages handled</span>
</div>
<div class="mini-metric">
<strong>&lt;10ms</strong>
<span>API response target</span>
</div>
<div class="mini-metric">
<strong>Remote</strong>
<span>device control</span>
</div>
</div>
<ul class="project-list">
<li>Designed device-to-server communication over HTTP and MQTT.</li>
<li>Managed LTE-based remote operations with low packet loss targets.</li>
<li>Built real-time telemetry visualization for operational monitoring.</li>
</ul>
<div class="chip-row">
<span>Node.js</span>
<span>C++</span>
<span>Arduino</span>
<span>MQTT</span>
<span>Grafana</span>
</div>
</article>
<article class="project-card full">
<header>
<span class="project-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
<path d="M9 7h6" />
<path d="M9 11h6" />
<path d="M9 15h2" />
</svg>
</span>
<div>
<h3>Internal Operational Web Systems</h3>
<div class="role-meta">PT. Solo Jala Buana · Slim PHP · 2018</div>
</div>
</header>
<p>Developed practical business tools for inventory, finance records, booking, and POS migration, turning
office-only workflows into accessible web systems.</p>
<ul class="project-list">
<li>Improved stock tracking across 100+ SKUs.</li>
<li>Reduced reconciliation time from one week to one day.</li>
<li>Supported around 100 daily reservations through seat booking workflows.</li>
</ul>
<div class="chip-row">
<span>Slim Framework</span>
<span>PHP</span>
<span>MySQL</span>
<span>CRUD</span>
</div>
</article>
</div>
</section>
<section class="portfolio-section">
<div class="section-heading">
<div>
<div class="project-label">Experience Arc</div>
<h2>From Building Systems to Testing How They Fail</h2>
</div>
<p>My path started in web and IoT development, then moved deeper into quality engineering for platforms where
release confidence depends on architecture, data, integrations, and real users.</p>
</div>

<div class="timeline">

<div class="timeline-item has-logo">
<div class="timeline-meta">
<time>2026 - Present</time>

<div class="timeline-logo" aria-label="NTUC LearningHub logo">
<img src="/assets/img/e4d4587605d80293369e8b401192e34ea203c479a41df159b01ce100277e8484.svg"/>
</div>
</div>

<div>
<h3>NTUC LearningHub</h3>
<p>Quality Assurance Engineer for enterprise learning transformation, LXP validation, UAT, and release
readiness.</p>
</div>
</div>

<div class="timeline-item has-logo">
<div class="timeline-meta">
<time>2025 - 2026</time>

<div class="timeline-logo" aria-label="Dealls logo">
<img src="/assets/img/e82e8e8f7a71c7ae03746dc75acce082b6291734cf48c744938147b7b9c67be7.svg"/>
</div>
</div>

<div>
<h3>Dealls</h3>
<p>QA Automation Engineer for HRIS and payroll workflows with Playwright-based regression coverage.</p>
</div>
</div>

<div class="timeline-item has-logo">
<div class="timeline-meta">
<time>2021 - 2025</time>

<div class="timeline-logo" aria-label="Telkom logo">
<img src="/assets/img/9599f3034b6127329c676c833e0dc19de5002438bbd2764ec8de90fbcb6fd9b6.svg"/>
</div>
</div>

<div>
<h3>Telkom Indonesia</h3>
<p>Software QA Engineer across Education Products (EdTech), performance testing, API validation, automation, and
production reliability.</p>
</div>
</div>

<div class="timeline-item has-logo">
<div class="timeline-meta">
<time>2018 - 2022</time>

<div class="timeline-logo" aria-label="Hatena logo">
<img src="/assets/img/87118e916c841cddc0ba4a8634a2bdf6a69e4f45d68dcd8825d7be1a54346bfa.svg"/>
</div>
</div>

<div>
<h3>Hatena Indonesia</h3>
<p>Built Laravel, Slim, Node.js, Arduino, MQTT, and Grafana-based systems for operational workflows and
field devices.</p>
</div>
</div>

</div>
</section>
<section class="portfolio-section">
<div class="section-heading">
<div>
<div class="project-label">Toolkit</div>
<h2>Tools I Use to Make Releases Safer</h2>
</div>
<p>Testing tools, development background, and product domains that help me move comfortably between QA, backend
conversations, release checks, and operational debugging.</p>
</div>
<div class="tool-columns">
<div class="portfolio-card">
<h3>QA and Automation</h3>
<div class="chip-row">
<span>Playwright</span>
<span>Katalon Studio</span>
<span>Selenium</span>
<span>Appium</span>
<span>Apache JMeter</span>
<span>API Testing</span>
<span>Regression</span>
<span>UAT</span>
</div>
</div>
<div class="portfolio-card">
<h3>Development</h3>
<div class="chip-row">
<span>Laravel</span>
<span>Slim Framework</span>
<span>PHP</span>
<span>Node.js</span>
<span>C++</span>
<span>REST API</span>
<span>MySQL</span>
<span>Docker</span>
<span>GitHub Actions</span>
</div>
</div>
<div class="portfolio-card">
<h3>Systems and Domains</h3>
<div class="chip-row">
<span>Enterprise Learning</span>
<span>HRIS</span>
<span>Payroll</span>
<span>Education Platforms</span>
<span>CBT</span>
<span>Inventory</span>
<span>IoT</span>
<span>Telemetry</span>
</div>
</div>
</div>
</section>
<section class="portfolio-section">
<div class="section-heading">
<div>
<div class="project-label">How I Work</div>
<h2>Quality Starts With Understanding the Flow</h2>
</div>
<p>I focus on what the system protects: user trust, operational accuracy, release stability, data consistency,
and production availability.</p>
</div>
    <div class="portfolio-grid workflow-grid">
        <div class="portfolio-card">
            <h3>Map the Business Flow</h3>
            <p>Before writing scenarios, I look for the real user journey, business rules, handoffs, integrations, and
failure points.</p>
</div>
<div class="portfolio-card">
<h3>Test Beyond the Happy Path</h3>
<p>I combine functional, regression, integration, UAT, API, and load testing to find risks before users do.
</p>
</div>
<div class="portfolio-card">
<h3>Automate Where It Pays Off</h3>
<p>I use automation for repeatable confidence, smoke checks, regression coverage, and release speed.</p>
</div>
<div class="portfolio-card">
<h3>Communicate Clearly</h3>
<p>Good defect reports help engineers reproduce, prioritize, and fix issues faster. That matters as much as
finding the bug.</p>
</div>
</div>
</section>

<section class="portfolio-section">
<div class="section-heading">
<div>
<div class="project-label">My Projects</div>
<h2>Did You Know That I Am Also a Developer?</h2>
</div>
<p>Here is where I will highlight previous builds, experiments, product ideas, and engineering work beyond QA.</p>
</div>
<div class="developer-projects">
<div class="project-visual-placeholder">
<div>
<strong>Project Showcase Placeholder</strong>
<span>Large visual block reserved for screenshots, a slideshow, product previews, architecture diagrams, or selected
case-study media.</span>
</div>
</div>
<div class="developer-project-copy">
<h3>Here Is My Previous Work</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, mauris at dignissim luctus, justo lorem
tempus sem, vitae tincidunt nibh erat vitae lacus.</p>
<p>Sed posuere, magna non pulvinar gravida, neque arcu luctus justo, vitae dictum mi nibh a erat. Curabitur non
consectetur urna. Donec et sem vitae erat volutpat gravida.</p>
<div class="chip-row">
<span>Web Apps</span>
<span>IoT</span>
<span>Automation</span>
<span>APIs</span>
<span>Dashboards</span>
</div>
</div>
</div>
</section>

<section class="portfolio-section">
<div class="section-heading">
<div>
<div class="project-label">Contact</div>
<h2>Interested in Working Together?</h2>
</div>
<p></p>
</div>
<div class="contact-panel">
<p>If the work above matches what your team needs, I am open to QA engineering, automation, platform validation,
performance testing, and quality-focused product work.</p>
<div class="contact-actions">
<a href="#" id="contact-email-link">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
<path d="M4 4h16v16H4z" />
<path d="m4 7 8 6 8-6" />
</svg>
Email
</a>
<a href="https://github.com/radito" rel="noopener noreferrer" target="_blank">
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68.0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04.0.0.97-.31 3.17 1.18A10.9 10.9.0 0 1 12 5.67c.98.0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08.0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51.0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
</svg>
GitHub
</a>
<a href="https://www.linkedin.com/in/raditowsa/" rel="noopener noreferrer" target="_blank">
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5zM.34 8.02h4.32V23H.34zM8.17 8.02h4.14v2.05h.06c.58-1.1 1.99-2.26 4.1-2.26 4.38.0 5.19 2.88 5.19 6.63V23h-4.31v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53.0-2.92 1.98-2.92 4.01V23H8.17z" />
</svg>
LinkedIn
</a>
</div>
<div class="email-composer">
<textarea class="email-template" id="email-draft" aria-label="Email draft"></textarea>
<button class="email-send-button" id="send-email-draft" type="button">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
<path d="m22 2-7 20-4-9-9-4Z" />
<path d="M22 2 11 13" />
</svg>
Send
</button>
</div>
</div>
</section>
