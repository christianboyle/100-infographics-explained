const largeNumber = 982_563_162
const bytes = 0b111_001_101
const octal = 0o123_476
const hex = 0xfab_f01
const scientificNotation = 1.123_312_32e-16

console.table([largeNumber, bytes, octal, hex, scientificNotation])

/*
┌─────────┬────────────────┐
│ (index) │     Values     │
├─────────┼────────────────┤
│    0    │   982563162    │
│    1    │      461       │
│    2    │     42814      │
│    3    │    16432897    │
│    4    │ 1.12331232e-16 │
└─────────┴────────────────┘
*/
