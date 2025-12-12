import { Outlet, useLocation } from 'react-router';
import { Navigation } from '@/shared/ui/layout';
import { isPublicRoute } from '@/shared/constants/routes.constants';

/**
 * Root 레이아웃 컴포넌트
 * Navigation, Footer와 함께 Outlet을 통해 페이지 렌더링
 */
const App = () => {
  const location = useLocation();

  // 현재 경로가 public인지 확인
  const isPublic = isPublicRoute(location.pathname);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation - protected 경로에서만 표시 */}
      {/* 추후 인증 상태에 따라 조건부 렌더링 필요 */}
      {!isPublic && <Navigation />}

      {/* Main Content Area - Outlet으로 페이지 렌더링 */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <div>© 2025 DevTime. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;
