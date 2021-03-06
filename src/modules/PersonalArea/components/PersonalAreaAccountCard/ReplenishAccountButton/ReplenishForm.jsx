import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInput } from "../../../../../common/combineAntd";
import { required, number, normalizeValue } from '../../../validators/PersonalAreaValidators'
import { Button } from 'antd';

const ReplenishForm = React.memo((props) => {
  const { handleSubmit, pristine, submitting, loader } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field label="" name="replenishField" validate={[required, number]} normalize={normalizeValue} component={AInput} placeholder="Введите сумму пополнения" hasFeedback/>
      <Button type="primary" disabled={pristine || submitting} loading={loader} htmlType="submit">
        Пополнить
      </Button>
    </form>
  );
})

export default reduxForm({form: 'replenishForm'})(ReplenishForm)
