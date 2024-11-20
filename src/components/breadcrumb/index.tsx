import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumb = () => {
  const router = useRouter();
  const path = router.asPath.split('/').filter((item) => item);  // Tách đường dẫn thành các phần

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-600">
        {/* Breadcrumb Home */}
        <li>
          <Link href="/">
            <p className="text-blue-500">Home</p>
          </Link>
        </li>

        {/* Duyệt qua các phần tử trong đường dẫn và tạo breadcrumb */}
        {path.map((segment, index) => {
          const pathToSegment = `/${path.slice(0, index + 1).join('/')}`;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">→</span>
              <Link href={pathToSegment}>
                <p className="text-blue-500 capitalize">{segment}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
