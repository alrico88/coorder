import { Map, Marker, ZoomControl } from "pigeon-maps";

interface IPreviewMapProps {
  coord: [number, number];
}

export default function PreviewMap(props: IPreviewMapProps) {
  return (
    <div class="container">
      <div class="row pb-4">
        <div class="col">
          <div class="border map-height">
            {/*
            // @ts-ignore */}
            <Map
              defaultCenter={props.coord}
              defaultZoom={13}
              center={props.coord}
              metaWheelZoom={true}
              metaWheelZoomWarning="Use META+scroll to zoom"
            >
              <Marker anchor={props.coord} width={50} />
              <ZoomControl />
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}
