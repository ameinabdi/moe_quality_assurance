import { createSelector } from 'reselect';

const selectRaw = (state) => state.district.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const districtDestroySelectors = {
  selectLoading,
};

export default districtDestroySelectors;
