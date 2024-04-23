import { createSelector } from 'reselect';

const selectRaw = (state) => state.deminsion2.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const deminsion2DestroySelectors = {
  selectLoading,
};

export default deminsion2DestroySelectors;
