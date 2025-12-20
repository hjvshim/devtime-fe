import { useState } from 'react';
import { Link } from 'react-router';
import { ROUTES } from '@/shared/constants/routes.constants';
import { TextField, Button, Checkbox } from '@/shared/ui';
import { TERMS_OF_SERVICE } from '@/shared/constants/terms.constant';
import LogoVerticalWhite from '@/shared/assets/logo/logo-vertical-wht.svg';

/**
 * 회원가입 페이지
 */
const SignupPage = () => {
  // Form states
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Validation states
  const [emailChecked, setEmailChecked] = useState(false);
  const [nicknameChecked, setNicknameChecked] = useState(false);

  const handleEmailCheck = () => {
    // TODO: 실제 중복 확인 API 호출
    setEmailChecked(true);
  };

  const handleNicknameCheck = () => {
    // TODO: 실제 중복 확인 API 호출
    setNicknameChecked(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 회원가입 API 호출
  };

  // 회원가입 버튼 활성화 조건
  const isFormValid =
    email &&
    nickname &&
    password &&
    passwordConfirm &&
    password === passwordConfirm &&
    emailChecked &&
    nicknameChecked &&
    termsAgreed;

  return (
    <div className="flex min-h-screen">
      {/* 왼쪽: 로고 영역 */}
      <div className="flex w-1/2 flex-col items-center justify-center bg-primary">
        <div className="flex flex-col items-center gap-9">
          <img
            src={LogoVerticalWhite}
            alt="DevTime Logo"
            className="h-[200px] w-[264px]"
          />
          <p className="text-title-s text-white">개발자를 위한 타이머</p>
        </div>
      </div>

      {/* 오른쪽: 폼 영역 */}
      <div className="flex w-1/2 items-center justify-center bg-white py-[60px]">
        <div className="w-[420px]">
          <form onSubmit={handleSubmit} className="space-y-9">
            {/* 제목 */}
            <h1 className="text-heading-b text-center text-primary">
              회원가입
            </h1>

            {/* 아이디 */}
            <TextField
              label="아이디"
              type="email"
              placeholder="이메일 주소 형식으로 입력해 주세요."
              value={email}
              onChange={(value) => {
                setEmail(value);
                setEmailChecked(false);
              }}
              buttonText="중복 확인"
              onButtonClick={handleEmailCheck}
              buttonDisabled={!email || emailChecked}
              required
              name="email"
              autoComplete="email"
            />

            {/* 닉네임 */}
            <TextField
              label="닉네임"
              placeholder="닉네임을 입력해 주세요."
              value={nickname}
              onChange={(value) => {
                setNickname(value);
                setNicknameChecked(false);
              }}
              buttonText="중복 확인"
              onButtonClick={handleNicknameCheck}
              buttonDisabled={!nickname || nicknameChecked}
              required
              name="nickname"
              maxLength={20}
            />

            {/* 비밀번호 */}
            <TextField
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={setPassword}
              required
              name="password"
              autoComplete="new-password"
              minLength={8}
            />

            {/* 비밀번호 확인 */}
            <TextField
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요."
              value={passwordConfirm}
              onChange={setPasswordConfirm}
              required
              error={
                passwordConfirm && password !== passwordConfirm
                  ? '비밀번호가 일치하지 않습니다.'
                  : undefined
              }
              autoComplete="new-password"
            />

            {/* 이용약관 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-body-small-m text-gray-600">
                  이용약관
                </span>
                <Checkbox
                  usage="regular"
                  checked={termsAgreed}
                  onChange={setTermsAgreed}
                  label="동의함"
                  labelPosition="left"
                  labelClassName="text-body-small-m text-primary/30 cursor-pointer"
                  id="terms-agreement"
                />
              </div>

              {/* 약관 내용 스크롤 박스 */}
              <div className="h-[86px] overflow-y-auto rounded-[5px] bg-gray-50 px-4 py-3">
                <pre className="whitespace-pre-wrap text-caption-r text-gray-600">
                  {TERMS_OF_SERVICE}
                </pre>
              </div>
            </div>

            {/* 회원가입 버튼 */}
            <Button
              type="submit"
              variant="primary"
              size="fill"
              disabled={!isFormValid}
            >
              회원가입
            </Button>

            {/* 로그인 링크 */}
            <div className="flex items-center justify-center gap-3 text-body-m text-primary">
              <span className="font-normal">회원이신가요?</span>
              <Link to={ROUTES.LOGIN} className="font-bold hover:underline">
                로그인 바로가기
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
