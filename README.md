# My Blog

> 개인 블로그 및 아트워크 포트폴리오 웹사이트

이 프로젝트는 Next.js 기반의 개인 블로그 및 포트폴리오 웹사이트입니다. MDX를 통한 블로그 포스팅과 p5.js를 활용한 인터랙티브 아트워크를 결합한 구조를 가지고 있습니다.

## ✨ 주요 특징

- **📝 MDX 기반 블로그**: Contentlayer를 사용한 정적 블로그 생성
- **🎨 인터랙티브 아트워크**: p5.js를 활용한 동적 비주얼 요소
- **🎯 반응형 디자인**: Tailwind CSS를 통한 모던하고 반응형 UI
- **🚀 최적화된 성능**: Next.js의 Static Site Generation (SSG) 활용
- **🔍 SEO 최적화**: 자동 사이트맵 생성 및 메타데이터 관리
- **💫 애니메이션**: AOS(Animate On Scroll) 라이브러리를 통한 부드러운 스크롤 애니메이션

## 🛠 기술 스택

### 프론트엔드

- **Next.js 13**: React 기반 풀스택 프레임워크
- **TypeScript**: 정적 타입 지원
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **React 18**: 최신 React 기능 활용

### 콘텐츠 관리

- **Contentlayer**: MDX 파일을 통한 정적 콘텐츠 관리
- **MDX**: Markdown에 React 컴포넌트 임베딩 가능
- **Rehype/Remark**: 코드 하이라이팅 및 콘텐츠 처리

### 그래픽스 & 애니메이션

- **p5.js**: 창작 코딩 및 인터랙티브 아트
- **React-p5**: React와 p5.js 통합
- **AOS**: 스크롤 기반 애니메이션

### 개발 도구

- **ESLint**: 코드 품질 관리
- **PostCSS**: CSS 후처리
- **Autoprefixer**: 브라우저 호환성

## 📁 프로젝트 구조

```
my-blog/
├── components/           # React 컴포넌트
│   ├── Artwork/         # 아트워크 관련 컴포넌트
│   ├── common/          # 공통 컴포넌트
│   ├── HomeContents/    # 홈페이지 콘텐츠
│   └── p5js/           # p5.js 관련 컴포넌트
├── pages/               # Next.js 페이지
│   ├── blog/           # 블로그 상세 페이지
│   ├── draft/          # 드래프트 페이지
│   ├── blog.tsx        # 블로그 목록
│   ├── resume.tsx      # 이력서 페이지
│   └── artwork.tsx     # 아트워크 갤러리
├── posts/               # MDX 블로그 포스트
├── public/              # 정적 파일 (이미지, 파비콘 등)
├── data/                # 데이터 파일
├── hooks/               # 커스텀 React 훅
├── styles/              # 스타일 파일
└── .contentlayer/       # Contentlayer 생성 파일
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.x 이상
- npm 또는 yarn

### 설치 및 실행

1. **의존성 설치**

   ```bash
   npm install
   # 또는
   yarn install
   ```

2. **개발 서버 실행**

   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

3. **브라우저에서 확인**
   - [http://localhost:3000](http://localhost:3000)에서 결과 확인

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린팅
npm run lint
```

## 📝 블로그 포스트 작성

`posts/` 디렉토리에 `.mdx` 파일을 생성하여 새로운 블로그 포스트를 작성할 수 있습니다.

### 포스트 메타데이터 예시

```yaml
---
title: "포스트 제목"
description: "포스트 설명"
date: "2024-01-01"
tag: "태그"
thumbnail: "/images/thumbnail.png"
---
```

## 🎨 아트워크 추가

p5.js를 사용한 인터랙티브 아트워크는 `components/p5js/` 디렉토리에서 관리됩니다. 새로운 스케치를 추가하려면:

1. `components/p5js/` 에 새로운 스케치 파일 생성
2. `pages/artwork.tsx`에 스케치 추가
3. 필요한 경우 `data/` 디렉토리에 관련 데이터 추가

## 🌐 배포

이 프로젝트는 Vercel에서 쉽게 배포할 수 있습니다:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/my-blog)

또는 다른 정적 호스팅 서비스에서도 배포 가능합니다.

## 📄 라이선스

MIT License

## 🤝 기여하기

프로젝트 개선을 위한 기여를 환영합니다! Issue를 생성하거나 Pull Request를 제출해 주세요.

---

**Made with ❤️ using Next.js, TypeScript, and p5.js**
