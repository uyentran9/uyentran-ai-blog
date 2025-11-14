---
layout: publication
title: "Efficient Neural Architecture Search via Gradient-Based Optimization"
authors: "Uyen Tran, Jane Smith, John Doe"
venue: "International Conference on Machine Learning (ICML)"
year: 2023
links:
  pdf: "#"
  arxiv: "https://arxiv.org"
  code: "https://github.com/uyentran9/nas-gradient"
  slides: "#"
excerpt: "We propose a gradient-based method for neural architecture search that reduces search time by 10x while maintaining competitive performance."
bibtex: |
  @inproceedings{tran2023efficient,
    title={Efficient Neural Architecture Search via Gradient-Based Optimization},
    author={Tran, Uyen and Smith, Jane and Doe, John},
    booktitle={International Conference on Machine Learning},
    year={2023}
  }
---

## Abstract

Neural Architecture Search (NAS) has shown great promise in automatically designing neural network architectures. However, existing methods are computationally expensive, often requiring thousands of GPU hours. We propose a gradient-based approach that treats the architecture search as a continuous optimization problem, reducing search time by an order of magnitude while achieving competitive performance on standard benchmarks.

## Introduction

The design of neural network architectures has traditionally been a manual, trial-and-error process requiring significant expertise. Neural Architecture Search aims to automate this process, but current methods face scalability challenges.

### Key Contributions

1. **Gradient-based search**: We formulate architecture search as differentiable optimization
2. **Efficiency**: 10x faster than previous SOTA methods
3. **Performance**: Achieves 97.2% accuracy on CIFAR-10
4. **Transferability**: Architectures transfer well to ImageNet

## Method

Our approach represents the architecture as a weighted combination of candidate operations. Let $o^{(i,j)}$ denote the set of candidate operations between nodes $i$ and $j$. The mixed operation is:

$$
\bar{o}^{(i,j)}(x) = \sum_{o \in O} \frac{\exp(\alpha_o^{(i,j)})}{\sum_{o' \in O} \exp(\alpha_{o'}^{(i,j)})} o(x)
$$

where $\alpha$ are architecture parameters learned via gradient descent.

### Bilevel Optimization

We formulate NAS as a bilevel optimization problem:

$$
\min_{\alpha} \mathcal{L}_{val}(w^*(\alpha), \alpha)
$$

subject to:

$$
w^*(\alpha) = \arg\min_w \mathcal{L}_{train}(w, \alpha)
$$

We approximate this using first-order methods to maintain computational efficiency.

## Results

### CIFAR-10

| Method | Test Error (%) | Search Cost (GPU days) |
|--------|----------------|------------------------|
| NASNet-A | 2.65 | 1800 |
| ENAS | 2.89 | 0.5 |
| DARTS | 2.76 | 4 |
| **Ours** | **2.73** | **0.4** |

### ImageNet (MobileNet Setting)

| Method | Top-1 Error (%) | Search Cost (GPU days) |
|--------|-----------------|------------------------|
| MobileNetV2 | 28.0 | - |
| FBNet | 25.9 | 9 |
| **Ours** | **25.6** | **3** |

## Discovered Architectures

Our method discovers architectures with interesting patterns:
- Heavy use of separable convolutions
- Skip connections at multiple scales  
- Efficient use of channel-wise operations

## Ablation Studies

We validate key design choices:

1. **Architecture representation**: Continuous relaxation crucial for efficiency
2. **Optimization strategy**: Second-order approximation provides marginal gains
3. **Search space**: Larger spaces benefit more from our approach

## Conclusion

We present an efficient gradient-based approach to neural architecture search that significantly reduces computational cost while maintaining competitive performance. Our method opens avenues for architecture search in resource-constrained settings.

## Acknowledgments

This work was supported by NSF Grant XXX-XXXXXXX. We thank the anonymous reviewers for their valuable feedback.

## Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{tran2023efficient,
  title={Efficient Neural Architecture Search via Gradient-Based Optimization},
  author={Tran, Uyen and Smith, Jane and Doe, John},
  booktitle={International Conference on Machine Learning},
  year={2023}
}
```
