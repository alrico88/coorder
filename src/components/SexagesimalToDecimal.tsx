import {
  convertDecimalToSexagesimal,
  convertSexagesimalLatLonToDecimalLatLon,
} from '../helpers/coords';
import InputCard from './InputCard';

export default function SexagesimalToDecimal() {
  return (
    <>
      <InputCard
        title="Sexagesimal to decimal coordinates"
        inputTitle="Sexagesimal coordinates"
        btnText="Convert to decimal"
        placeholders={{
          latitude: "N 40º 21' 18''",
          longitude: "W 3º 24' 10''",
        }}
        resultTitle="Decimal coordinates: [latitude, longitude]"
        converter={(latitude, longitude) => {
          return convertSexagesimalLatLonToDecimalLatLon(latitude, longitude);
        }}
        locationHandler={(position) => {
          return {
            latitude: convertDecimalToSexagesimal(
              position.coords.latitude,
              'lat',
            ),
            longitude: convertDecimalToSexagesimal(
              position.coords.longitude,
              'lon',
            ),
          };
        }}
        inputPrefix="sexagesimalToDecimal"
      />
    </>
  );
}
