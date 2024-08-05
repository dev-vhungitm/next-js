import { ReduxProvider } from '..';
import styles from './default-layout.module.scss';
import { Footer } from './footer';
import { Header } from './header';

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <ReduxProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ReduxProvider>
    </div>
  );
};
