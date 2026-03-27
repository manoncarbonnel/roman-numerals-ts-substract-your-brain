
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

  const descArabicKeys = [...romanMap.keys()].sort((a, b)=> { return b - a; });

  let result = "";
  let rest = arabic;

  let milliersRest = arabic % 1000;
  let milliers = (arabic - milliersRest) /1000;
  result = "M".repeat(milliers);

  let centainesRest = milliersRest % 100;
  let centaines = (milliersRest - centainesRest) /100;
  result = result + repetition(centaines, 'C', 'D', 'M');

  let unites = centainesRest % 10;
  let dizaines = (centainesRest - unites) /10;
  result = result + repetition(dizaines, 'X', 'L', 'C');

  result = result + repetition(unites, 'I', 'V', 'X');

  return result;
}

function repetition(puissance: number, debut: string, milieu: string, fin: string) {
  if (puissance === 9) {
    return debut + fin;
  }
  if (puissance === 8) {
    return milieu + debut.repeat(3);
  }
  if (puissance === 7) {
    return milieu + debut.repeat(2);
  }
  if (puissance === 6) {
    return milieu + debut.repeat(1);
  }
  if (puissance === 5) {
    return milieu + debut.repeat(0);
  }
  if (puissance === 4) {
    return debut + milieu;
  }
  return debut.repeat(puissance);
}