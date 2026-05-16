---
title: "TimeScout"
excerpt: "Next.js + TypeScript + MySQL"
collection: portfolio
sort_date: 2026-04-01
---

## Project Description
TimeScout is a full-stack search aggregator for watch listings across the web. The project is built around the idea of helping users search across scattered marketplace listings from one clean interface, while linking them back to the original source to complete any transaction.

The current version focuses on Reddit r/Watchexchange, where sellers often write free-form listings with inconsistent prices, brands, references, conditions, sold updates, and bundle descriptions. TimeScout ingests these messy listings, preserves the raw source text, normalizes key fields into a MySQL database, and exposes both a public search experience and admin tools for improving parser and model quality over time.


## System Workflow

### 1. Listing Ingestion
Marketplace listings are collected through source-specific ingestion scripts. Reddit r/Watchexchange is the active source, while experimental adapters exist for future marketplace expansion. Each ingest run fetches listing data, deduplicates records, updates freshness timestamps, and stores the raw listing text alongside parsed fields.

---

### 2. Parsing and Classification
After listings are collected, TimeScout extracts useful watch data such as price, brand, reference number, condition, watch type, sold status, and bundle signals. The parsing pipeline combines rule-based logic, local machine learning classifiers, and optional OpenAI fallback classification for rows that need additional help.

---

### 3. Search and Filtering
Users can search listings by keyword and filter by structured fields such as brand, condition, availability, and price range. Search state is stored in URL query parameters, making results easy to share and revisit. Each result links users back to the original marketplace listing instead of processing payments inside TimeScout.

---

### 4. Admin Review and Data Quality
TimeScout includes admin review workflows for low-confidence or ambiguous data. Review queues help identify unknown brands, multi-brand false positives, bundle edge cases, sold detection issues, and parser failures. Reviewed examples can later be exported into gold evaluation data or used to improve local models.


## Project Screenshots

### Landing Page
![Landing Page](/timescoutpics/landingpage.png)
*Main TimeScout search page with a focused entry point for finding watch listings.*

### Search Results
![Search Results](/timescoutpics/search.png)
*Search results page showing parsed watch listings with prices, source details, and outbound links.*

### Search Filters and Sorting
![Search Filters and Sorting](/timescoutpics/search_filter_sort.png)
*Filtered search view with brand, price, condition, availability, and sorting controls.*

### Admin Review Queue
![Admin Review Queue](/timescoutpics/admin_review.png)
*Human-in-the-loop review workflow for correcting ambiguous listings and improving parser quality.*

### Data Health Dashboard
![Data Health Dashboard](/timescoutpics/admin_data-health.png)
*Admin dashboard for monitoring listing quality, parser coverage, and ingestion health.*

### Classifier Dashboard
![Classifier Dashboard](/timescoutpics/admin_classifier.png)
*Classifier tools for reviewing model-assisted predictions and improving structured extraction.*

### Analytics Dashboard
![Analytics Dashboard](/timescoutpics/admin_analytics.png)
*Analytics view for understanding listing activity and search engagement.*

### Click Tracking Dashboard
![Click Tracking Dashboard](/timescoutpics/admin_clicks.png)
*Privacy-aware outbound click tracking used to measure which listings users interact with.*


## Key Features:
Reddit Marketplace Ingestion:
Fetches r/Watchexchange listings, handles deduplication, tracks freshness, and stores raw source text for future reprocessing.

Structured Search Experience:
Provides a public search interface with keyword search, brand filtering, price filtering, condition filtering, sorting, and outbound links to the original listing source.

Messy Text Parsing:
Extracts price, brand, reference number, sold status, condition, and bundle indicators from inconsistent seller-written listing titles, bodies, and comments.

Machine Learning Classification:
Uses local TF-IDF and Logistic Regression model artifacts for runtime classification, with Python training scripts for rebuilding models from labeled data.

Human-in-the-Loop Review:
Includes admin review queues, reviewed-unknown handling, multi-brand review clearing, data-health pages, and gold evaluation workflows to improve parser accuracy over time.

Click Tracking and Analytics:
Tracks outbound listing clicks in a privacy-aware way so the app can measure which listings and sources users engage with.

Scheduled Maintenance:
Supports cron-style ingestion, stale listing handling, price rescue workflows, parser backfills, local model backfills, and AI-assisted backfills.


## Tech Stack:
Framework: Next.js 15, React 19, TypeScript

Frontend: Tailwind CSS, server-rendered search pages, reusable React components

Database: MySQL 8

ORM: Drizzle ORM, Drizzle Kit

Backend: Next.js App Router, Node.js, tsx scripts

Machine Learning: Python, scikit-learn, TF-IDF, Logistic Regression

AI Classification: Optional OpenAI fallback for difficult rows

Testing: Vitest, parser tests, review workflow tests, gold evaluation tests

Deployment: Vercel-ready Next.js app with protected cron endpoints
