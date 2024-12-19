import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/district/form/districtFormActions';
import selectors from 'src/modules/district/form/districtFormSelectors';
import { getHistory } from 'src/modules/store';
import DistrictForm from 'src/view/district/form/DistrictForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DistrictFormPage = (props) => {
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
    ? i18n('entities.district.edit.title')
    : i18n('entities.district.new.title');

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
          [i18n('entities.district.menu'), '/district'],
          [title],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{title}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <DistrictForm
            saveLoading={saveLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/district')}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default DistrictFormPage;
