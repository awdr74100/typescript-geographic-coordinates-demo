import 'ol/ol.css';
import { Feature, Map, View } from 'ol/index';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { useGeographic } from 'ol/proj';

export default (longitude: number, latitude: number) => {
  document.querySelector<HTMLDivElement>('#map')!.replaceChildren(); // clear

  useGeographic();

  const place = [longitude, latitude];

  const point = new Point(place);

  new Map({
    target: 'map',
    view: new View({
      center: place,
      zoom: 17,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [new Feature(point)],
        }),
        style: {
          'circle-radius': 6,
          'circle-fill-color': 'red',
        },
      }),
    ],
  });
};
