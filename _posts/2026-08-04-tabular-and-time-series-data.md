---
title: "Tabular & Time-Series Data"
permalink: /notes/tabular-and-time-series-data/
tags: [machine-learning, python, statistics]
pdf: /files/notes/tabular-time-series-data-UyenTran.pdf
hidden_date: true
published: true
---

Summary notes on tabular vs. time-series data — structure, common errors, and how each maps to a machine learning problem.

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
  color: #fff !important; background: var(--global-base-color, #2f6f4f);
  border-radius: 4px; text-decoration: none !important;
}
.report-btn:hover { opacity: 0.85; }
.report-secondary-btn {
  background: transparent; color: var(--global-base-color, #2f6f4f) !important;
  border: 1px solid var(--global-base-color, #2f6f4f);
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
