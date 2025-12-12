import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './styles/index.css';
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Root Layout */}
        <Route path="/" element={<App />}>
          {/* Public Routes */}
          <Route index element={<Navigate to={ROUTES.TIMER} replace />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignupPage />} />

          {/* Protected Routes - 추후 인증 부분 추가 예정 */}
          <Route path={ROUTES.PROFILE_SETUP} element={<ProfileSetupPage />} />
          <Route path={ROUTES.TIMER} element={<MainPage />} />
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.RANKING} element={<RankingPage />} />
          <Route path={ROUTES.MYPAGE} element={<MyPage />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
