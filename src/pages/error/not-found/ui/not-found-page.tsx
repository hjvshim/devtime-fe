import { Link } from 'react-router';
import { ROUTES } from '@/shared/constants/routes.constants';

/**
 * 404 Not Found 페이지
 */
const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-8 text-xl text-gray-600">페이지를 찾을 수 없습니다.</p>
        <Link
          to={ROUTES.HOME}
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
