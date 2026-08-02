---
layout: single
title: "Hepatic Risk Outcome Prediction"
permalink: /projects/hepatic-risk/
author_profile: true
---

## Overview
This project focuses on predicting hepatic risk outcomes using machine learning models on structured clinical data.

## Problem
- Multi-class classification (C, CL, D)
- Imbalanced dataset
- Real-world clinical data with missing values

## Methods
- Logistic Regression (baseline)
- XGBoost
- LightGBM
- CatBoost
- Stratified K-Fold cross-validation

## Results
- OOF Log Loss: ~0.373
- Public Leaderboard: ~0.383
- Strong performance on majority class, challenges on minority class (CL)

## Key Learnings
- Importance of handling imbalanced data
- Value of cross-validation for robust evaluation
- Tree-based models outperform linear models in structured data

## GitHub Repository
[View full code and implementation](https://github.com/uyentran9/hepatic-risk-prediction)
