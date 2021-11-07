import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Persona} from './persona.model';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_producto: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  total: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @belongsTo(() => Persona)
  personaId: string;

  @property({
    type: 'string',
  })
  productoId?: string;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
