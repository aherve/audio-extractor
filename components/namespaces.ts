import axios from 'axios'

export interface NamespaceListItem {
  namespaceID: string
  version: string
}

export async function listNamespaces(): Promise<NamespaceListItem[]> {
  return axios
    .get(`${process.env.RESTAPI_ENDPOINT}/namespaces`)
    .then((resp) => resp.data['allNamespaceIDs'])
}
