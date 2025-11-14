// Academic Research Blog - JavaScript

// Dark/Light mode toggle
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Create theme toggle button
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
      let theme = document.documentElement.getAttribute('data-theme');
      let newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
  
  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Smooth scrolling for TOC links
  const tocLinks = document.querySelectorAll('.toc-container a[href^="#"]');
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

function updateThemeIcon(theme) {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Generate Table of Contents
function generateTOC() {
  const content = document.querySelector('.post-content');
  const tocContainer = document.querySelector('#markdown-toc');
  
  if (!content || !tocContainer) return;
  
  const headings = content.querySelectorAll('h2, h3');
  if (headings.length === 0) return;
  
  let tocHTML = '<ul>';
  let currentLevel = 2;
  
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    const text = heading.textContent;
    const id = heading.id || `heading-${index}`;
    
    if (!heading.id) {
      heading.id = id;
    }
    
    if (level > currentLevel) {
      tocHTML += '<ul>';
    } else if (level < currentLevel) {
      tocHTML += '</ul>';
    }
    
    tocHTML += `<li><a href="#${id}">${text}</a></li>`;
    currentLevel = level;
  });
  
  tocHTML += '</ul>';
  tocContainer.innerHTML = tocHTML;
}
