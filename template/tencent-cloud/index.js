// Replace the numbers in the content with bold information.
(() => {
  // Gets target element.
  const target = document.querySelector(".d2bold");
  // Gets element content.
  let content = target.innerHTML;
  // Use regular expressions to match numbers and style them with labels.
  content = content.replace(/\d+/g, '<span class="bold">$&</span>');
  // Update element content.
  target.innerHTML = content;
})();
