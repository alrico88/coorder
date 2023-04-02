import { convertDecimalLatLonToSexagesimalLatLon } from '../helpers/coords';
import InputCard from './InputCard';

export default function DecimalToSexagesimal() {
  return (
    <InputCard
      title="Decimal to sexagesimal coordinates"
      inputTitle="Decimal coordinates"
      btnText="Convert to sexagesimal"
      resultTitle="Sexagesimal coordinates"
      placeholders={{
        latitude: '40.4505',
        longitude: '-3.2206',
      }}
      converter={(latitude, longitude) => {
        return convertDecimalLatLonToSexagesimalLatLon(latitude, longitude);
      }}
      locationHandler={(position) => {
        return {
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        };
      }}
      inputPrefix="decimalToSexagesimal"
    />
  );
}
