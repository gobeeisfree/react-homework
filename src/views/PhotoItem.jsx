import { getPbImageURL } from '@/utils';

function PhotoItem({ item }) {
  return (
    <li>
      <figure>
        <img src={getPbImageURL(item, 'photo')} alt="" />
        <figcaption></figcaption>
      </figure>
    </li>
  );
}

export default PhotoItem;
