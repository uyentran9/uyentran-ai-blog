---
layout: publication
title: "Sparse Attention Mechanisms for Efficient Transformers"
authors: "Uyen Tran, Alice Johnson"
venue: "Neural Information Processing Systems (NeurIPS)"
year: 2024
links:
  pdf: "#"
  arxiv: "https://arxiv.org"
  code: "https://github.com/uyentran9/sparse-attention"
excerpt: "A novel sparse attention pattern that reduces transformer complexity from O(n²) to O(n log n) while maintaining performance on long sequences."
bibtex: |
  @inproceedings{tran2024sparse,
    title={Sparse Attention Mechanisms for Efficient Transformers},
    author={Tran, Uyen and Johnson, Alice},
    booktitle={Neural Information Processing Systems},
    year={2024}
  }
---

## Abstract

Transformer models have revolutionized natural language processing but suffer from quadratic complexity in sequence length due to full attention. We propose a sparse attention pattern inspired by hierarchical structures that reduces complexity to O(n log n) while maintaining the model's ability to capture long-range dependencies. Our method achieves comparable performance to full attention on various NLP benchmarks while being significantly more efficient for long sequences.

## Method Overview

Our sparse attention mechanism uses a hierarchical pattern where each token attends to:
1. Local neighbors (fixed window)
2. Tokens at exponentially increasing distances (log-space sampling)
3. Global tokens (optional)

This results in O(n log n) complexity while preserving the ability to model long-range dependencies through indirect paths.

## Experimental Results

Evaluated on long-document understanding tasks, our method achieves:
- **WikiHop**: 92.3% accuracy (vs 92.5% for full attention)
- **4x speedup** on sequences of length 4096
- **8x memory reduction** enabling training on longer contexts

## Future Work

We plan to explore:
- Learned sparse patterns
- Application to vision transformers
- Combination with other efficiency techniques (quantization, distillation)
