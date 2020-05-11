import { generateApiClient } from '@utils/apiUtils';
const repoApi = generateApiClient('itunes');

export const getMusics = term => repoApi.get(`/search?term=${term}`);
