export interface Listing {
  node: {
    listing: {
      id: string;
      // Add other properties as needed
    };
  };
}

export interface Edge {
  data: {
    marketplace_search: {
      feed_units: {
        edges: Listing[];
      };
    };
  };
}
