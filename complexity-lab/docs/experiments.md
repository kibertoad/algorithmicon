# Complexity experiments

## General notes

* Note that we are not counting steps for every single operation we make. Reason for this is that time complexity is only
measuring rate at which execution time is growing based on input size increase, it is irrelevant whether adding one more element
is causing us to execute one step or three. For the purpose of complexity analysis, O(2N) is actually O(N)
