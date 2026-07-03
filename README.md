# 💰 Pricing Management – AI-Powered Film Licensing Pricing Engine

Pricing Management is a full-stack AI-powered platform that estimates fair licensing price ranges for films and television content based on deal parameters, rights, territories, platforms, and commercial constraints.

The platform combines AI reasoning with deterministic pricing logic to generate accurate licensing estimates, compare multiple deal scenarios, and produce professional pricing reports for media acquisition teams.

Built with FastAPI, SQLite, Python, and modern web technologies, the system is designed to streamline pricing decisions for distributors, broadcasters, and streaming platforms.

---

# 📂 Project Structure

```
Pricing-Management/
│
├── static/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── index.html
│   └── assets/
│
├── templates/
│   └── index.html
│
├── main.py
├── pricing_cache.db
├── requirements.txt
├── settings.json
├── .env
└── README.md
```

---

# ✨ Features

### 💰 AI Licensing Price Estimation

Estimate fair licensing price ranges for movies and TV series using deal parameters, content metadata, AI reasoning, and market benchmarks.

---

### 📊 Multi-Deal Comparison

Compare multiple licensing scenarios simultaneously by modifying:

- Territory
- Platform
- Rights Type
- License Duration
- Exclusivity
- Windowing Strategy

to evaluate the best commercial option.

---

### 🤖 AI-Powered Pricing Reasoning

Generates human-readable pricing explanations using an intelligent fallback pipeline:

- Google Gemini
- Groq LLM
- Deterministic Pricing Engine

ensuring reliable recommendations even when AI services are unavailable.

---

### 🎬 Series & Season Support

Supports complex licensing scenarios including:

- Individual Seasons
- Multiple Season Packages
- Full Series Acquisition
- Partial Library Purchases
- Incremental Rights Acquisition

---

### 📺 Episode-Level Pricing

Automatically retrieves season information and episode counts while allowing manual adjustments for incomplete seasons, holdbacks, and custom licensing agreements.

---

### 📄 PDF Deal Memo Export

Generate professional A4 pricing reports including:

- Executive Summary
- Estimated Licensing Price
- Deal Parameters
- Pricing Breakdown
- AI Analyst Reasoning
- Season Information
- Commercial Notes

---

### ⚡ Smart Pricing Cache

SQLite-powered caching stores previous pricing estimates using hashed deal parameters, dramatically reducing repeated AI requests while automatically invalidating outdated pricing models.

---

### 📈 Pricing Analytics

Provides pricing metrics including:

- Cache Hit Ratio
- Request Statistics
- Error Tracking
- Pricing History
- Model Performance

---

### 🔒 Rate Limiting

Implements per-IP request limiting to prevent abuse and ensure stable API performance.

---

### 🔌 REST API Architecture

Scalable FastAPI backend exposing REST endpoints for pricing estimation, deal comparison, PDF generation, analytics, and cache management.

---

# 🛠️ Technologies Used

## Backend

- FastAPI
- Python
- SQLite
- REST APIs
- Pydantic

---

## Artificial Intelligence

- Google Gemini
- Groq LLM
- Prompt Engineering
- Deterministic Pricing Engine
- AI Reasoning Pipeline

---

## Frontend

- HTML5
- CSS3
- JavaScript

---

## Data Sources

- TMDB API
- OMDb API
- IMDb Metadata

---

## Tools

- Git
- GitHub
- VS Code
- Postman

---

# 💻 System Requirements

Minimum Requirements

- Python 3.10+
- SQLite
- Internet connection for AI APIs
- Modern Web Browser

Recommended

- Python 3.11+
- FastAPI
- Google Gemini API Key
- Groq API Key

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Pricing-Management.git

cd Pricing-Management
```

---

## Create Virtual Environment

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY

GROQ_API_KEY=YOUR_API_KEY

TMDB_API_KEY=YOUR_API_KEY
```

---

## Run Application

```bash
uvicorn main:app --reload
```

Application runs at:

```
http://localhost:8000
```

---

# 🧠 How It Works

1. User enters licensing deal parameters.
2. Movie metadata is collected from external APIs.
3. Pricing inputs are normalized and validated.
4. AI models generate commercial pricing recommendations.
5. Deterministic fallback logic ensures consistent estimates.
6. Results are cached in SQLite.
7. Users compare multiple deals and export professional pricing reports.

---

# 📊 Pricing Workflow

```
Deal Parameters
        │
        ▼
Metadata Collection
        │
        ▼
AI Pricing Analysis
        │
        ▼
Pricing Engine
        │
        ▼
SQLite Cache
        │
        ▼
Comparison Dashboard
        │
        ▼
PDF Deal Memo
```

---

# 🔧 Troubleshooting

### Gemini API Issues

Verify the API key is configured correctly in the `.env` file.

---

### Groq API Errors

Ensure the Groq API key is valid and request limits have not been exceeded.

---

### Cache Issues

Delete `pricing_cache.db` to regenerate pricing results if required.

---

### PDF Generation Errors

Ensure all required Python dependencies are installed before exporting reports.

---

# 🚀 Future Enhancements

- Multi-user Authentication
- Pricing History Dashboard
- Currency Conversion
- Batch Licensing Estimates
- Cloud Deployment
- Docker Support
- Redis Caching
- AI Confidence Scoring
- Contract Recommendation Engine

---

# 📝 License

This project is developed for educational, research, and enterprise AI demonstration purposes.

---

## 👨‍💻 Developer

**Vedant Vyas**

AI Engineer | Full Stack Developer

Built as an enterprise AI platform for intelligent media licensing price estimation and deal evaluation.
