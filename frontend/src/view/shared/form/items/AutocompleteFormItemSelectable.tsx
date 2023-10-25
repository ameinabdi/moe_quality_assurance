import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Radio, Row, Col, Typography } from 'antd';
import unionBy from 'lodash/unionBy';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { i18n } from 'src/i18n';
import FormErrors from 'src/view/shared/form/formErrors';
import { useDebouncedCallback } from 'use-debounce';
import { useFormContext } from 'react-hook-form';
import RadioGroup from 'antd/lib/radio/group';
const { Text } = Typography;

const AUTOCOMPLETE_SERVER_FETCH_SIZE = 100;

const AutocompleteFormItemSelectable = (props) => {
  const {
    //@ts-ignore
    watch,
    setValue,
    register,
    //@ts-ignore
    formState: {    errors, touchedFields, isSubmitted },
  } = useFormContext();

  const {
    label,
    name,
    hint,
    layout,
    size,
    placeholder,
    autoFocus,
    externalErrorMessage,
    defaultActiveFirstOption,
    allowClear,
    mode,
    required,

    fetchFn,
    mapper,
  } = props;

  const originalValue = watch(name);

  useEffect(() => {
    //@ts-ignore
    register(name);
  }, [register, name]);

  const [
    serverSideDataSource,
    setServerSideDataSource,
  ] = useState<Array<any>>([]);

  const [
    inMemoryDataSource,
    setInMemoryDataSource,
  ] = useState<Array<any>>([]);

  const [fullDataSource, setFullDataSource] = useState<
    Array<any>
  >([]);
  const [loading, setLoading] = useState(false);

  const currentQuery = useRef('NOT_INITIALIZED');

  useEffect(() => {
    mergeValueToOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalValue]);

  useEffect(() => {
    handleSearch('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mergeValueToOptions = () => {
    if (!originalValue) {
      return;
    }

    let valueAsArray =
      (mode === 'multiple'
        ? originalValue
        : [originalValue]) || [];

    valueAsArray = valueAsArray
      .filter(Boolean)
      .map(mapper.toAutocomplete)
      .map((item) => ({
        id: item.key,
        label: item.label,
      }));

    setInMemoryDataSource((inMemoryDataSource) =>
      unionBy(inMemoryDataSource, valueAsArray, 'id'),
    );

    setServerSideDataSource((serverSideDataSource) =>
      unionBy(serverSideDataSource, valueAsArray, 'id'),
    );
  };

  const dataSource = props.inMemoryFilter
    ? inMemoryDataSource
    : serverSideDataSource;

  const prioritizeFromDataSource = (selected) => {
    return (
      (dataSource || []).find(
        (item) => item.id === selected.key,
      ) || selected
    );
  };

  const valueMultiple = () => {
    if (originalValue) {
      return originalValue.map((value) =>
        mapper.toAutocomplete(
          prioritizeFromDataSource(value),
        ),
      );
    }

    return [];
  };

  const valueOne = () => {
    if (originalValue) {
      return mapper.toAutocomplete(
        prioritizeFromDataSource(originalValue),
      );
    }

    // Antd requires undefined on the select
    return undefined;
  };

  const value =
    mode === 'multiple' ? valueMultiple() : valueOne();

  const handleSelect = (value) => {
    if (mode === 'multiple') {
      return handleSelectMultiple(value);
    } else {
      return handleSelectOne(value);
    }
  };

  const handleSelectMultiple = (values) => {
    if (!values) {
      setValue(name, [], { shouldValidate: true, shouldDirty: true });
      props.onChange && props.onChange([]);
      return;
    }

    const newValue = values.map((value) =>
      mapper.toValue(value),
    );
    setValue(name, newValue, { shouldValidate: true, shouldDirty: true });
    props.onChange && props.onChange(newValue);
  };

  const handleSelectOne = (value) => {
    if (!value) {
      setValue(name, null, { shouldValidate: true, shouldDirty: true });
      props.onChange && props.onChange(null);
      return;
    }
    const data =dataSource.filter((item) => {return item.id === value.key ? {value:value.value,id:value.key, key:value.key, data:item.data}: null})
    const newValue = mapper.toValue(data[0]);
    setValue(name, newValue, { shouldValidate: true, shouldDirty: true });
    props.onChange && props.onChange(newValue);
  };

  const handleSearch = async (value) => {
    if (props.inMemoryFilter) {
      return handleInMemorySearch(value);
    }

    return handleServerSearch(value);
  };

  const handleInMemorySearch = async (value) => {
    let _fullDataSource = fullDataSource;

    if (!_fullDataSource || !_fullDataSource.length) {
      _fullDataSource = await fetchAllResults();
    }

    setInMemoryDataSource(
      _fullDataSource.filter((item) =>
        String(item.label || '')
          .toLowerCase()
          .includes(String(value || '').toLowerCase()),
      ),
    );
    setLoading(false);
  };

  const fetchAllResults = async () => {
    setLoading(true);

    try {
      const results = await fetchFn();
      setFullDataSource(results);
      setLoading(false);
      return results;
    } catch (error) {
      console.error(error);
      setFullDataSource([]);
      setLoading(false);
      return [];
    }
  };

  const handleServerSearch = async (value) => {
    if (value === currentQuery.current) {
      return;
    }

    currentQuery.current = value;
    setLoading(true);

    try {
      const serverSideDataSource = await fetchFn(
        value,
        AUTOCOMPLETE_SERVER_FETCH_SIZE,
      );

      if (currentQuery.current === value) {
        setLoading(false);
        setServerSideDataSource(serverSideDataSource);
      }
    } catch (error) {
      console.error(error);

      if (currentQuery.current === value) {
        setLoading(false);
        setServerSideDataSource([]);
      }
    }
  };

  const debouncedSearch = useDebouncedCallback(
    handleSearch,
    300,
  );

  useEffect(
    () => () => {
      debouncedSearch.flush();
    },
    [debouncedSearch]
  );

  const options = dataSource
    .filter((item) => Boolean(item.id))
    .map((d) => {
      return (
        <Col span={12}>
        <Radio.Button key={d.id} value={d.id} style={{ display:'flex',  height:100, marginLeft:5,  marginRight:5, justifyContent:'center', alignItems:'center', textAlign:'center' }}>
          <div style={{}}>
            <div>{d.data?.currency?.currency}</div>
            <div>{d.data?.balance}</div>
          </div>
        </Radio.Button >
        </Col>
      )
    });

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <Form.Item
      {...layout}
      label={label}
      required={required}
      labelAlign="left"
      requiredMark={required}
      validateStatus={errorMessage ? 'error' : 'success'}
      help={
        loading
          ? i18n('autocomplete.loading')
          : errorMessage || hint
      }
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <Radio.Group
        id={name}
        size={size || 'large'}
        onChange={(e) => {
          const data =dataSource.filter((item) => {return item.id === e.target.value ? {value:item.label,id:item.id, key:item.id, data:item.data}: null})
          const newValue = mapper.toValue(data[0]);
          setValue(name, newValue, { shouldValidate: true, shouldDirty: true });
          props.onChange && props.onChange(e.target.value);
        }}
        value={watch(name)?.id || ''}
        buttonStyle="solid"
        style={{
          width:'100%'
        }}
        
        >
         
        <Row gutter={24} style={{ width:'100%'}}>
        {options}
        </Row>
        </Radio.Group>
       
      </div>
    </Form.Item>
  );
};

AutocompleteFormItemSelectable.defaultProps = {
  layout: null,
  defaultActiveFirstOption: true,
  allowClear: true,
  mode: 'default',
  required: false,
  inMemoryFilter: false,
};

AutocompleteFormItemSelectable.propTypes = {
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultActiveFirstOption: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  allowClear: PropTypes.bool,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,

  inMemoryFilter: PropTypes.bool,
};

export default AutocompleteFormItemSelectable;
