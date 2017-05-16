import Vue from 'vue';
import GraphQLProvider from './GraphQLProvider';

const DEFAULT_API_URL = 'https://api.graph.cool/simple/v1';

const API_URL = localStorage.getItem('API_URL') || DEFAULT_API_URL;
localStorage.setItem('API_URL', API_URL);

const graphConnection = new GraphQLProvider(`${API_URL}/cj0jnmqnnfm7a0133p9uuxhy1`, {
  asJSON: true,
});

Vue.use(graphConnection);

export default graphConnection;

export const { graph, gql, setOptions } = graphConnection;
