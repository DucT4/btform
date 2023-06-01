import React, { Component } from 'react'
import Form from './Form';
import { createRef } from 'react';


export default class SinhVienThem extends Component {

    state = {
        arrSinhVien: [
            { maSV: '111', tenSV: 'nguyen van a', sdt: '012345678', email: 'nguyenvana@gmail.com' },
            { maSV: '222', tenSV: 'nguyen van b', sdt: '012788788', email: 'nguyenvanB@gmail.com' },
        ],
        sinhVienEdit: {
            maSV: '', tenSV: '', sdt: '', email: '' 
        }

    }
addItem = (prodClick) => {
    let newarrSinhVien = [...this.state.arrSinhVien];
    newarrSinhVien.push({ ...prodClick });
    this.setState({
        arrSinhVien: newarrSinhVien
    })
}
deleteItem = (idClick) => {
    let index = this.state.arrSinhVien.findIndex(sv => sv.id === idClick);
    if (index !== -1) {
        this.state.arrSinhVien.splice(index, 1)
    }
    this.setState({
        arrSinhVien: this.state.arrSinhVien
    })
}
EditSv=(svClick)=>{
    this.setState({
        sinhVienEdit:svClick
    })
}
renderTabletSinhVien = () => {
    return this.state.arrSinhVien.map((sv) => {
        return <tr key={sv.maSV}>
            <td>{sv.maSV}</td>
            <td>{sv.maSV}</td>
            <td>{sv.sdt}</td>
            <td>{sv.email}</td>
            <td>
                <button className='btn btn-danger' onClick={() => {
                    this.deleteItem(sv.id)
                }}><i className='fa fa-trash'></i></button>

                <button className='btn btn-primary' onClick={()=>{
                    this.EditSv(sv)
                }}><i className='fa fa-edit' ></i></button>
            </td>
        </tr>
    })
}
render() {
    return (
        <div className='container'>
            <Form  addItem={this.addItem} sinhVienEdit={this.state.sinhVienEdit} />
            <table className='table'>
                <thead className='bg-dark text-white fs-5 '>
                    <th>Mã sinh viên</th>
                    <th>Họ tên </th>
                    <th>Số điện thoại </th>
                    <th>Email</th>
                    <th></th>
                </thead>
                <tbody>
                    {this.renderTabletSinhVien()}
                </tbody>
            </table>
        </div>
    )
}
}
