import { Link } from 'react-router';
import { ROUTES } from '@/shared/constants/routes.constants';

/**
 * 회원가입 페이지
 */
const SignupPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">회원가입</h1>
      <p className="text-gray-600">회원가입 페이지입니다. (개발 예정)</p>

      <Link to={ROUTES.LOGIN} className="text-blue-600 hover:underline">
        로그인
      </Link>
    </div>
  );
};

export default SignupPage;
