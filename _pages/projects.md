---
layout: v7-inner
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

{% assign project_items = site.data.projects %}
{% assign completed_projects = project_items | where: "status", "completed" %}
{% assign active_projects = project_items | where: "status", "in-progress" %}
{% assign planned_projects = project_items | where: "status", "planned" %}

<div class="project-counts" aria-label="Project counts">
  <span><strong>{{ completed_projects.size }}</strong> Completed</span>
  <span><strong>{{ active_projects.size }}</strong> In progress</span>
  <span><strong>{{ planned_projects.size }}</strong> Planned</span>
</div>


<style>
/* Improve Project Overview table readability on mobile */
@media (max-width: 767px) {
  .project-table-scroll {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .project-table-scroll > table {
    width: 100%;
    min-width: 900px;
    max-width: none !important;
    table-layout: auto;
  }

  .project-table-scroll th,
  .project-table-scroll td {
    word-break: normal !important;
    overflow-wrap: normal !important;
    hyphens: none !important;
  }

  /* Give Research Area sufficient width */
  .project-table-scroll th:nth-child(2),
  .project-table-scroll td:nth-child(2) {
    min-width: 180px !important;
  }

  .project-table-scroll th:nth-child(2) {
    white-space: nowrap;
  }
}
</style>

<div class="project-table-scroll">
<table>

  <thead>
    <tr>
  <th>Project</th>
  <th>Research Area</th>
  <th>Methods and Technologies</th>
  <th style="white-space: nowrap; min-width: 130px;">Status</th>
</tr>
  </thead>
  <tbody>
  {% for project in project_items %}
    <tr>
      <td>{{ project.overview_title | default: project.title | escape }}</td>
      <td>{{ project.overview_research_area | default: project.research_area | escape }}</td>
      <td>{% if project.overview_methods %}{{ project.overview_methods | escape }}{% else %}{% for method in project.methods %}{{ method | escape }}{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}</td>
      <td style="white-space: nowrap; min-width: 130px;">{% case project.status %}{% when 'completed' %}Completed{% when 'in-progress' %}In progress{% when 'planned' %}Planned{% else %}{{ project.status | escape }}{% endcase %}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>

---

## Completed Projects

{% assign detail_project_1 = project_items | where: "id", "hepatic-risk" | first %}
### Hepatic Risk Outcome Prediction  

<p align="center">  
   <img src="{{ '/images/hepatic-risk.png' | relative_url }}" alt="Hepatic Risk Outcome Prediction project overview" loading="lazy" style="display:block;width:100%;max-width:850px;height:auto;margin:0.75em 0 1.25em;border-radius:8px;">
</p>
**Status:** {% case detail_project_1.status %}{% when "completed" %}Completed{% when "in-progress" %}In progress{% when "planned" %}Planned{% else %}{{ detail_project_1.status | escape }}{% endcase %} 
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

{% assign detail_project_2 = project_items | where: "id", "gradient-vanishing" | first %}
### Investigating Vanishing Gradients and Early-Layer Trainability Across Network Depth in Deep MLPs on BloodMNIST

<p align="center">  
   <img src="{{ '/images/gradient_vanishing.png' | relative_url }}" alt="Gradient propagation study across deep multilayer perceptrons" loading="lazy" style="display:block;width:100%;max-width:850px;height:auto;margin:0.75em 0 1.25em;border-radius:8px;">
</p>  

**Status:** {% case detail_project_2.status %}{% when "completed" %}Completed{% when "in-progress" %}In progress{% when "planned" %}Planned{% else %}{{ detail_project_2.status | escape }}{% endcase %}  
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

[View project website](https://uyentran9.github.io/gradient-vanishing/) 

<!--
[View source code](https://github.com/uyentran9/hepatic-risk-prediction)

[View GitHub Repository](https://github.com/uyentran9/gradient-vanishing)
-->  


{% assign detail_project_3 = project_items | where: "id", "bloodmnist-cnn" | first %}
### Biomedical Microscopy Classification with MLP and CNN Baselines (BloodMNIST)  
### From MLP to CNN: Spatial Feature Learning and Classifier-Head Efficiency on BloodMNIST  

<p align="center">
   <img src="{{ '/images/bloodmnist-mlp-cnn.png' | relative_url }}" alt="BloodMNIST comparison of MLP and CNN architectures" loading="lazy" style="display:block;width:100%;max-width:850px;height:auto;margin:0.75em 0 1.25em;border-radius:8px;">
</p>   

**Status:** {% case detail_bloodmnist.status %}{% when "completed" %}Completed{% when "in-progress" %}In progress{% when "planned" %}Planned{% else %}{{ detail_bloodmnist.status | escape }}{% endcase %}  
**Research Area:** Deep Learning and Biomedical Image Classification  
**Task:** Empirical Comparison of MLP and CNN Architectures and Classifier-Head Parameter Efficiency  
**Dataset:** BloodMNIST (MedMNIST v2)  
**Methods:** PyTorch, MLPs, CNNs, Batch Normalization, Dropout, He Initialization, Adam, Global Average Pooling, Macro-F1, Confusion Matrix

An educational empirical study comparing an MLP baseline and two CNN architectures for eight-class blood cell image classification. The study examines spatial feature learning, classification performance, and the trade-off between model accuracy and trainable parameter counts under a shared training protocol.

**What I investigated**

- differences in classification performance between a two-hidden-layer MLP (M0) and two small CNN architectures (M1 and M2);
- the effects of Flatten and Global Average Pooling (GAP) classifier-head designs on parameter counts and observed classification performance;
- parameter efficiency across architectures containing 636,296 (M0), 44,680 (M1), and 20,104 (M2) trainable parameters;
- training and validation behavior using cross-entropy loss, accuracy, and macro-F1 across 12 epochs;
- held-out test performance using the best validation macro-F1 checkpoint for each model;
- class-specific prediction errors using the predefined M2 confusion matrix.

The experiment used official BloodMNIST train/validation/test splits, training-derived RGB normalization, a fixed Adam learning rate of 0.001, and three independent model runs with random seed 42.

**Models and methods**

`PyTorch` · `MLP` · `CNN` · `BatchNorm` · `ReLU` · `Dropout` · `He/Kaiming Initialization` · `Adam` · `Flatten` · `Global Average Pooling` · `Macro-F1` · `Confusion Matrix`

**Final Experimental Results**

- **M1 (CNN + BatchNorm + Flatten)** achieved the highest test accuracy of **91.52%** and test macro-F1 of **0.9051**, compared with **83.81%** accuracy and **0.8150** macro-F1 for the MLP baseline (M0).
- **M2 (CNN + BatchNorm + GAP)** achieved **87.02%** test accuracy and **0.8452** test macro-F1 while reducing trainable parameters by **55.0%** relative to M1 (20,104 versus 44,680).
- M2's confusion matrix identified monocytes as the most difficult class by recall (**57.39%**), with **114 monocyte images** misclassified as immature granulocytes.

**What the project demonstrates:** The study demonstrates how architectural choices, including convolutional feature extraction and classifier-head design, are associated with classification performance and model size. Both CNN architectures outperformed the MLP baseline under the tested settings. Replacing Flatten with GAP substantially reduced trainable parameters but resulted in lower test macro-F1. The findings illustrate a performance–parameter trade-off and are limited to the predefined single-seed experiment.


[View project website](https://uyentran9.github.io/bloodmnist-mlp-cnn/)


{% assign detail_pneumonia = project_items | where: "id", "pneumoniamnist-vit" | first %}

### Comparative Evaluation of Pretrained CNN and Vision Transformer Representations for Pneumonia Classification (PneumoniaMNIST+ 224)

<p align="center">
   <img src="{{ '/images/vision-transformer-pneumonia5.png' | relative_url }}" alt="ImageNet-pretrained ResNet-18 and DeiT-Tiny comparison on PneumoniaMNIST+ 224" loading="lazy" style="display:block;width:100%;max-width:850px;height:auto;margin:0.75em 0 1.25em;border-radius:8px;">
</p>   

**Status:** {% case detail_pneumonia.status %}{% when "completed" %}Completed{% when "in-progress" %}In progress{% when "planned" %}Planned{% else %}{{ detail_pneumonia.status | escape }}{% endcase %}  
**Research Area:** Biomedical Computer Vision and Transfer Learning  
**Task:** Binary Pneumonia Classification and CNN–Vision Transformer Comparison  
**Dataset:** PneumoniaMNIST+ 224 (5,856 pediatric chest X-ray images; official train/validation/test splits)  
**Methods:** PyTorch, ResNet-18, DeiT-Tiny, ImageNet Pretraining, Full Fine-Tuning, AdamW, Multi-Seed Evaluation, Macro-F1, ROC-AUC

A controlled empirical comparison of ImageNet-pretrained ResNet-18 and DeiT-Tiny for classifying pediatric chest X-rays as Normal or Pneumonia. Both models were fully fine-tuned under the same preprocessing, optimization settings, and training budget. The study examines held-out classification performance, run-to-run variability, learning curves, and classification errors.

**What I investigated**

- transfer learning from ImageNet-pretrained CNN and Vision Transformer models to 224 × 224 chest X-ray images;
- full fine-tuning of ResNet-18 and DeiT-Tiny under a shared training protocol;
- model performance across three predefined seeds (42, 43, and 44), with six independent runs in total;
- validation-based checkpoint selection and held-out test performance using macro-F1, accuracy, sensitivity, specificity, and ROC-AUC;
- training and validation loss trends, runtime, and false-positive/false-negative patterns across runs;
- the limitations of interpreting a small, single-dataset comparison as evidence of general architectural superiority.

**Models and methods**

`PyTorch` · `ResNet-18` · `DeiT-Tiny` · `Vision Transformers` · `ImageNet Pretraining` · `Full Fine-Tuning` · `AdamW` · `Multi-Seed Experiments` · `Macro-F1` · `ROC-AUC`

**Experimental protocol:** Official splits of 4,708 training, 524 validation, and 624 test images; grayscale images converted to three channels and normalized with ImageNet statistics. Each model was fully fine-tuned for five epochs per seed using AdamW (learning rate 2 × 10⁻⁵, weight decay 0.01, batch size 16). The best checkpoint in each run was selected by validation macro-F1 and then evaluated on the held-out test set. Results are reported as mean ± sample standard deviation over three seeds.

**Final Experimental Results**

- **ResNet-18:** test macro-F1 **0.9114 ± 0.0176**, accuracy **0.9209 ± 0.0148**, and ROC-AUC **0.9907 ± 0.0027**.
- **DeiT-Tiny:** test macro-F1 **0.9121 ± 0.0119**, accuracy **0.9215 ± 0.0100**, and ROC-AUC **0.9900 ± 0.0005**.
- Both models achieved mean sensitivity of approximately **0.9974**, but specificity was lower (approximately **0.79**), with more false positives among Normal images. Neither model consistently outperformed the other across the three seeds.

**What the project demonstrates:** The two pretrained pipelines achieved similar test performance under the fixed full fine-tuning protocol, with a mean macro-F1 difference of only 0.0007. The results illustrate the value of multi-seed evaluation and class-specific error analysis. They do not establish statistical equivalence, general CNN–Transformer superiority, or clinical reliability.

[View GitHub repository](https://github.com/uyentran9/pneumoniamnist-cnn-transformer)  

[View project website](https://uyentran9.github.io/pneumoniamnist-cnn-transformer/)   

---  

## In Progress  

{% assign detail_project_5 = project_items | where: "id", "molhiv-gnn" | first %}
### Molecular Graph Classification with GNN Baselines (OGBG-MolHIV)

<p align="center">  
   <img src="{{ '/images/GNN_OGBG_MolHIV.png' | relative_url }}" alt="ImageNet-pretrained ResNet-18 and DeiT-Tiny comparison on PneumoniaMNIST+ 224" loading="lazy" style="display:block;width:100%;max-width:850px;height:auto;margin:0.75em 0 1.25em;border-radius:8px;">
</p>  

**Status:** {% case detail_project_5.status %}{% when "completed" %}Completed{% when "in-progress" %}In progress{% when "planned" %}Planned{% else %}{{ detail_project_5.status | escape }}{% endcase %}  
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


## Upcoming   

{% assign detail_project_4 = project_items | where: "id", "pubmed-rct" | first %}
### PubMed RCT Sentence Classification with Transformer Models

<p align="center">
   <img src="{{ '/images/pubmed-transformer.png' | relative_url }}" alt="ImageNet-pretrained ResNet-18 and DeiT-Tiny comparison on PneumoniaMNIST+ 224" loading="lazy" style="display:block;width:100%;max-width:850px;height:auto;margin:0.75em 0 1.25em;border-radius:8px;">
</p>

**Status:** {% case detail_project_4.status %}{% when "completed" %}Completed{% when "in-progress" %}In progress{% when "planned" %}Planned{% else %}{{ detail_project_4.status | escape }}{% endcase %}  
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

Thank you for visiting — and for being part of my journey 🌱
