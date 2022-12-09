import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

type Props<T> = {
  promise: Promise<Response>;
  render: (state: LOADABLE_STATUS, value: T) => JSX.Element | null;
  customText?: any;
};

export enum LOADABLE_STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  ERROR = 'ERROR',
}

function Loadable(props: {customText?: string}) {
  return (
    <>
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" />
      </View>
      <Text>
        {props.customText ? props.customText : 'Chargement en cours...'}
      </Text>
    </>
  );
}

export function LoadableStatus<T>(props: Props<T>) {
  const [res, setRes] = useState<T | undefined>();
  const [state, setState] = useState<LOADABLE_STATUS>(LOADABLE_STATUS.IDLE);

  useEffect(() => {
    setState(LOADABLE_STATUS.LOADING);
    props.promise
      .then(response => {
        if (!response) {
          setState(LOADABLE_STATUS.ERROR);
        }
        response.json().then(results => {
          setState(LOADABLE_STATUS.SUCCEEDED);
          setRes(results);
        });
      })
      .catch(e => {
        setState(LOADABLE_STATUS.ERROR);
      });
  }, []);

  switch (state) {
    case LOADABLE_STATUS.IDLE:
    case LOADABLE_STATUS.LOADING:
      return <Loadable />;
    case LOADABLE_STATUS.ERROR:
      return <Loadable customText={'An error occured'} />;
    case LOADABLE_STATUS.SUCCEEDED:
      if (res) {
        return props.render(state, res);
      } else {
        return <Loadable customText={'An error occured'} />;
      }
  }
}