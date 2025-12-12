import { Link } from 'react-router';
import { ROUTES } from '@/shared/constants/routes.constants';

/**
 * 로그인 페이지
 */
const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">로그인</h1>
      <p className="text-gray-600">로그인 페이지입니다. (개발 예정)</p>

      <Link to={ROUTES.SIGNUP} className="text-blue-600 hover:underline">
        회원가입
      </Link>
    </div>
  );
};

export default LoginPage;
