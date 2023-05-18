import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowRight, FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Card from '../components/Card';
import Api from '../services/api';
import BreadCrumb from '../components/BreadCrumb';

function Home() {
  const [apps, setApps] = useState([]);
  const getApps = useCallback(async () => {
    const res = await Api.get();
    setApps(res.data);
  }, [apps, setApps]);
  useEffect(() => {
    getApps();
  }, []);

  return (
    <DefaultLayout>
      <BreadCrumb />
      <ul>
        {apps.map((app) => (
          <li key={app.id}>
            <Card>
              <FaCircle size="25" color={app.status ? '#10C643' : '#C61010'} />
              <div className="info">
                <h3>{app.name}</h3>
                <a rel="noopener noreferrer" href={`//${app.url}`} style={{ textDecoration: 'none' }} target="_blank">
                  <small>{app.url}</small>
                </a>
              </div>
              <div className="arrow-right">
                <Link to={`/${app.id}`}>
                  <FaArrowRight size="25" />
                </Link>
              </div>

            </Card>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
}
export default Home;
