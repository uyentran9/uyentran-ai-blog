---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
---

I develop **reproducible machine-learning models and experimental pipelines for biomedical and healthcare data**, with research interests in **representation learning, graph machine learning, multimodal learning, computer vision, and robust evaluation**.

My approach emphasizes a systematic research workflow:

> problem formulation → data and evaluation protocol review → strong baselines → controlled experimentation → model diagnostics and error analysis → reproducible reporting

I prioritize **rigorous empirical evaluation over headline performance metrics**, examining not only whether a model performs well, but also **how it learns, where it fails, and under what conditions its results remain reliable**. I value transparent reporting of experimental limitations, negative findings, and inconclusive results.  

---

## Project Overview

| Project | Research Area | Methods and Technologies | Status |
|---|---|---|---|
| Hepatic Risk Outcome Prediction | Clinical tabular | Tabular ML, boosting, Stratified Cross-Validation, OOF Ensembling, Log Loss | Completed |
| Investigating Vanishing Gradients and Early-Layer Trainability in Deep MLPs | Neural Network Optimization | PyTorch, Deep MLPs, Backpropagation, Gradient Analysis, Weight Initialization, SGD | Completed |
| Biomedical Microscopy Classification with MLP and CNN Baselines (BloodMNIST) | Biomedical Computer Vision | PyTorch, MLPs, CNNs, Image Preprocessing, Data Augmentation, Model Evaluation | In progress |
| PubMed RCT Sentence Classification with Transformer Models | Biomedical NLP | TF-IDF Baselines, Tokenization, Embeddings, Pretrained Transformers, Fine-Tuning | Planned |
| Molecular Graph Classification with GNN Baselines (OGBG-MolHIV) | Molecular Machine Learning | Molecular Graphs, Fingerprint Baselines, Message Passing, GCN/GIN, PyTorch Geometric, Scaffold Splits | Planned |  

---

## Completed Projects

### Hepatic Risk Outcome Prediction
**Status:** Completed 
**Research Area:** Clinical Tabular Machine Learning 
**Task:** Multiclass probability prediction  
**Methods:** Logistic Regression, XGBoost, LightGBM, CatBoost, Optuna, Stratified Cross-Validation, Out-of-Fold Ensembling

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

**Final result**

- OOF multiclass Log Loss: **0.37010**
- Public Leaderboard Log Loss: **0.38042**

**What the project demonstrates:** the largest gains came not from the choice of algorithm but from careful validation design, missingness-aware modeling, and cautious interpretation of small, potentially unstable improvements — including a seed-averaging experiment I ultimately *rejected* because its out-of-fold gain disagreed with the leaderboard.

[View project website](https://uyentran9.github.io/hepatic-risk-prediction/) 

<!--
[View source code](https://github.com/uyentran9/hepatic-risk-prediction)
--> 

### Investigating Vanishing Gradients and Early-Layer Trainability Across Network Depth in Deep MLPs on BloodMNIST

**Status:** Completed  
**Research Area:** Deep Learning and Neural Network Optimization  
**Task:** Empirical Analysis of Gradient Propagation and Early-Layer Trainability  
**Dataset:** BloodMNIST (MedMNIST v2)  
**Methods:** PyTorch, Deep MLPs, Backpropagation, Weight Initialization, Stochastic Gradient Descent, Layer-wise Gradient Analysis

A controlled empirical investigation of how network depth and activation functions affect gradient propagation, early-layer trainability, and optimization behavior in multilayer perceptrons trained on BloodMNIST.

**What I investigated**

- depth-dependent gradient attenuation in Sigmoid MLPs with 2, 5, 10, and 20 hidden layers;
- differences in gradient propagation among Sigmoid, Tanh, and ReLU at a fixed depth of five hidden layers;
- layer-wise root-mean-square (RMS) weight-gradient magnitudes and first-to-last hidden-layer gradient ratios;
- normalized first-layer weight displacement as a measure of parameter movement during training;
- relationships between early-layer gradient attenuation, training-loss trajectories, and optimization progress;
- validation loss, classification accuracy, and macro-F1 under controlled experimental settings and multiple random seeds.

**Models and methods**

`PyTorch` · `Deep MLPs` · `Sigmoid` · `Tanh` · `ReLU` · `Xavier Initialization` · `SGD` · `Backpropagation` · `Layer-wise Gradient RMS` · `Multi-Seed Experiments`

**Final Experimental Results**

- First-to-last hidden-layer RMS gradient ratio for Sigmoid MLPs: **0.4070 (D2)** versus **2.711 × 10⁻¹² (D20)**.
- The deepest Sigmoid networks exhibited substantially attenuated early-layer gradients, limited first-layer parameter movement, and slower optimization progress under the tested conditions.
- At fixed depth (D5), Tanh achieved a mean validation accuracy of **86.21%** and macro-F1 of **0.8441**, illustrating differences in optimization and predictive performance across activation functions.

**What the project demonstrates:** The experiments provide evidence of a relationship between increasing network depth, early-layer gradient attenuation, and reduced trainability in Sigmoid MLPs. The study also demonstrates how layer-wise gradient measurements, parameter displacement, and optimization trajectories can complement predictive metrics in analyzing neural network behavior. Conclusions are limited to the architectures, initialization, optimizer, and dataset examined.  

[View project website](https://uyentran9.github.io/hepatic-risk-prediction/) 

<!--
[View source code](https://github.com/uyentran9/hepatic-risk-prediction)

[View GitHub Repository](https://github.com/uyentran9/gradient-vanishing)
-->  

---

## In Progress

### Biomedical Microscopy Classification with MLP and CNN Baselines (BloodMNIST)

**Status:** In progress  
**Research Area:** Biomedical Computer Vision  
**Task:** Multiclass Microscopic Image Classification  
**Dataset:** BloodMNIST (MedMNIST v2)  
**Methods:** PyTorch, MLPs, CNNs, Image Preprocessing, Data Augmentation, Model Training and Evaluation

A comparative investigation of fully connected and convolutional neural networks for eight-class microscopic blood-cell image classification using a consistent experimental pipeline.

**What I plan to investigate**

- predictive performance differences between MLP and CNN baselines on microscopic blood-cell images;
- the contribution of convolutional architectures and spatial inductive biases to image classification;
- image normalization, preprocessing, and selected data-augmentation strategies;
- effects of architectural and training choices on optimization and generalization;
- class-wise classification performance, confusion patterns, and common model errors;
- reproducibility of model comparisons under consistent data splits and evaluation procedures.

**Planned models and methods**

`PyTorch` · `MLP Baselines` · `CNN Baselines` · `Convolutional Layers` · `Image Normalization` · `Data Augmentation` · `Cross-Entropy Loss` · `Macro-F1` · `Confusion Matrices`

**Research objective:** To establish reproducible biomedical image-classification baselines and examine when convolutional architectures offer advantages over fully connected networks. The project will extend my experience with PyTorch model implementation, image-processing pipelines, and comparative evaluation while remaining distinct from the earlier Gradient Vanishing study.  

---
## Upcoming

### PubMed RCT Sentence Classification with Transformer Models

**Status:** Planned  
**Research Area:** Biomedical Natural Language Processing  
**Task:** Sentence-Level Classification of Randomized Controlled Trial Abstracts  
**Dataset:** PubMed RCT  
**Methods:** Classical NLP Baselines, Tokenization, Text Embeddings, Pretrained Transformers, Fine-Tuning, Contextual Representations

A comparative study of traditional text-classification approaches and Transformer-based models for identifying the rhetorical roles of sentences in biomedical randomized controlled trial abstracts.

**What I plan to investigate**

- sentence-level class distributions and linguistic characteristics of biomedical research abstracts;
- TF-IDF representations and conventional classification baselines;
- tokenization, vocabulary processing, and numerical text representations;
- pretrained Transformer models and fine-tuning for biomedical sentence classification;
- differences between sparse text features and contextual sentence representations;
- class-wise classification performance, confusion patterns, and common prediction errors.

**Planned models and methods**

`TF-IDF` · `Classical Text Classification` · `Tokenization` · `Text Embeddings` · `Pretrained Transformers` · `Fine-Tuning` · `Hugging Face` · `PyTorch` · `Macro-F1`

**Research objective:** To investigate how contextual representations learned by pretrained Transformer models compare with traditional text-based baselines in biomedical sentence classification. The project will develop practical experience in modern NLP pipelines, pretrained language models, transfer learning, and systematic error analysis.

---  

### Molecular Graph Classification with GNN Baselines (OGBG-MolHIV)

**Status:** Planned  
**Research Area:** Molecular Machine Learning and Graph Representation Learning  
**Task:** Binary Molecular Property Prediction  
**Dataset:** OGBG-MolHIV (Open Graph Benchmark)  
**Methods:** Molecular Fingerprints, Graph Neural Networks, Message Passing, Graph Embeddings, Benchmark Evaluation

A benchmark-based investigation of graph neural network architectures for predicting molecular HIV activity from molecular structure, with comparisons against non-graph molecular fingerprint baselines.

**What I plan to investigate**

- molecular graph representations based on atoms, bonds, and molecular connectivity;
- feature-based molecular fingerprint baselines for binary property prediction;
- graph message passing and neighborhood aggregation in molecular GNNs;
- selected GNN architectures, including Graph Convolutional Networks (GCNs) and Graph Isomorphism Networks (GINs);
- graph-level representation learning and molecular property prediction;
- model performance under the benchmark's scaffold-based dataset splits, using ROC-AUC and appropriate experimental comparisons.

**Planned models and methods**

`Molecular Graphs` · `Molecular Fingerprints` · `PyTorch Geometric` · `Message Passing` · `GCN` · `GIN` · `Graph Embeddings` · `Scaffold Splits` · `ROC-AUC`

**Research objective:** To investigate the contribution of molecular graph structure and message-passing representations to molecular property prediction, compared with established fingerprint-based approaches. The project will provide a foundation for further research in graph representation learning and biomedical applications of GNNs.

---

## Research Direction

My long-term research interests lie in **biomedical representation learning, graph machine learning, and multimodal learning, and relational learning**, with a focus on developing reliable and generalizable machine-learning methods for biological and healthcare data.

I am particularly interested in how models learn **transferable representations** from heterogeneous data, including biomedical images, structured clinical records, scientific text, and molecular graphs, and how these representations can be integrated across modalities.

Through my projects, I am building a foundation for further research in **self-supervised learning, graph representation learning, and multimodal biomedical machine learning**. Beyond predictive performance, I am interested in understanding **when and why particular architectures, representations, or data modalities improve learning and generalization**, and under what conditions their benefits remain reliable.  

---

## Research and Engineering Principles

Across projects, I emphasize:

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


<p style="margin-top:24px;">
<a href="{{ '/' | relative_url }}" style="background:#1f4d7a;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;"> 🏠 Back to Home </a>
</p> 
