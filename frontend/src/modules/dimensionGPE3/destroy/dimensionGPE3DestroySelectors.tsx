import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE3.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE3DestroySelectors = {
  selectLoading,
};

export default dimensionGPE3DestroySelectors;
