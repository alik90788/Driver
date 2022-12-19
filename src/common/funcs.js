export function stringTrim(value, index = 2) {
    if (value !== undefined) {
      const parts = value && value.split(',');
      const firstTwo = parts.slice(0, index);
      const result = firstTwo.join(',');
      return result;
    }
  }
  