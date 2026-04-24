window.BENCHMARK_DATA = {
  "lastUpdate": 1777025183073,
  "repoUrl": "https://github.com/oadiazm/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99ea7d2de7a5730498cac249c70f520e485cd92a",
          "message": "Merge pull request #1505 from yamadashy/chore/temp-disable-website-auto-pack\n\nchore(website): Temporarily disable auto-pack on repo query param",
          "timestamp": "2026-04-24T00:44:21+09:00",
          "tree_id": "87a8740ca2718ea06aada55e42ae49584c201325",
          "url": "https://github.com/oadiazm/repomix/commit/99ea7d2de7a5730498cac249c70f520e485cd92a"
        },
        "date": 1777025182632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 927,
            "range": "±48",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 906ms, Q3: 954ms\nAll times: 870, 874, 875, 882, 885, 891, 906, 906, 908, 912, 915, 918, 920, 920, 922, 927, 929, 929, 940, 940, 949, 952, 954, 955, 959, 980, 987, 1041, 1094, 1356ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1477,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1471ms, Q3: 1500ms\nAll times: 1457, 1460, 1465, 1469, 1469, 1471, 1473, 1473, 1474, 1475, 1477, 1480, 1481, 1488, 1490, 1500, 1508, 1509, 1509, 1530ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1818,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1803ms, Q3: 1841ms\nAll times: 1769, 1788, 1797, 1802, 1803, 1804, 1811, 1814, 1817, 1818, 1819, 1826, 1831, 1836, 1841, 1850, 1853, 1860, 1884ms"
          }
        ]
      }
    ]
  }
}