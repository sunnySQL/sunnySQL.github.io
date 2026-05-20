---
title: "Olympus"
excerpt: "Python + XGBoost + Streamlit"
collection: portfolio
sort_date: 2026-05-18
---

## Project Description
Olympus is a Python-based machine learning research platform for evaluating short-term market signals. The project is built around a realistic question: can a model's predictions survive leakage-aware labels, chronological validation, baseline comparisons, walk-forward testing, and deployment audit checks?

Rather than presenting the system as a trading bot, Olympus focuses on honest model evaluation. It builds market features, trains XGBoost models, scores ticker-level signals, compares strategies against baselines, and generates an audit verdict that can reject weak signals before they are treated as deployable.


## System Workflow

### 1. Market Data and Feature Generation
Olympus collects price and news-related inputs across a configurable universe of liquid ETFs, sector funds, commodities, and large-cap equities. The feature pipeline builds technical indicators, volatility features, momentum signals, cross-asset context, cross-sectional ranks, calendar features, and sparse sentiment inputs.

---

### 2. Model Training and Calibration
The training pipeline uses chronological splits so the model trains on past data and evaluates on future data. XGBoost classification models are trained with recency weighting, sparse-feature pruning, variance pruning, optional per-ticker modeling, and calibration checks.

---

### 3. Realistic Backtesting
Olympus evaluates model outputs using next-open execution assumptions, transaction costs, long-only and long/short rules, cash baselines, SPY benchmarks, equal-weight portfolio baselines, and ranking-based strategies. This helps distinguish a useful signal from a result that only looks good under unrealistic assumptions.

---

### 4. Model Audit and Portfolio Export
The system generates an audit report that summarizes whether the current signal passes or fails deployment checks. The current model is rejected for trading, which is an intentional part of the project: Olympus demonstrates how to identify weak ML signals and communicate limitations clearly instead of overstating performance.


## Project Screenshots

### Audit Dashboard
![Olympus Audit Dashboard](/olympuspics/landingpage.png)
*Main Olympus dashboard showing model status, ticker coverage, probability summary, and the deployment audit entry point.*

### Model Health
![Olympus Model Health](/olympuspics/modelhealth.png)
*Model health view with training metrics, walk-forward folds, feature importance, and model bundle details.*

### Backtest Results
![Olympus Backtest Results](/olympuspics/backtest.png)
*Backtest comparison showing model strategies against passive and random baselines under realistic execution assumptions.*

### Signal Chart
![Olympus Signal Chart](/olympuspics/chart.png)
*Ticker-level signal inspection with price context, technical features, probability output, and key model drivers.*

### Deployment Audit Log
![Olympus Deployment Audit Log](/olympuspics/auditlog.png)
*Generated audit checklist showing pass, monitor, and fail gates for deployment readiness.*


## Key Features:
Leakage-Aware Target Design:
Creates realistic next-open and multi-day research labels while guarding against benchmark leakage and future information exposure.

Chronological Model Evaluation:
Uses time-based train/test splits, walk-forward retraining, and holdout scoring so the model is evaluated on future periods instead of randomized rows.

Model Audit Reporting:
Generates a deployment audit report with pass, monitor, and fail checks covering data coverage, label integrity, feature health, holdout quality, ranking alpha, raw feature sanity, and walk-forward performance.

Backtesting and Baseline Comparison:
Compares model strategies against SPY, equal-weight long-only portfolios, random baselines, cash, and top-ranked basket strategies with transaction costs and realistic execution assumptions.

Ranking Alpha Analysis:
Tests whether model scores create useful ordering power by comparing top-ranked assets against bottom-ranked assets and SPY.

Streamlit Dashboard:
Provides a dashboard for model status, audit verdicts, ticker-level signal review, price charts, model health, backtests, and paper-trade monitoring.

Tested Research Pipeline:
Includes automated tests covering feature generation, prediction bundles, evaluation utilities, walk-forward feature sweeps, model audit generation, and CLI behavior.


## Tech Stack:
Language: Python

Machine Learning: XGBoost, scikit-learn, Platt calibration

Data Processing: pandas, NumPy, yfinance, SQLAlchemy

Dashboard: Streamlit, Plotly

Evaluation: Walk-forward validation, backtesting, ranking-alpha analysis, target benchmarking

Reporting: Generated Markdown/HTML audit reports, CSV artifacts

Testing: pytest
