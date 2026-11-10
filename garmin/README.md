# Elia · Running Intelligence

Nuova applicazione modulare per l'analisi della performance running.

## Stack
- Next.js 14 + React + TypeScript
- Apache ECharts
- Tailwind CSS
- Dataset tipizzato separato dai componenti

## Avvio
```bash
npm install
npm run dev
```

## Build statica
```bash
npm run build
```

L'output statico è generato in `out/` ed è pubblicabile su GitHub Pages. I dati attualmente incorporati sono lo snapshot presente nella precedente `elia/index.html` (22/09/2026–09/11/2026); non viene simulato un collegamento live a Garmin. Per sincronizzazioni automatiche e persistenza servirà collegare un backend/API.
