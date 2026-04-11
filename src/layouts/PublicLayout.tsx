import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import site from '../config/site';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const Convert = lazy(() => import('../pages/Convert'));
const Editor = lazy(() => import('../pages/Editor'));
const Templates = lazy(() => import('../pages/Templates'));
const TemplateDetail = lazy(() => import('../pages/TemplateDetail'));
const Documents = lazy(() => import('../pages/Documents'));
const DocumentDetail = lazy(() => import('../pages/DocumentDetail'));
const Guide = lazy(() => import('../pages/Guide'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth 페이지
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* HWP 기능 페이지 */}
            <Route path="/convert" element={<Convert />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/:id" element={<TemplateDetail />} />
            <Route path="/guide" element={<Guide />} />

            {/* 문서 관리 (AuthGuard) */}
            <Route path="/documents" element={<AuthGuard><Documents /></AuthGuard>} />
            <Route path="/documents/:id" element={<AuthGuard><DocumentDetail /></AuthGuard>} />

            {/* Auth */}
            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
              </>
            )}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
