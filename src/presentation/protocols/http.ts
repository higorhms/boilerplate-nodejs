export interface HttpResponse {
  statusCode: number;
  body: any;
}

export interface HttpRequest {
  params: any;
  headers: {
    authorization?: string;
    recommendationKey?: string;
  };
  body?: any;
}
