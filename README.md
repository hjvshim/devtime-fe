# DevTime Frontend

React + TypeScript + Vite 기반의 프론트엔드 프로젝트입니다.

## 기술 스택

| 분류         | 기술                                 |
| ------------ | ------------------------------------ |
| Framework    | React 18.3                           |
| Language     | TypeScript 5.9                       |
| Build Tool   | Vite 7                               |
| Styling      | Tailwind CSS 4, CSS Modules(필요 시) |
| 상태 관리    | TanStack Query (React Query)         |
| 코드 품질    | ESLint, Prettier, Stylelint          |
| Git Hooks    | Husky, lint-staged                   |
| AI 코드 리뷰 | CodeRabbit                           |

## 시작하기

### 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
yarn dev
```

### 빌드

```bash
yarn build
```

## 스크립트

| 스크립트            | 설명                    |
| ------------------- | ----------------------- |
| `yarn dev`          | 개발 서버 실행          |
| `yarn build`        | 프로덕션 빌드           |
| `yarn preview`      | 빌드 결과 미리보기      |
| `yarn format`       | Prettier 포맷 검사      |
| `yarn format:write` | Prettier 포맷 적용      |
| `yarn lint`         | ESLint 검사             |
| `yarn lint:fix`     | ESLint 자동 수정        |
| `yarn lint:css`     | Stylelint CSS 검사      |
| `yarn lint:css:fix` | Stylelint CSS 자동 수정 |

## 프로젝트 구조

간소화된 [Feature-Sliced Design (FSD)](https://feature-sliced.design/) 아키텍처를 따릅니다.

```
src/
├── app/                    # 앱 초기화, 프로바이더, 전역 스타일
├── pages/                  # 라우트 레벨 페이지 컴포넌트
├── features/               # 비즈니스 로직 기능 (페이지 간 재사용)
│   └── {feature-name}/
│       ├── api/            # API 호출
│       ├── model/          # 상태, 훅, 상수
│       └── ui/             # UI 컴포넌트
└── shared/                 # 공유 유틸리티, UI 컴포넌트, API 클라이언트
    ├── api/
    ├── assets/
    ├── configs/            # ESLint, Prettier, Stylelint 설정
    ├── lib/
    └── ui/
```

## Path Alias

`@/` 경로를 사용하여 `src/` 폴더에 접근할 수 있습니다.

```typescript
// 변경 전
import { Button } from '../../../shared/ui/Button';

// 변경 후
import { Button } from '@/shared/ui/Button';
```

## 코드 품질 도구

### ESLint

TypeScript, React, React Hooks, JSX A11y, TanStack Query 규칙을 적용합니다.

- 설정 파일: `src/shared/configs/eslint.config.mjs`

### Prettier

일관된 코드 포맷팅을 위한 설정입니다.

- 설정 파일: `src/shared/configs/prettier.config.js`

### Stylelint

CSS 코드 품질을 위한 린터입니다.

- 설정 파일: `src/shared/configs/stylelint.config.mjs`

### Git Hooks (Husky + lint-staged)

커밋 전 자동으로 린트와 포맷팅을 실행합니다.

- JS/TS 파일: ESLint + Prettier 적용
- CSS 파일: Stylelint + Prettier 적용

## AI 코드 리뷰 (CodeRabbit)

PR 생성 시 CodeRabbit이 자동으로 코드 리뷰를 수행합니다.

- 설정 파일: `.coderabbit.yaml`
- 리뷰 언어: 한국어
- 리뷰 스타일: 친절하고 건설적인 톤
- 자동 라벨링: PR 내용에 따라 유형 라벨 자동 적용
- ESLint 연동: ESLint 결과를 리뷰에 반영
- 코드 컨벤션: `.cursor/rules/` 디렉토리의 규칙을 학습하여 리뷰에 반영
