import React, {useRef} from 'react';

const CreateForm = () => {

    let ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice = useRef();
    
    const SaveData = () => {
      let Product_Name = ProductName.value;
      let Product_Code = ProductCode.value;
      let Product_Img = Img.value;
      let Unit_Price = UnitPrice.value;
      let Product_Qty = Qty.value;
      let Total_Price = TotalPrice.value;

    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label>Product Name</label>
                    <input ref={(input)=>ProductName=input} type="text" className="form-control"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Product Code</label>
                    <input ref={(input)=>ProductCode=input} type="text" className="form-control"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Product Image</label>
                    <input ref={(input)=>Img=input} type="text" className="form-control"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Unit Price</label>
                    <input ref={(input)=>UnitPrice=input} type="text" className="form-control"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Quantity</label>
                    <input ref={(input)=>Qty=input} type="text" className="form-control"/>
                </div>

                <div className="col-md-4 p-2">
                    <label>Total Price</label>
                    <input ref={(input)=>TotalPrice=input} type="text" className="form-control"/>
                </div>
            </div>

            <br/>
            <div className="row">
                <div className="col-md-4 p-2">
                    <button onClick={SaveData} className="btn btn-primary w-100">Save</button>
                </div>
            </div>
            
        </div>
    );
};

export default CreateForm;