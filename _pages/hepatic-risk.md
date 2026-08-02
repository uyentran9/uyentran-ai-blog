---
layout: single
title: "Hepatic Risk Outcome Prediction"
permalink: /projects/hepatic-risk/
author_profile: true
nav: hepatic-risk   # 👈 THÊM DÒNG NÀY
--- 

## 🧠 Hepatic Risk Outcome Prediction

<p align="center">
  <img src="{{ site.baseurl }}/images/hepatic-risk.png"
       width="260"
       alt="Uyên Tran AI & Drug Discovery Chibi"
       style="border-radius: 14px;"/>
</p>

--- 

## 🔎 Sections

- 📊 <a href="https://github.com/uyentran9/hepatic-risk-prediction/tree/main/data" target="_blank">Data</a>
- ⚙️ <a href="https://github.com/uyentran9/hepatic-risk-prediction/blob/main/PROJECT_PIPELINE.md" target="_blank">Pipeline</a>
- 💻 <a href="https://github.com/uyentran9/hepatic-risk-prediction/tree/main/notebooks" target="_blank">Code</a>
- 📄 <a href="https://github.com/uyentran9/hepatic-risk-prediction/blob/main/reports/Technical_Report.pdf" target="_blank">Technical Report</a>

---

## 🧪 Overview

This project develops a **machine learning pipeline** to predict patient outcomes from structured clinical data.

---

## ⚠️ Problem

- Multi-class classification (C, CL, D)  
- Severe class imbalance  
- Missing values in clinical data  

---

## ⚙️ Methods

- Logistic Regression (baseline)  
- XGBoost  
- LightGBM  
- CatBoost  
- Stratified K-Fold Cross-Validation  
- Model Blending  

---

## 📊 Results

- OOF Log Loss: **~0.373**  
- Public Leaderboard: **~0.383**  

---

## 💡 Key Learnings

- Handling imbalanced data is critical  
- Cross-validation improves robustness  
- Tree-based models outperform linear models  

---

## 🔗 GitHub Repository

👉 [View Full Code](https://github.com/uyentran9/hepatic-risk-prediction)
