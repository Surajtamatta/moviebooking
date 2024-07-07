import { Select } from 'antd';
import React from 'react';

export interface LabeledValue {
  key?: string;
  value: string;
  label: React.ReactNode;
}

interface PopupsType {
  placeholder?: React.ReactNode;
  mode?: 'multiple' | 'tags';
  onChange?: (value: string[]) => void;
  options?: any[];
}

const SelectComponent: React.FC<PopupsType> = ({ placeholder, mode = 'tags', onChange, options }) => {
  return (
    <Select
      mode={mode}
      style={{ width: '100%' }}
      placeholder={placeholder}
      onChange={onChange}
      options={options}
      open
      dropdownRender={menu => (
        <div style={{
          maxHeight:150,
          overflowY:'auto'
        }}>
          {menu}
        </div>
      )}
    />
  );
};

export default SelectComponent;
