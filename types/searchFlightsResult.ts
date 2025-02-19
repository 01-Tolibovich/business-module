export type Departure = {
  time: string;
  airport: string;
};

export type Arrival = {
  time: string;
  airport: string;
};

export type Segments = {
  aircraft: string;
  service_class: {
    code: "";
    name: "";
  };
  free_seats: number;
  departure: Departure;
  arrival: Arrival;
  baggage: string;
  hand_luggage: string;
};

export type Routes = {
  map(arg0: (route: unknown) => unknown): unknown;
  duration: number;
  segments: Segments[];
};

export type Flights = {
  rec_id: string;
  routes: Routes[];
  config_name: string;
  price: {
    TJS: string;
  };
  validating_supplier: string;
};

export type Included = {
  supplier: {
    [key: string]: {
      name: {
        ru: string;
      };
    };
  };
  airport: {
    [key: string]: {
      name: {
        ru: string;
      };
    };
  };
};

export type SearchTypes = {
  client_code: string;
  flights: Flights[];
  included: Included;
  message: string;
};
