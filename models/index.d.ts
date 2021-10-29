import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EventoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EleccionOpcionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EleccionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EspacioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Evento {
  readonly id: string;
  readonly titulo?: string;
  readonly cuerpo?: string;
  readonly online?: boolean;
  readonly direccion?: string;
  readonly direccionURL?: string;
  readonly comentSys?: string;
  readonly espacioID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Evento, EventoMetaData>);
  static copyOf(source: Evento, mutator: (draft: MutableModel<Evento, EventoMetaData>) => MutableModel<Evento, EventoMetaData> | void): Evento;
}

export declare class EleccionOpcion {
  readonly id: string;
  readonly etiqueta?: string;
  readonly valor?: string;
  readonly eleccionID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EleccionOpcion, EleccionOpcionMetaData>);
  static copyOf(source: EleccionOpcion, mutator: (draft: MutableModel<EleccionOpcion, EleccionOpcionMetaData>) => MutableModel<EleccionOpcion, EleccionOpcionMetaData> | void): EleccionOpcion;
}

export declare class Eleccion {
  readonly id: string;
  readonly titulo?: string;
  readonly cuerpo?: string;
  readonly comentSys?: string;
  readonly espacioID?: string;
  readonly EleccionOpcions?: (EleccionOpcion | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Eleccion, EleccionMetaData>);
  static copyOf(source: Eleccion, mutator: (draft: MutableModel<Eleccion, EleccionMetaData>) => MutableModel<Eleccion, EleccionMetaData> | void): Eleccion;
}

export declare class Post {
  readonly id: string;
  readonly espacioID?: string;
  readonly titulo?: string;
  readonly cuerpo?: string;
  readonly comentSys?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Espacio {
  readonly id: string;
  readonly nombre: string;
  readonly untitledfield?: string;
  readonly Posts?: (Post | null)[];
  readonly Eleccions?: (Eleccion | null)[];
  readonly Eventos?: (Evento | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Espacio, EspacioMetaData>);
  static copyOf(source: Espacio, mutator: (draft: MutableModel<Espacio, EspacioMetaData>) => MutableModel<Espacio, EspacioMetaData> | void): Espacio;
}