
# Time date formatter

This package allows you to format a date and time in all sorts of forms.


## Installation

Install with npm

```bash
  npm i time-date-formatter
```
    
## How to use



```bash
  const formatDateTime = require('time-date-formatter')
```
```bash
  formatDateTime('Array')  
// [ 'Sat', 'Jun', '04', '2022', '02:18:08' ]  

formatDateTime('HH:MM')  
// 02:18

formatDateTime('HH:MM:SS')  
// 02:18:08

formatDateTime('AM/PM')  
// 2:18:08 AM

formatDateTime('DD/MM/YYYY', '.')
// formatDateTime('DD/MM/YYYY', [separator-optional])  
// 4.6.2022  
// 4/6/2022 default

formatDateTime('MM/DD/YYYY', 'k')  
// formatDateTime('MM/DD/YYYY', [separator-optional])  
// 6k4k2022  
// 6/4/2022 default  

```

