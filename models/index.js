// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Evento, EleccionOpcion, Eleccion, Post, Espacio } = initSchema(schema);

export {
  Evento,
  EleccionOpcion,
  Eleccion,
  Post,
  Espacio
};