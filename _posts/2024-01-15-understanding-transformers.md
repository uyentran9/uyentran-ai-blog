---
layout: post
title: "Understanding Transformer Architecture: A Mathematical Perspective"
date: 2024-01-15
categories: [Theory]
tags: [deep-learning, transformers, attention, nlp]
author: Uyen Tran
reading_time: 12
toc: true
mathjax: true
excerpt: "A deep dive into the mathematical foundations of transformer architectures, exploring self-attention mechanisms and positional encoding."
---

The Transformer architecture, introduced in the seminal paper "Attention is All You Need" by Vaswani et al., has revolutionized natural language processing and beyond. This post explores the mathematical foundations underlying this powerful architecture.

## Introduction

Transformers have become the backbone of modern NLP systems, powering models like BERT, GPT, and T5. Unlike recurrent architectures, transformers process sequences in parallel through self-attention mechanisms.

## Self-Attention Mechanism

The core innovation of transformers is the self-attention mechanism, which allows the model to weigh the importance of different positions in a sequence.

### Mathematical Formulation

Given an input sequence, we compute three vectors for each position:
- Query ($Q$)
- Key ($K$)  
- Value ($V$)

The attention is computed as:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

where $d_k$ is the dimension of the key vectors. The scaling factor $\frac{1}{\sqrt{d_k}}$ prevents the dot products from growing too large.

### Multi-Head Attention

Rather than performing a single attention function, transformers use multi-head attention:

$$
\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, ..., \text{head}_h)W^O
$$

where each head is computed as:

$$
\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)
$$

## Positional Encoding

Since transformers process sequences in parallel, they need explicit positional information. The original paper uses sinusoidal positional encodings:

$$
PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d_{model}}}\right)
$$

$$
PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d_{model}}}\right)
$$

where $pos$ is the position and $i$ is the dimension.

## Feed-Forward Networks

After attention, each position is processed by a feed-forward network:

$$
\text{FFN}(x) = \max(0, xW_1 + b_1)W_2 + b_2
$$

This is applied independently to each position.

## Layer Normalization and Residual Connections

Each sub-layer (attention and FFN) is wrapped in:

$$
\text{LayerNorm}(x + \text{Sublayer}(x))
$$

This combination of residual connections and layer normalization helps training deep networks.

## Code Example

Here's a simplified implementation of self-attention in Python:

```python
import numpy as np

def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)

def self_attention(Q, K, V):
    """
    Compute self-attention.
    
    Args:
        Q: Query matrix of shape (seq_len, d_k)
        K: Key matrix of shape (seq_len, d_k)
        V: Value matrix of shape (seq_len, d_v)
    
    Returns:
        Attention output of shape (seq_len, d_v)
    """
    d_k = Q.shape[-1]
    
    # Compute attention scores
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    
    # Apply softmax
    attention_weights = softmax(scores)
    
    # Apply weights to values
    output = np.matmul(attention_weights, V)
    
    return output, attention_weights

# Example usage
seq_len, d_k, d_v = 10, 64, 64
Q = np.random.randn(seq_len, d_k)
K = np.random.randn(seq_len, d_k)
V = np.random.randn(seq_len, d_v)

output, weights = self_attention(Q, K, V)
print(f"Output shape: {output.shape}")
print(f"Attention weights shape: {weights.shape}")
```

## Conclusion

The transformer architecture's elegance lies in its mathematical simplicity and computational efficiency. By replacing recurrence with attention, it enables parallelization while maintaining the ability to capture long-range dependencies.

## References

1. Vaswani, A., et al. (2017). "Attention is All You Need." NeurIPS.
2. Devlin, J., et al. (2018). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." arXiv.

---

*This post is part of my Theory series exploring mathematical foundations of modern ML architectures.*
