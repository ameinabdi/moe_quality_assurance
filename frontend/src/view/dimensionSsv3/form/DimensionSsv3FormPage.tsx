import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionSsv3/form/dimensionSsv3FormActions';
import selectors from 'src/modules/dimensionSsv3/form/dimensionSsv3FormSelectors';
import { getHistory } from 'src/modules/store';
import DimensionSsv3Form from 'src/view/dimensionSsv3/form/DimensionSsv3Form';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv3FormPage = (props) => {
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
    ? i18n('entities.dimensionSsv3.edit.title')
    : i18n('entities.dimensionSsv3.new.title');

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
          [i18n('entities.dimensionSsv3.menu'), '/dimension-ssv3'],
          [title],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{title}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <DimensionSsv3Form
            saveLoading={saveLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/dimension-ssv3')}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv3FormPage;
