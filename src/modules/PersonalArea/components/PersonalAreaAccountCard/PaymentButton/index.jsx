import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PaymentForm from './PaymentForm';
import {Button, Drawer } from 'antd';
import { paymentAccountModalShowSelector} from './../../../selectors/PersonalAreaSelectors';
import { paymentAccountLoader, paymentAccountModalHide, paymentAccountModalShow } from '../../../actions/';
import {reset} from 'redux-form';

export const PaymentButton = (props) => {
    const dispatch = useDispatch();
    const visible = useSelector(paymentAccountModalShowSelector);
    const handleCancel = () => {
        dispatch(paymentAccountModalHide());
    }
    const onClick = () => {
        dispatch(paymentAccountModalShow())
    }
    const handleSubmit = (values) => {
        dispatch(paymentAccountLoader({
            payload: values
        }));
        dispatch(reset('paymentForm'));
    }

    
    return <div>
            <Button onClick={onClick}>ПЛАТЕЖ</Button>
            <Drawer
                title="Платеж"
                placement="right"
                closable={true}
                onClose={handleCancel}
                visible={visible}
                >
                <PaymentForm onSubmit={handleSubmit}/>
            </Drawer>
        </div>
} 