import useDocumentTitle from '@/hooks/useDocumentTitle';
import useFetchData from '@/hooks/useFetchData';
import Spinner from '@/components/Spinner';
import PhotoItem from '@/views/PhotoItem';

const PB_CUCHI_ENDPOINT = `http://127.0.0.1:8090/api/collections/cuchi/records`;

function Cuchi() {
  useDocumentTitle('쿠치');

  const { data, isLoading, error } = useFetchData(PB_CUCHI_ENDPOINT);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return console.log(error);
  }

  return (
    <ul className="flex bg-slate-100">
      {data.items?.map((item) => (
        <PhotoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Cuchi;
