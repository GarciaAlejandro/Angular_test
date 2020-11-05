export interface InterfaceBusqueda {
  "success": boolean,
  "payload": {
      "asks":Array <{
          "book": string,
          "price": string,
          "amount": string
      } >,
      "bids":Array<{
          "book": string,
          "price": string,
          "amount": string
      }>,
      "updated_at": string,
      "sequence": string
  }
}

