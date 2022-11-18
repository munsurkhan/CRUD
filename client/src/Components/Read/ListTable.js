import React, {useEffect, useState} from 'react';
import {Delete, Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper";
import {withRouter} from "react-router";

const ListTable = (props) => {

    //state
    let [DataList,SetDataList]=useState([]);

    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result);
        }).catch()
    },[])//planti Methode

    //Delete
    const DeleteItem = (id)=>{
        Delete(id).then((result)=>{
            if (result===true){
                SuccessToast("Data Delete Success");
                props.history.push("/");
            }else{
                ErrorToast("Data Delete Fail");
            }
        })
    }

    //Update
    const UpdateItem = (id)=>{
        alert(id)
    }



    if (DataList.length>0){
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Product Image</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            DataList.map((item,i)=>{
                                return(
                                    <tr>
                                        <td>{item.ProductName}</td>
                                        <td>{item.ProductCode}</td>
                                        <td><img className="list-img" src={item.Img} alt="image"/></td>
                                        <td>{item.UnitPrice}</td>
                                        <td>{item.Qty}</td>
                                        <td>{item.TotalPrice}</td>
                                        <td>
                                            <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-sm btn-danger mx-1 p-2">Delete</button>
                                            <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-sm btn-warning mx-1 p-2">Update</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    else {
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }

};

export default withRouter(ListTable);