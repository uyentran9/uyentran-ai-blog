---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
---

I build **reproducible machine-learning systems for biomedical and healthcare data**, with a growing focus on **representation learning, multimodal learning, graph machine learning, and robust evaluation**.

Every project follows the same research workflow:

> problem formulation → data audit → leakage-safe validation → strong baselines → model development → error and calibration analysis → reproducible reporting

I prioritize **honest evaluation over headline scores**: strong baselines before complex models, class- and subgroup-level error analysis, and clear documentation of what did *not* work.

---

## Overview

| Project | Domain | Core skills | Status |
|---|---|---|---|
| Hepatic Risk Outcome Prediction | Clinical tabular | Tabular ML, boosting, OOF ensembling, calibration | Completed |
| PneumoniaMNIST → PathMNIST Study | Medical imaging | PyTorch, MLP, CNN, shared pipeline, cross-dataset eval | In progress |
| Biomedical Text Classification | Biomedical NLP | Transformers, fine-tuning, evaluation | Building |
| Molecular Graph Learning (MolHIV) | Graph ML | GNNs, PyTorch Geometric, graph representation | Building |

---

## Selected Project

### Hepatic Risk Outcome Prediction
**Status:** Completed · **Domain:** Clinical tabular data · **Task:** Multiclass probability prediction

A reproducible machine-learning pipeline for predicting three cirrhosis outcomes from demographic, clinical, laboratory, and treatment-related records.

**What I investigated**

- severe class imbalance, especially the rare liver-transplant outcome;
- structured, outcome-dependent missingness treated as signal rather than noise;
- leakage-safe preprocessing fit *inside* each cross-validation fold;
- shared stratified folds for fair model comparison and valid blending;
- nonlinear tabular models and out-of-fold probability blending;
- calibration, class-specific errors, and model stability under seed variation.

**Models and methods**

`Logistic Regression` · `XGBoost` · `LightGBM` · `CatBoost` · `Optuna` · `OOF blending`

**Final reliable result**

- OOF multiclass Log Loss: **0.37010**
- Public Leaderboard Log Loss: **0.38042**

**What the project demonstrates:** the largest gains came not from the choice of algorithm but from careful validation design, missingness-aware modeling, and cautious interpretation of small, potentially unstable improvements — including a seed-averaging experiment I ultimately *rejected* because its out-of-fold gain disagreed with the leaderboard.

[View project website](https://uyentran9.github.io/hepatic-risk-prediction/) ·

<!--
[View source code](https://github.com/uyentran9/hepatic-risk-prediction)
--> 

---

## In Progress

### PneumoniaMNIST → PathMNIST: From MLP Baselines to Convolutional Models
**Status:** In progress · **Domain:** Medical imaging · **Framework:** PyTorch

A controlled study of how architecture and training choices affect performance on compact biomedical image-classification tasks, built on a **single reusable pipeline** applied across datasets.

**Study design**

- start from a transparent MLP baseline before introducing convolutional models;
- implement lightweight CNN architectures in PyTorch;
- isolate the effect of optimization, regularization, and data-augmentation choices;
- report class-wise metrics, confusion matrices, calibration, and failure cases;
- extend the *same* pipeline to **PathMNIST** and write a cross-dataset comparison, testing which design choices transfer and which are dataset-specific;
- organize training code, configs, figures, and experiment artifacts for full reproducibility.

This establishes a rigorous computer-vision foundation and a reusable experimental harness before moving to broader biomedical representation-learning problems.

---

## Upcoming

I am extending the same methodology — strong baselines, controlled ablations, honest evaluation — into two further modalities. These are scoped and in active development rather than speculative.

### Biomedical Text Classification with Transformers
**Domain:** Biomedical NLP · **Framework:** PyTorch / Hugging Face

Fine-tuning transformer models on a biomedical text-classification benchmark, with the same emphasis on strong baselines, careful evaluation, and error analysis rather than a single accuracy number.

### Molecular Graph Learning (OGB MolHIV)
**Domain:** Graph machine learning · **Framework:** PyTorch Geometric

A benchmark-driven study on a public molecular-property prediction task, asking **when graph structure actually helps over a strong feature-only baseline**, and how message-passing architectures differ in accuracy, scalability, and sensitivity to graph splits and evaluation design.

---

## Research Direction

Longer term, I am building toward **multimodal and relational learning for biomedical data** — integrating imaging, structured clinical records, molecular graphs, and text; studying not only *whether* an additional modality or graph structure improves a score, but **when, why, and for which patient subgroups** it contributes useful information.

---

## Research and Engineering Principles

Across projects, I aim to demonstrate:

- **careful problem formulation** before model selection;
- **data audits** that convert assumptions into explicit checks;
- **leakage-safe validation** and reproducible experiment design;
- **strong baselines** before introducing more complex models;
- **probability quality, calibration, and uncertainty analysis** where relevant;
- **class-specific and subgroup-level error analysis**, not only one aggregate score;
- **honest documentation of unsuccessful experiments and limitations**;
- **clear separation of notebooks, reusable source code, configurations, results, and reports**.

---

## GitHub

A complete record of repositories, notebooks, source code, and project updates is available on GitHub.

[View all repositories](https://github.com/uyentran9)
