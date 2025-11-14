---
layout: post
title: "Gradient Descent and Optimization: Course Notes"
date: 2024-02-10
categories: [Notes]
tags: [optimization, gradient-descent, machine-learning]
author: Uyen Tran
reading_time: 8
toc: true
mathjax: true
excerpt: "Comprehensive notes on gradient descent algorithms and optimization techniques in machine learning."
---

These are my notes from studying optimization algorithms, focusing on gradient descent and its variants commonly used in machine learning.

## Basic Gradient Descent

Gradient descent is an iterative optimization algorithm for finding the minimum of a function.

### Algorithm

Given a differentiable function $f(\theta)$, we update parameters as:

$$
\theta_{t+1} = \theta_t - \eta \nabla f(\theta_t)
$$

where $\eta$ is the learning rate.

### Batch vs. Stochastic vs. Mini-Batch

| Type | Update Rule | Advantages | Disadvantages |
|------|-------------|------------|---------------|
| Batch GD | Uses all data | Stable convergence | Slow for large datasets |
| Stochastic GD | Uses one sample | Fast updates | Noisy gradients |
| Mini-batch GD | Uses batch of samples | Balanced | Requires tuning batch size |

## Momentum

Momentum helps accelerate gradient descent by accumulating velocity:

$$
v_t = \beta v_{t-1} + \eta \nabla f(\theta_t)
$$

$$
\theta_{t+1} = \theta_t - v_t
$$

Typical value: $\beta = 0.9$

## RMSprop

RMSprop adapts the learning rate for each parameter:

$$
E[g^2]_t = \beta E[g^2]_{t-1} + (1-\beta)g_t^2
$$

$$
\theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{E[g^2]_t + \epsilon}}g_t
$$

where $g_t = \nabla f(\theta_t)$ and $\epsilon$ is a small constant for numerical stability.

## Adam Optimizer

Adam (Adaptive Moment Estimation) combines momentum and RMSprop:

$$
m_t = \beta_1 m_{t-1} + (1-\beta_1)g_t
$$

$$
v_t = \beta_2 v_{t-1} + (1-\beta_2)g_t^2
$$

Bias-corrected estimates:

$$
\hat{m}_t = \frac{m_t}{1-\beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1-\beta_2^t}
$$

Update rule:

$$
\theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{\hat{v}_t + \epsilon}}\hat{m}_t
$$

Default hyperparameters: $\beta_1 = 0.9$, $\beta_2 = 0.999$, $\epsilon = 10^{-8}$

## Learning Rate Schedules

Common learning rate schedules:

1. **Step Decay**: Reduce $\eta$ by factor every $k$ epochs
2. **Exponential Decay**: $\eta_t = \eta_0 e^{-kt}$
3. **Cosine Annealing**: $\eta_t = \eta_{min} + \frac{1}{2}(\eta_{max} - \eta_{min})(1 + \cos(\frac{t\pi}{T}))$

## Practical Tips

> **Key Insight**: Choice of optimizer and learning rate schedule can be as important as model architecture.

- Start with Adam optimizer as a good default
- Use learning rate warmup for transformers
- Monitor gradient norms to detect vanishing/exploding gradients
- Consider gradient clipping for RNNs

## Implementation Notes

```python
import torch.optim as optim

# Adam optimizer
optimizer = optim.Adam(model.parameters(), lr=0.001, 
                       betas=(0.9, 0.999), eps=1e-8)

# Learning rate scheduler
scheduler = optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=100)

# Training loop
for epoch in range(num_epochs):
    for batch in dataloader:
        optimizer.zero_grad()
        loss = model(batch)
        loss.backward()
        optimizer.step()
    scheduler.step()
```

## Summary

- **Vanilla GD**: Simple but can be slow
- **Momentum**: Accelerates in relevant directions
- **RMSprop**: Adapts learning rate per parameter
- **Adam**: Combines momentum and adaptive learning rates (usually best default)

## Further Reading

- Kingma & Ba (2014): "Adam: A Method for Stochastic Optimization"
- Ruder (2016): "An overview of gradient descent optimization algorithms"
- Smith (2017): "Cyclical Learning Rates for Training Neural Networks"

---

*These notes will be updated as I learn more about optimization techniques.*
