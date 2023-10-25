import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import actions from 'src/modules/tenant/list/tenantListActions';

const TenantListFilter = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default TenantListFilter;
