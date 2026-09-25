/**
 * Wires up a `role="tablist"` container per the WAI-ARIA APG tabs pattern:
 * click or arrow-key/Home/End to move focus, roving tabindex, aria-selected
 * kept in sync. Caller supplies what "select tab N" means for its own markup.
 */
export function initTablist(
  tablist: HTMLElement,
  onSelect: (index: number) => void,
  orientation: "horizontal" | "vertical" = "horizontal",
): void {
  const tabs = Array.from(
    tablist.querySelectorAll<HTMLElement>('[role="tab"]'),
  );
  if (tabs.length === 0) return;

  const nextKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
  const prevKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";

  function select(index: number, focus: boolean): void {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    if (focus) tabs[index]?.focus();
    onSelect(index);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(index, false));

    tab.addEventListener("keydown", (event) => {
      const currentIndex = tabs.indexOf(tab);
      let targetIndex: number | null = null;

      if (event.key === nextKey) {
        targetIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === prevKey) {
        targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        targetIndex = 0;
      } else if (event.key === "End") {
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== null) {
        event.preventDefault();
        select(targetIndex, true);
      }
    });
  });
}
