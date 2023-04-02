import { useSignal, useComputed } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { locateMe } from '../helpers/location';

interface IInputCardProps {
  title: string;
  inputTitle: string;
  btnText: string;
  locationHandler: (pos: GeolocationPosition) => {
    latitude: string;
    longitude: string;
  };
  converter: (latitude: string, longitude: string) => string;
  resultTitle: string;
  placeholders: {
    latitude: string;
    longitude: string;
  };
  inputPrefix: string;
}

function InputCard(props: IInputCardProps) {
  const latitude = useSignal('');
  const longitude = useSignal('');

  const latInputId = `${props.inputPrefix}_latitude`;
  const lonInputId = `${props.inputPrefix}_longitude`;

  function clearInputs() {
    latitude.value = '';
    longitude.value = '';
  }

  const btnDisabled = useComputed(() => {
    return latitude.value === '' || longitude.value === '';
  });

  const result = useSignal('');

  const copied = useSignal(false);
  const disabledCopy = useComputed(() => result.value === '');

  useEffect(() => {
    result.value = '';
  }, [latitude.value, longitude.value]);

  async function handleLocate() {
    const position = await locateMe();
    const { latitude: locLat, longitude: locLon } =
      props.locationHandler(position);

    latitude.value = locLat;
    longitude.value = locLon;
  }

  async function copyToClip() {
    try {
      await navigator.clipboard.writeText(result.value);

      copied.value = true;

      setTimeout(() => {
        copied.value = false;
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div class="col">
      <h2 class="mb-0 py-4">{props.title}</h2>
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">{props.inputTitle}:</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              result.value = props.converter(latitude.value, longitude.value);
            }}
          >
            <div class="vstack gap-2">
              <div class="row row-cols-md-2 row-cols-1 g-2">
                <div class="col">
                  <label class="form-label" for={latInputId}>
                    Latitude
                  </label>
                  <input
                    id={latInputId}
                    type="text"
                    class="form-control"
                    value={latitude.value}
                    placeholder={`Ex: ${props.placeholders.latitude}`}
                    onInput={(e) => {
                      latitude.value = (e.target as HTMLInputElement).value;
                    }}
                  />
                </div>
                <div class="col">
                  <label class="form-label" for={lonInputId}>
                    Longitude
                  </label>
                  <input
                    id={lonInputId}
                    type="text"
                    class="form-control"
                    value={longitude.value}
                    placeholder={`Ex: ${props.placeholders.longitude}`}
                    onInput={(e) => {
                      longitude.value = (e.target as HTMLInputElement).value;
                    }}
                  />
                </div>
              </div>
              <div class="hstack gap-2 justify-content-between">
                <button
                  class="btn btn-link p-0"
                  type="button"
                  onClick={handleLocate}
                >
                  Locate me
                </button>
                <button
                  class="btn btn-link text-danger p-0"
                  type="button"
                  onClick={clearInputs}
                >
                  Clear
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  class="btn btn-primary w-100"
                  disabled={btnDisabled}
                >
                  {props.btnText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.resultTitle}</h5>
          <input
            type="text"
            class="form-control"
            readOnly
            value={result.value}
          />
          <button
            class="btn btn-light mt-2 w-100"
            onClick={copyToClip}
            disabled={disabledCopy}
          >
            {copied.value ? 'Copied' : 'Copy to clipboard'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputCard;
