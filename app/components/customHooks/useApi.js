import { useState, useEffect } from 'react';
// import { submitLogout } from '../containers/login/actions';
// import { useStore } from '../store';

export const useApi = (
  initialUrl,
  initialParams = {},
  options = { method: 'GET' },
  initialLoad = true,
  fileUpload = false,
) => {
  const [url, updateUrl] = useState(initialUrl);
  const [params, updateParams] = useState(initialParams);
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [, dispatch] = useStore();
  const BASE_URL = process.env.BASE_URL || 'http://192.168.10.2:5000/api';
  let fetchOptions = {};

  // Private function to make options for post request
  const _makeOptions = payload => {
    const commonOptions = {
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include',
    };

    const formDataOptions = {
      ...options,
      // credentials: 'include',
      body: payload,
    };

    const payloadOptions = {
      ...options,
      ...commonOptions,
      body: options.method !== 'GET' ? JSON.stringify(payload) : null,
    };

    return fileUpload ? formDataOptions : payloadOptions;
  };
  const fetchData = async data => {
    let queryString = '';
    setIsLoading(true);
    if (data) {
      updateParams(data);
      setHasError(false);
      // If GET request, data should be sent as query string
      if (data && options.method === 'GET') {
        queryString =
          '?' +
          Object.keys(data)
            .map(
              key =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
            )
            .join('&');
      }
    }
    fetchOptions = _makeOptions(data);

    let responseData;
    let hasError;
    let errorMessage;
    let code;
    try {
      const response = await fetch(
        `${BASE_URL}${url}${queryString}`,
        fetchOptions,
      );
      if (response.ok) {
        responseData = await response.json();
        setResponseData(responseData);
      } else {
        hasError = true;
        setHasError(hasError);
        setErrorMessage(responseData);
        setErrorCode(response.status);
        code = response.status;
        if (response.status === 401 || response.status === 403) {
          // dispatch(submitLogout());
        } else if (response.status === 500) {
          errorMessage = 'Internal Server Error';
        }
        throw Error(response.statusText);
      }
    } catch (err) {
      hasError = true;
      errorMessage = err.message;
      setHasError(hasError);
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
    return { responseData, hasError, errorMessage, errorCode: code };
  };

  useEffect(() => {
    if (initialLoad) {
      fetchData(params);
    }
  }, [url, params]);

  return [
    {
      responseData,
      isLoading,
      hasError,
      errorMessage,
      updateUrl,
      updateParams,
      errorCode,
    },
    fetchData,
  ];
};
