import { useEffect } from 'react';

/**
 * Injects a <style> tag into <head> once per styleId.
 * Safe to call from multiple components — deduplicates automatically.
 */
export function useGlobalStyles(css: string, styleId: string): void {
  useEffect(() => {
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
  }, [css, styleId]);
}
