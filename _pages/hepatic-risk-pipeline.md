---
layout: single
title: "Pipeline"
permalink: /projects/hepatic-risk/pipeline/
author_profile: true
---

## ⚙️ Pipeline Overview

The pipeline follows a standard machine learning workflow: 
👉 View full detailed pipeline:

🔗 https://github.com/uyentran9/hepatic-risk-prediction/blob/main/PROJECT_PIPELINE.md 

---

## 🔁 Steps

1. Data loading  
2. Preprocessing  
3. Feature engineering  
4. Model training  
5. Cross-validation  
6. Model blending  
7. Final prediction  

---

## 🔬 Models Used

- Logistic Regression (baseline)  
- XGBoost  
- LightGBM  
- CatBoost  

---

## 🔁 Validation Strategy

- **Stratified K-Fold (k=5)**  
- Same folds across all models  
- Out-of-fold predictions used for evaluation  

---

## 🧠 Model Blending

Final prediction uses weighted combination of:

- XGBoost  
- LightGBM  
- CatBoost  

---

## 📖 Full Detailed Pipeline

👉 [View Full Pipeline Explanation](https://github.com/uyentran9/hepatic-risk-prediction/blob/main/PROJECT_PIPELINE.md){:target="_blank"}
