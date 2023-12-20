# Difference In Days

## Instructions

Write a JavaScript function called `dateDiffInDays` that takes two dates as inputs and returns the difference in days between the two dates. The function should handle both past and future dates.

## Examples

```
dateDiffInDays("2022-03-01", "2022-03-15"); // 14
dateDiffInDays("2022-03-01", "2022-03-01"); // 0
dateDiffInDays("2022-03-15", "2022-03-01"); // -14
```

## Acceptance Criteria

- The function should return the difference in days between the two dates.
- The function should accept two inputs, both of which are valid dates.
- The function should return 0 if the two dates are the same.
- The function should return a negative number if the second date is before the first date.
- The function should handle both past and future dates.
