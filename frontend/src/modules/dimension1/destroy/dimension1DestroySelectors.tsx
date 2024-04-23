import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension1.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension1DestroySelectors = {
  selectLoading,
};

export default dimension1DestroySelectors;
