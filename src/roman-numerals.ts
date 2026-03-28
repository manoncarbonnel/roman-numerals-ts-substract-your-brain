
export const toRoman = (arabic: number): string | undefined => {
  const romanMap = new Map<number, string | undefined>();
  romanMap.set(1, 'I');
  romanMap.set(5, 'V');
  romanMap.set(10, 'X');
  romanMap.set(50, 'L');
  romanMap.set(100, 'C');
  romanMap.set(500, 'D');
  romanMap.set(1000, 'M');

  if (romanMap.has(arabic)) return romanMap.get(arabic);

  const descArabicKeys = [...romanMap.keys()].sort((a, b)=> { return b - a });

  let result = "";
  let rest = arabic;

  let milliers = Math.floor(arabic / 1000) % 10;
  let centaines = Math.floor(arabic / 100) % 10;
  let dizaines = Math.floor(arabic / 10) % 10;
  let unites = Math.floor(arabic / 1) % 10;

  result = "M".repeat(milliers);
  result = result + repetition(centaines, 'C', 'D', 'M');
  result = result + repetition(dizaines, 'X', 'L', 'C');
  result = result + repetition(unites, 'I', 'V', 'X');

  return result;
}

function repetition(power: number, begin: string, middle: string, end: string) {
  if (power === 9) {
    return begin + end;
  }
  if (power < 9 && power > 4) {
    return middle + begin.repeat(power - 5);
  }
  if (power === 4) {
    return begin + middle;
  }
  return begin.repeat(power);
}