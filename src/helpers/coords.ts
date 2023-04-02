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
  const { whole, minutes, seconds, dir } = sexagesimal.coordToDMS(
    Number(val),
    type,
  );

  return `${dir} ${whole}º ${minutes}' ${seconds}''`;
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
