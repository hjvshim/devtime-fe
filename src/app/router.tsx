import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import { ROUTES } from '@/shared/constants/routes.constants';

// Pages
import { MainPage } from '@/pages/main';
import { LoginPage, SignupPage } from '@/pages/auth';
import { ProfileSetupPage } from '@/pages/profile';
import { DashboardPage } from '@/pages/dashboard';
import { RankingPage } from '@/pages/rankings';
import { MyPage } from '@/pages/mypage';
import { NotFoundPage } from '@/pages/error/not-found';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Root Layout */}
      <Route path="/" element={<App />}>
        {/* 타이머를 홈(/)에 배치 - 모든 사용자 접근 가능 */}
        <Route index element={<MainPage />} />

        {/* Public Routes */}
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignupPage />} />

        {/* Protected Routes - 추후 인증 부분 추가 예정 */}
        <Route path={ROUTES.PROFILE_SETUP} element={<ProfileSetupPage />} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.RANKING} element={<RankingPage />} />
        <Route path={ROUTES.MYPAGE} element={<MyPage />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
