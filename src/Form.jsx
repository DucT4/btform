import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        maSV: '',
        tenSV: '',
        sdt: '',
        email: ''
    }
    handleSubmitInput = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })

    }
    handleOnsubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        const { addItem } = this.props;
        addItem(this.state)
    }
    render() {
        const { maSV, tenSV, sdt, email } = this.props.sinhVienEdit;
        return (
            <form className='card mb-2 mt-5' onSubmit={this.handleOnsubmit} >
                <div className='card-header text-white bg-dark fs-3'>
                    <h4>Thông tin sinh viên</h4>
                </div>
                <div className='card-body '>
                    <div className='row'>
                        <div className='col-6 mt-2'>
                            <div className='form-group'>
                                <p>Mã sinh viên</p>
                                <input className='form-control' id='maSV' name='maSV' onInput={this.handleSubmitInput} value={maSV} />
                            </div>
                        </div>
                        <div className='col-6 mt-2'>
                            <div className='form-group'>
                                <p>Họ tên</p>
                                <input className='form-control' id='tenSV' name='tenSV' onInput={this.handleSubmitInput} value={tenSV} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 mt-2'>
                            <div className='form-group'>
                                <p>Số điện thoại</p>
                                <input className='form-control' id='sdt' name='sdt' onInput={this.handleSubmitInput} value={sdt} />
                            </div>
                        </div>
                        <div className='col-6 mt-2'>
                            <div className='form-group'>
                                <p>Email</p>
                                <input className='form-control' id='email' name='email' onInput={this.handleSubmitInput} value={email} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success' type='submit' onSubmit={this.handleOnsubmit} >Thêm sinh viên</button>
                </div>
            </form>

        )
    }

}
