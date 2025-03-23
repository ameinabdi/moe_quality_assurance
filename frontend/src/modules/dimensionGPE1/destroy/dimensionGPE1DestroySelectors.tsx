import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE1.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE1DestroySelectors = {
  selectLoading,
};

export default dimensionGPE1DestroySelectors;
