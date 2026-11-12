export type Rates = Record<string, number>;

export async function fetchExchangeRates(base: string, symbols: string[]): Promise<Rates> {
  const key = import.meta.env.VITE_EXCHANGERATE_KEY;
  const symbolsList = symbols.join(',');

  const url = `https://vv6.exchangerate-api.com/v6/${key}/latest/${symbolsList}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Rates unavailable');
  const data = await res.json();
  if (!data?.rates) throw new Error('Rates unavailable');
  return data.rates as Rates;
}
