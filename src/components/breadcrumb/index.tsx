import Link from "next/link";
import { useRouter } from "next/router";

const breadcrumbMapping: Record<string, string> = {
  home: "Home",
  product: "Product",
  greentree: "Green Tree",
};

const Breadcrumb = () => {
  const router = useRouter();
  const path = router.asPath.split("/").filter((item) => item);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-600">
        {/* Link Home */}
        <li>
          <Link href="/">
            <p className="text-[#014e37]">Home</p>
          </Link>
        </li>

        {/* Tạo đường dẫn */}
        {path.map((segment, index) => {
          const pathToSegment = `/${path.slice(0, index + 1).join("/")}`;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">→</span>
              <Link href={pathToSegment}>
                <p className="text-blue-500 capitalize">
                  {/* Nếu không có trong mapping thì lấy `segment` */}
                  {breadcrumbMapping[segment] ?? segment}
                </p>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
