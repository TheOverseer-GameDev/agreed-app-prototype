# Vendored Tesseract.js (offline OCR)

Pinned so photo scan and PDF OCR work with no CDN.

| Package | Version | License |
|---|---|---|
| tesseract.js | 5.1.1 | Apache-2.0 (`LICENSE-tesseract.js.md`) |
| tesseract.js-core | 5.1.1 | Apache-2.0 (`LICENSE-tesseract.js-core`) |
| @tesseract.js-data/eng | 1.0.0 | (lang data; LSTM `4.0.0_best_int`) |

## Why these files

`Tesseract.recognize()` uses OEM LSTM_ONLY, so only the two LSTM cores are shipped (SIMD and non-SIMD fallback). The legacy (non-LSTM) cores and the 10.9 MB `4.0.0` traineddata are omitted on purpose.

Approximate sizes (uncompressed on disk):

- `tesseract.min.js` — 67 KB
- `worker.min.js` — 124 KB
- `tesseract-core-simd-lstm.wasm.js` — 3.76 MiB (preferred on SIMD devices)
- `tesseract-core-lstm.wasm.js` — 3.76 MiB (fallback)
- `eng.traineddata.gz` — 2.82 MiB (`4.0.0_best_int`)
- **Total about 10.53 MiB**

The service worker precaches only the two small JS files. The cores and traineddata are lazy-cached on the first Pro photo scan so a first visit is not billed ~10 MiB. After that first scan (or after the APK is installed, where the files are already on disk), OCR works fully offline.
