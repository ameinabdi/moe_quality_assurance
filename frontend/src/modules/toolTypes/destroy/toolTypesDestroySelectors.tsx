import { createSelector } from 'reselect';

const selectRaw = (state) => state.toolTypes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const toolTypesDestroySelectors = {
  selectLoading,
};

export default toolTypesDestroySelectors;
