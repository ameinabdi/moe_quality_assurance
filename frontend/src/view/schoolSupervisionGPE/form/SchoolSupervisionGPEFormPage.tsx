import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/schoolSupervisionGPE/form/schoolSupervisionGPEFormActions';
import selectors from 'src/modules/schoolSupervisionGPE/form/schoolSupervisionGPEFormSelectors';
import { getHistory } from 'src/modules/store';
import SchoolSupervisionGPEForm from 'src/view/schoolSupervisionGPE/form/SchoolSupervisionGPEForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SchoolSupervisionGPEFormPage = (props) => {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useAppDispatch();
  const match = useParams();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.id);
  const title = isEditing
    ? i18n('entities.schoolSupervisionGPE.edit.title')
    : i18n('entities.schoolSupervisionGPE.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.id));
    setDispatched(true);
  }, [dispatch, match.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.schoolSupervisionGPE.menu'), '/school-supervision-g-p-e'],
          [title],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{title}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <SchoolSupervisionGPEForm
            saveLoading={saveLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/school-supervision-g-p-e')}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default SchoolSupervisionGPEFormPage;
