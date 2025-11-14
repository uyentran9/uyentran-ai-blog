# Uyen Tran - AI Research Blog

A clean, minimalist academic research blog built with Jekyll, inspired by Stanford CS PhD, MIT CSAIL, and Berkeley EECS websites.

## Features

### Design & Layout
- **Minimalist Academic Design**: Clean, distraction-free layout focused on content
- **Serif Typography**: Georgia/Palatino for body text, Helvetica/Arial for headings
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preference storage

### Academic Features
- **MathJax Support**: Beautiful mathematical notation rendering
- **Table of Contents**: Auto-generated for posts with `toc: true`
- **Citation Style**: Academic citation formatting
- **Syntax Highlighting**: Code blocks with Rouge syntax highlighting
- **Publications Section**: Dedicated area for research papers with links to PDF, arXiv, code, etc.

### Blog Organization
- **Category System**: Theory, Notes, and Experiments categories
- **Category Tags**: Visual tags for easy identification
- **Category Filtering**: Filter posts by category on the blog page
- **Post Banners**: Optional banner images for posts
- **Reading Time**: Estimated reading time for each post

### Technical Features
- **Jekyll 4.3**: Modern static site generator
- **SEO Optimized**: Built-in SEO tags and sitemap
- **RSS Feed**: Subscribe to updates
- **Fast Loading**: Static site with minimal dependencies

## Getting Started

### Prerequisites

- Ruby 3.0 or higher
- Bundler gem

### Installation

1. Clone the repository:
```bash
git clone https://github.com/uyentran9/uyentran-ai-blog.git
cd uyentran-ai-blog
```

2. Install dependencies:
```bash
bundle install
```

3. Build and serve the site locally:
```bash
bundle exec jekyll serve
```

4. Open your browser and visit `http://localhost:4000`

### Build for Production

```bash
bundle exec jekyll build
```

The site will be generated in the `_site` directory.

## Configuration

Edit `_config.yml` to customize:

- Site title and subtitle
- Contact information (email, GitHub, Twitter)
- Enable/disable features (MathJax, comments, etc.)

## Creating Content

### New Blog Post

Create a new file in `_posts/` following this naming convention: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15
categories: [Theory]  # Theory, Notes, or Experiments
tags: [tag1, tag2, tag3]
author: Uyen Tran
reading_time: 10
toc: true
mathjax: true
excerpt: "Brief description of your post."
---

Your content here...
```

### New Publication

Create a new file in `_publications/` with the format: `YYYY-title.md`

```markdown
---
layout: publication
title: "Your Paper Title"
authors: "Author 1, Author 2, Author 3"
venue: "Conference/Journal Name"
year: 2024
links:
  pdf: "link-to-pdf"
  arxiv: "arxiv-link"
  code: "github-link"
excerpt: "Brief description of the paper."
bibtex: |
  @inproceedings{yourkey2024,
    title={Your Paper Title},
    author={Author 1 and Author 2},
    booktitle={Conference},
    year={2024}
  }
---

Full paper abstract and details...
```

## Customization

### Changing Colors

Edit `assets/css/main.css` and modify the CSS variables in `:root` (light mode) and `[data-theme="dark"]` (dark mode).

### Adding Banner Images

1. Add images to `assets/images/`
2. Reference in post front matter:
```yaml
banner: /assets/images/your-banner.jpg
```

## Deployment

### GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to the main branch

### Netlify / Vercel

Connect your repository and the site will build automatically.

## Project Structure

```
.
├── _config.yml           # Site configuration
├── _layouts/             # Layout templates
│   ├── default.html      # Base layout
│   ├── post.html         # Blog post layout
│   ├── page.html         # Page layout
│   └── publication.html  # Publication layout
├── _includes/            # Reusable components (future)
├── _posts/               # Blog posts
├── _publications/        # Research publications
├── assets/
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript
│   └── images/           # Images
├── index.html            # Homepage
├── blog.html             # Blog listing page
├── publications.html     # Publications page
└── about.md              # About page
```

## Features Showcase

### Math Equations

Use `$$` for display math and `$` for inline math:

```markdown
$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$
```

### Code Blocks

Use triple backticks with language:

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

### Citations

```markdown
<div class="citation">
  <strong>Cite this post:</strong><br>
  Author Name. "Post Title." Blog Name, Year.
</div>
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Design inspired by:
- Stanford CS PhD student websites
- MIT CSAIL research pages
- Berkeley EECS academic blogs

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Contact

- **Email**: your-email@example.com
- **GitHub**: [@uyentran9](https://github.com/uyentran9)
- **Twitter**: [@your_twitter](https://twitter.com/your_twitter)

---

*Happy blogging! 📝*
