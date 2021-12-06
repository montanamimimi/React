import { REQUEST_STATUS } from "../../Utils/constants";

export const selectApiData = (state) => state.api.apiData;
export const selectApiLoading = (state) => state.api.request.status === REQUEST_STATUS.LOADING;
export const selectApiError = (state) => state.api.request.error;