import ReduxProvider from '../redux-provider';
import styles from './default-layout.module.scss';
import Footer from './footer';
import Header from './header';

const DefaultLayout = ({ children }) => {
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

export default DefaultLayout;
