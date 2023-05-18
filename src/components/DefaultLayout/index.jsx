import Container from '../Container';
import MainTitle from '../MainTitle';
import MainFooter from '../MainFooter';

function DefaultLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container>
        <MainTitle>System Resilient</MainTitle>
        {children}
      </Container>
      <MainFooter />
    </div>
  );
}
export default DefaultLayout;
