import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { FaCircle } from 'react-icons/fa';
import DefaultLayout from '../components/DefaultLayout';
import AppCard from '../components/AppCard';
import Api from '../services/api';
import BreadCrumb from '../components/BreadCrumb';

function ToApp() {
  const [app, setApp] = useState([]);
  const params = useParams();
  const getApp = useCallback(async () => {
    const res = await Api.get(`/apps/${params.idApp}`);
    setApp(res.data);
  }, [app, setApp]);
  useEffect(() => {
    getApp();
  }, []);

  return (
    <DefaultLayout>
      <BreadCrumb />
      <AppCard>

        <div className="info">
          <h3>{app.name}</h3>
          <a rel="noopener noreferrer" href={`//${app.url}`} style={{ textDecoration: 'none' }} target="_blank">
            <small>{app.url}</small>
          </a>

        </div>
        <div className="status">
          <FaCircle size="25" color={app.status ? '#10C643' : '#C61010'} />
          <p>
            {app.status ? 'Working' : 'Not working'}
          </p>
        </div>

      </AppCard>

    </DefaultLayout>
  );
}
export default ToApp;
