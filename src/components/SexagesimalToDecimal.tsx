import {
  convertSexagesimalToDecimal,
  convertDecimalToSexagesimal,
  convertSexagesimalLatLonToDecimalLatLon,
} from '../helpers/coords';
import { IInputCardProps } from '../interfaces/map';
import InputCard from './InputCard';

export default function SexagesimalToDecimal(props: IInputCardProps) {
  return (
    <>
      <InputCard
        title="Sexagesimal to decimal coordinates"
        inputTitle="Sexagesimal coordinates"
        btnText="Convert to decimal"
        placeholders={{
          latitude: "40º 21' 18'' N",
          longitude: "3º 24' 10'' W",
        }}
        resultTitle="Decimal coordinates: [latitude, longitude]"
        converter={(latitude, longitude) => {
          props.onShowInMap([
            convertSexagesimalToDecimal(latitude),
            convertSexagesimalToDecimal(longitude),
          ]);

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
