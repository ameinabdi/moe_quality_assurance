import { createSelector } from 'reselect';

const selectRaw = (state) => state.tools.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const toolsDestroySelectors = {
  selectLoading,
};

export default toolsDestroySelectors;
