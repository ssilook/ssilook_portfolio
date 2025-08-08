import Header from '@/components/layouts/Header';
import Container from '@/components/layouts/Container';

const DefaultLayout = () => {
  return (
    <>
        <Header />
        <main>
            <Container />
        </main>
    </>
  );
};

export default DefaultLayout;