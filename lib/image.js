import ImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
