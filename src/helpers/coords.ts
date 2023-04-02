import sexagesimal from '@mapbox/sexagesimal';

export function convertSexagesimalToDecimal(val: string): number {
  return sexagesimal(val);
}

export function convertSexagesimalLatLonToDecimalLatLon(
  lat: string,
  lon: string,
): string {
  return `${convertSexagesimalToDecimal(lat)}, ${convertSexagesimalToDecimal(
    lon,
  )}`;
}

export function convertDecimalToSexagesimal(
  val: number | string,
  type: 'lat' | 'lon',
): string {
  return sexagesimal.format(Number(val), type);
}

export function convertDecimalLatLonToSexagesimalLatLon(
  lat: string,
  lon: string,
): string {
  return `${convertDecimalToSexagesimal(
    lat,
    'lat',
  )}, ${convertDecimalToSexagesimal(lon, 'lon')}`;
}
