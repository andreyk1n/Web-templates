const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');

    // Close all accordion items
    document.querySelectorAll('.accordion-content').forEach(content => {
      if (content !== accordionContent && content.style.display !== 'none') {
        content.style.display = 'none';
      }
    });

    // Toggle current accordion item
    accordionContent.style.display = accordionContent.style.display === 'none' ? 'block' : 'none';
  });
});