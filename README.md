# Multi-Sport Athlete Performance & Injury-Risk Platform

Ingests training load, biometric, movement across sports, models injury risk sport-specifically, helps coaches plan periodization.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery
- **Frontend:** React 18 + Vite
- **15 Apps:** athletes, training, biometrics, movement, injury_risk, periodization, wearables, coaching, assessments, api, frontend, analytics, compliance, integrations, reports

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t sport-platform .
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
```

## Tests
```bash
pytest -q
```

## Features
- **Load:** sRPE * duration, volume, intensity
- **Injury risk:** ACWR 0.8-1.3 sweet spot, monotony, strain sport-specific
- **Biometrics:** HR, HRV, sleep, skin temp
- **Periodization:** micro/meso/macro, taper

## License
Proprietary
