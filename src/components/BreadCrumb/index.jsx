import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import RootBreadCrumb from './styles';

function BreadCrumb() {
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split('/').filter((item) => item);
  return (
    <RootBreadCrumb>
      <div>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Apps</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Apps</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>{name}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>{name}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    </RootBreadCrumb>
  );
}

export default BreadCrumb;
