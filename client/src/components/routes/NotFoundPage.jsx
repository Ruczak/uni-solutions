import React, { useEffect, useState } from 'react';

import IndexPage from './IndexPage';
import Modal from '../Modal/Modal';

const NotFoundPage = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => setModal(true), []);

  return (
    <React.Fragment>
      <IndexPage />
      <Modal
        type="failure"
        title="Couldn't find page"
        description={`Path ${window.location.href} not found`}
        options={[{ label: 'OK' }]}
        onDisplay={(v) => setModal(v)}
        show={modal}
      />
    </React.Fragment>
  );
};

export default NotFoundPage;
