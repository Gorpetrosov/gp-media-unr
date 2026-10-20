import {ADSENSE_CLIENT, ADSENSE_SLOT} from "@/config/env.ts";

export function loadAdSense() {
  if (!ADSENSE_CLIENT || typeof document === 'undefined') return;
  if (document.querySelector('script[data-adsense]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.crossOrigin = 'anonymous';
  script.dataset.adsense = 'true';
  document.head.appendChild(script);
}

export function adsenseConfigured() {
  return Boolean(ADSENSE_CLIENT && ADSENSE_SLOT);
}
