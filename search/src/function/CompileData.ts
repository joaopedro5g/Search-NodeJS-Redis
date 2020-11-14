/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-shadow */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/prefer-default-export */
/* eslint-disable array-callback-return */

interface ConfigProps {
  params: any;
}

async function FilterData(data: any[], config?: ConfigProps) {
  const hash = config ? data.filter((item) => {
    for (const key in config.params) {
      if (item[key] === undefined || item[key] != config.params[key]) return false;
    }
    return true;
  }) : data;
  return hash;
}

export {
  FilterData,
};
