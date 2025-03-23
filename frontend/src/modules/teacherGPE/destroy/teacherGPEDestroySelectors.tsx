import { createSelector } from 'reselect';

const selectRaw = (state) => state.teacherGPE.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const teacherGPEDestroySelectors = {
  selectLoading,
};

export default teacherGPEDestroySelectors;
