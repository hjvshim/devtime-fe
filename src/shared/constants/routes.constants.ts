/**
 * Route 경로 상수
 */
export const ROUTES = {
  // 공개 페이지
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',

  // 인증 필요 페이지
  PROFILE_SETUP: '/profile-setup',
  TIMER: '/timer',
  DASHBOARD: '/dashboard',
  RANKING: '/ranking',
  MYPAGE: '/mypage',
} as const;

/**
 * Route 타입
 */
export type Route = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * 공개 라우트 (로그인 불필요)
 */
export const PUBLIC_ROUTES: Route[] = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.SIGNUP,
];

/**
 * 인증 필요 라우트 (로그인 필요)
 */
export const PROTECTED_ROUTES: Route[] = [
  ROUTES.PROFILE_SETUP,
  ROUTES.TIMER,
  ROUTES.DASHBOARD,
  ROUTES.RANKING,
  ROUTES.MYPAGE,
];

/**
 * 로그인 후 첫 진입 시 분기
 */
export const AUTH_REDIRECT_ROUTES = {
  FIRST_LOGIN: ROUTES.PROFILE_SETUP,
  DEFAULT: ROUTES.TIMER,
} as const;

/**
 * 주어진 경로가 public인지 확인하는 타입 가드
 * @param pathname - 확인할 경로
 * @returns public 경로 여부
 */
export const isPublicRoute = (pathname: string): pathname is Route => {
  return PUBLIC_ROUTES.includes(pathname as Route);
};

/**
 * 주어진 경로가 protected인지 확인하는 타입 가드
 * @param pathname - 확인할 경로
 * @returns protected 경로 여부
 */
export const isProtectedRoute = (pathname: string): pathname is Route => {
  return PROTECTED_ROUTES.includes(pathname as Route);
};
