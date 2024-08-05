import DefaultLayout from '@/components/common/layout/default-layout';
import { strings } from '@/constants';
import '@/styles/globals.scss';

export const metadata = {
  title: strings.appName,
  description: strings.appDescription
};

const RootLayout = ({ children }) => {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
};

export default RootLayout;
