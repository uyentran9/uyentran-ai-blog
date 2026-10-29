---
layout: v7-inner
title: "Tabular & Time-Series Data"
permalink: /notes/tabular-and-time-series-data/
tags: [machine-learning, python, statistics]
pdf: /files/notes/Tabular-and-Time-Series-Data-Review-Notes-UyenTran.pdf
hidden_date: true
published: true
---
Summary notes on tabular and time-series data — structure, common errors, and how each maps to a machine learning problem.
<div class="report-actions">
  <a class="report-btn" href="{{ page.pdf | relative_url }}" download>⬇ Download PDF</a>
  <a class="report-btn report-secondary-btn" href="{{ page.pdf | relative_url }}" target="_blank" rel="noopener">↗ Open full-screen</a>
</div>
<div class="report-wrap">
  <iframe src="{{ page.pdf | relative_url }}" loading="lazy"></iframe>
</div>
<style>
.report-actions { margin: 1em 0 1.5em; display: flex; gap: 0.75em; flex-wrap: wrap; }
.report-btn {
  display: inline-block; padding: 0.5em 1.1em; font-size: 0.9rem; font-weight: 600;
  color: #fff !important; background: #2f4f5f;
  border-radius: 4px; text-decoration: none !important;
}

/* Secondary button: filled background and readable text in all four themes. */
.report-secondary-btn {
  --open-bg: #eef5fb;
  --open-text: #1f4d7a;
  --open-border: #1f4d7a;
  background: var(--open-bg) !important;
  color: var(--open-text) !important;
  border: 1px solid var(--open-border) !important;
  transition: filter 0.2s ease;
}

/* Ivory Light */
html[data-theme="ivory"] .report-secondary-btn {
  --open-bg: #f7eee2;
  --open-text: #735333;
  --open-border: #93714d;
}

/* Sky Dark */
html[data-theme="sky"][data-mode="dark"] .report-secondary-btn {
  --open-bg: #dcecf8;
  --open-text: #173d58;
  --open-border: #a7c9e1;
}

/* Ivory Dark */
html[data-theme="ivory"][data-mode="dark"] .report-secondary-btn {
  --open-bg: #f2dfc4;
  --open-text: #50371e;
  --open-border: #c5a277;
}

.report-secondary-btn:visited {
  color: var(--open-text) !important;
}
.report-secondary-btn:hover,
.report-secondary-btn:focus-visible {
  filter: brightness(0.94);
}

.report-wrap {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
}
.report-wrap iframe {
  width: 100%;
  height: calc(100vh - 160px);
  min-height: 700px;
  border: 0;
  display: block;
}
</style>
---
*These are personal study notes — if you spot an error or have a suggestion, I'd genuinely appreciate you letting me know.*
<p style="margin-top:24px;">
<a href="{{ '/' | relative_url }}" style="background:#1f4d7a;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;"> 🏠 Back to Home </a>
</p>

Thank you for visiting — and for being part of my journey 🌱
