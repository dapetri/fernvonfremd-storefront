/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FvfInfo
// ====================================================

export interface FvfInfo_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface FvfInfo_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: FvfInfo_products_edges_node;
}

export interface FvfInfo_products {
  __typename: "ProductCountableConnection";
  edges: FvfInfo_products_edges[];
}

export interface FvfInfo {
  /**
   * List of the shop's products.
   */
  products: FvfInfo_products | null;
}
